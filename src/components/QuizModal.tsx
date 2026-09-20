import React from 'react';
import { BIHAR_QUIZ_QUESTIONS } from '../data/quiz';
import { Award, CheckCircle, XCircle, RefreshCw, X, Sparkles, Trophy } from 'lucide-react';

interface QuizModalProps {
  onClose: () => void;
  language: 'en' | 'hi';
}

export const QuizModal: React.FC<QuizModalProps> = ({ onClose, language }) => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);

  const currentQ = BIHAR_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < BIHAR_QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const percentage = Math.round((score / BIHAR_QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div
        className="bg-[#FBF9F5] border border-[#EADBCE] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1E2124] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C85A32] flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white leading-tight">
                {language === 'hi' ? 'बिहार ज्ञान प्रश्नोत्तरी' : 'Bihar 360 Knowledge Quiz'}
              </h3>
              <p className="text-xs text-[#EADBCE]/80">
                {language === 'hi' ? 'इतिहास, भूगोल एवं संस्कृति पर अपनी परख' : 'Test your knowledge of Bihar’s heritage'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!quizFinished && (
          <div className="bg-[#F4EFE6] px-5 py-2 border-b border-[#EADBCE] flex items-center justify-between text-xs font-semibold text-[#2D3238]">
            <span>Question {currentIdx + 1} of {BIHAR_QUIZ_QUESTIONS.length}</span>
            <span className="px-2 py-0.5 rounded bg-[#C85A32]/10 text-[#C85A32] font-bold">
              Score: {score}
            </span>
          </div>
        )}

        {/* Quiz Body */}
        <div className="p-6">
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Question */}
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2C5D75]/10 text-[#2C5D75] mb-2 inline-block">
                  {currentQ.category}
                </span>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1E2124] leading-snug">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentQ.correctAnswer;

                  let btnStyle = 'border-[#EADBCE] bg-white hover:bg-[#F4EFE6] text-[#1E2124]';

                  if (isAnswered) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'border-rose-600 bg-rose-50 text-rose-950 font-bold';
                    } else {
                      btnStyle = 'border-[#EADBCE] bg-gray-50 opacity-60 text-gray-700';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-[#EADBCE]/50 flex items-center justify-center font-bold text-xs">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isAnswered && isCorrect && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#EADBCE] text-xs text-[#2D3238] space-y-1 animate-in fade-in duration-150">
                  <span className="font-bold text-[#A54420] block uppercase tracking-wider text-[11px]">
                    {selectedAnswer === currentQ.correctAnswer ? '✓ Correct Answer' : '✗ Explanation'}
                  </span>
                  <p className="leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Next Question button */}
              {isAnswered && (
                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl bg-[#C85A32] hover:bg-[#A54420] text-white font-serif font-bold text-sm transition-colors shadow-xs"
                >
                  {currentIdx < BIHAR_QUIZ_QUESTIONS.length - 1 ? 'Next Question →' : 'View Final Score'}
                </button>
              )}
            </div>
          ) : (
            /* Finished Certificate Screen */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-amber-700 shadow-md">
                <Trophy className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-serif font-bold text-2xl text-[#1E2124]">
                  Quiz Completed!
                </h4>
                <p className="text-xs text-[#2D3238]/70 mt-1">
                  You scored <strong className="text-[#C85A32] text-sm">{score}</strong> out of {BIHAR_QUIZ_QUESTIONS.length} ({percentage}%)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#EADBCE] max-w-md mx-auto text-xs text-[#2D3238]">
                {percentage >= 80 ? (
                  <p className="font-serif font-bold text-sm text-emerald-800">
                    🏆 Outstanding Scholar of Bihar Heritage! Your deep understanding of Magadh, Mithila, and modern Bihar is exceptional.
                  </p>
                ) : percentage >= 50 ? (
                  <p className="font-serif font-bold text-sm text-[#A54420]">
                    ✨ Commendable Effort! You have a solid grasp of Bihar’s monumental history and cultural landscape.
                  </p>
                ) : (
                  <p className="font-serif font-bold text-sm text-[#2D3238]">
                    📖 Keep Exploring! Use the Bihar 360 Atlas to discover more about all 38 districts and their storied monuments.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-[#C85A32] text-white font-serif font-bold text-xs hover:bg-[#A54420] transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-white border border-[#EADBCE] text-[#1E2124] font-serif font-bold text-xs hover:bg-[#F4EFE6] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
