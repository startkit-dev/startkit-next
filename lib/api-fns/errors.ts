/**
 * Generic HTTP error, which falls back to 500
 */
export class HttpError extends Error {
  status = 500

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Internal Error", ...args)
  }
}

/**
 * HTTP 400 Bad Request (aka Validation Error)
 */
export class ValidationError extends HttpError {
  status = 400

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Bad Request", ...args)
  }
}

/**
 * HTTP 401 Unauthorized
 */
export class UnauthorizedError extends HttpError {
  status = 401

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Unauthorized", ...args)
  }
}

/**
 * HTTP 404 Not Found
 */
export class NotFoundError extends HttpError {
  status = 404

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Not Found", ...args)
  }
}

/**
 * HTTP 405 Method Not Allowed
 */
export class MethodNotAllowedError extends HttpError {
  status = 405

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Method Not Allowed", ...args)
  }
}
