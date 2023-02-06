/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * A basic logger, which does not output anything in test mode.
 */
export const logger =
  process.env.NODE_ENV === "test"
    ? {
        log: () => {},
        info: () => {},
        warn: () => {},
        error: () => {}
      }
    : console
