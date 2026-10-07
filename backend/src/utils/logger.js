import { env } from '../config/env.js';

/**
 * Lightweight structured console logger
 */
function createLogger() {
  const formatLog = (level, message, requestId, details) => ({
    level,
    message,
    timestamp: new Date().toISOString(),
    ...(requestId ? { requestId } : {}),
    ...(details !== undefined ? { details } : {})
  });

  const output = (payload) => {
    const serialized = JSON.stringify(payload);
    switch (payload.level) {
      case 'error':
        console.error(serialized);
        break;
      case 'warn':
        console.warn(serialized);
        break;
      case 'debug':
        if (env.NODE_ENV !== 'production') {
          console.debug(serialized);
        }
        break;
      default:
        console.log(serialized);
    }
  };

  return {
    info: (msg, reqId, details) => output(formatLog('info', msg, reqId, details)),
    warn: (msg, reqId, details) => output(formatLog('warn', msg, reqId, details)),
    error: (msg, reqId, details) => output(formatLog('error', msg, reqId, details)),
    debug: (msg, reqId, details) => output(formatLog('debug', msg, reqId, details))
  };
}

export const logger = createLogger();
