import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { MusicTrack } from '../types';
import { MUSIC_TRACKS } from '../data/music';

interface MusicPlayerContextType {
  currentTrack: MusicTrack | null;
  isPlaying: boolean;
  isPlayerVisible: boolean;
  isExpanded: boolean;
  volume: number; // 0 - 100
  isMuted: boolean;
  currentTime: number; // in seconds
  duration: number; // in seconds
  playlist: MusicTrack[];
  activeTrackIndex: number;
  playTrack: (track: MusicTrack, customPlaylist?: MusicTrack[]) => void;
  togglePlay: () => void;
  pauseTrack: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seekTo: (seconds: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  toggleExpand: () => void;
  setIsExpanded: (expanded: boolean) => void;
  closePlayer: () => void;
  openPlayer: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(80);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(300);
  const [playlist, setPlaylist] = useState<MusicTrack[]>(MUSIC_TRACKS);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const progressTimerRef = useRef<number | null>(null);

  // Parse duration "MM:SS" into seconds
  const parseDuration = useCallback((durationStr?: string): number => {
    if (!durationStr) return 300;
    const parts = durationStr.split(':');
    if (parts.length === 2) {
      const mins = parseInt(parts[0], 10) || 0;
      const secs = parseInt(parts[1], 10) || 0;
      return mins * 60 + secs;
    }
    return 300;
  }, []);

  // Sync simulated or live playback timer
  useEffect(() => {
    if (isPlaying) {
      progressTimerRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      }
    }
    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [isPlaying, duration]);

  // Send message to YouTube IFrame API
  const sendIframeCommand = useCallback((command: string, args: any[] = []) => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: command,
            args: args
          }),
          '*'
        );
      }
    } catch {
      // ignore cross-origin postMessage errors
    }
  }, []);

  const playTrack = useCallback((track: MusicTrack, customPlaylist?: MusicTrack[]) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setIsPlayerVisible(true);
    setCurrentTime(0);
    setDuration(parseDuration(track.durationMinutes));

    if (customPlaylist && customPlaylist.length > 0) {
      setPlaylist(customPlaylist);
    }

    // Command iframe to load and play video
    setTimeout(() => {
      sendIframeCommand('loadVideoById', [track.youtubeId, 0]);
      sendIframeCommand('playVideo');
      sendIframeCommand('setVolume', [isMuted ? 0 : volume]);
    }, 150);
  }, [parseDuration, sendIframeCommand, isMuted, volume]);

  const togglePlay = useCallback(() => {
    if (!currentTrack) {
      if (playlist.length > 0) {
        playTrack(playlist[0]);
      }
      return;
    }
    if (isPlaying) {
      setIsPlaying(false);
      sendIframeCommand('pauseVideo');
    } else {
      setIsPlaying(true);
      sendIframeCommand('playVideo');
    }
  }, [currentTrack, isPlaying, playlist, playTrack, sendIframeCommand]);

  const pauseTrack = useCallback(() => {
    setIsPlaying(false);
    sendIframeCommand('pauseVideo');
  }, [sendIframeCommand]);

  const activeTrackIndex = currentTrack
    ? playlist.findIndex(t => t.id === currentTrack.id)
    : 0;

  const nextTrack = useCallback(() => {
    if (playlist.length === 0) return;
    const currentIndex = currentTrack
      ? playlist.findIndex(t => t.id === currentTrack.id)
      : -1;
    const nextIndex = (currentIndex + 1) % playlist.length;
    playTrack(playlist[nextIndex]);
  }, [playlist, currentTrack, playTrack]);

  const prevTrack = useCallback(() => {
    if (playlist.length === 0) return;
    const currentIndex = currentTrack
      ? playlist.findIndex(t => t.id === currentTrack.id)
      : 0;
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    playTrack(playlist[prevIndex]);
  }, [playlist, currentTrack, playTrack]);

  const seekTo = useCallback((seconds: number) => {
    setCurrentTime(seconds);
    sendIframeCommand('seekTo', [seconds, true]);
  }, [sendIframeCommand]);

  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(100, vol));
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
    sendIframeCommand('setVolume', [clamped]);
  }, [isMuted, sendIframeCommand]);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      setIsMuted(false);
      sendIframeCommand('unMute');
      sendIframeCommand('setVolume', [volume]);
    } else {
      setIsMuted(true);
      sendIframeCommand('mute');
    }
  }, [isMuted, volume, sendIframeCommand]);

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const closePlayer = useCallback(() => {
    setIsPlaying(false);
    setIsPlayerVisible(false);
    setIsExpanded(false);
    sendIframeCommand('stopVideo');
  }, [sendIframeCommand]);

  const openPlayer = useCallback(() => {
    setIsPlayerVisible(true);
  }, []);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        isPlayerVisible,
        isExpanded,
        volume,
        isMuted,
        currentTime,
        duration,
        playlist,
        activeTrackIndex: activeTrackIndex >= 0 ? activeTrackIndex : 0,
        playTrack,
        togglePlay,
        pauseTrack,
        nextTrack,
        prevTrack,
        seekTo,
        setVolume,
        toggleMute,
        toggleExpand,
        setIsExpanded,
        closePlayer,
        openPlayer
      }}
    >
      {children}

      {/* Official YouTube Hidden/Background IFrame API Carrier (Persistent across App) */}
      {currentTrack && (
        <div
          className="fixed -bottom-96 -right-96 pointer-events-none opacity-0 overflow-hidden w-1 h-1"
          aria-hidden="true"
        >
          <iframe
            ref={iframeRef}
            id="bihar360-canonical-yt-player"
            title={`Bihar 360 Audio Carrier - ${currentTrack.title}`}
            src={`https://www.youtube-nocookie.com/embed/${currentTrack.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.origin : ''
            )}&autoplay=${isPlaying ? 1 : 0}&playsinline=1&controls=0&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={-1}
            className="w-1 h-1"
          />
        </div>
      )}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};
