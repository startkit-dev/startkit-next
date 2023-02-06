import { logger } from "@/lib/logger"

import { HttpError } from "./errors"

import type { NextApiHandler } from "next"

/**
 * Base API success response, without any data
 */
export type ApiResponseSuccessEmpty = {
  status: "ok"
}

/**
 * API success response with a data property
 */
export type ApiResponseSuccessWithData<T> = ApiResponseSuccessEmpty & {
  data: T
}

/**
 * The API Success response, which will enforce having a `data` attribute if
 * defined, otherwise, it will enforce excluding the data property.
 */
export type ApiResponseSuccess<T> = T extends void
  ? ApiResponseSuccessEmpty
  : ApiResponseSuccessWithData<T>

/**
 * The API Error response
 */
export type ApiResponseError = {
  status: "error"
  error: string
}

export type ApiResponse<T = void> = ApiResponseSuccess<T> | ApiResponseError

/**
 * Wrap an API handler with additional logging, error handling, etc.
 *
 * @param handler the api handler
 * @returns a wrapped api handler
 */
export const handler = <T = void>(
  handler: NextApiHandler<ApiResponse<T>>
): NextApiHandler<ApiResponse<T>> => {
  const startTime = new Date()

  return async (req, res) => {
    // Log the HTTP request
    logger.info(`➡️  ${req.method} ${req.url} ...`)

    try {
      await handler(req, res)
    } catch (e) {
      logger.error(`API Error: ${req.method} ${req.url}`, e)

      if (e instanceof HttpError) {
        res.status(e.status).json({
          status: "error",
          error: e.message
        })
      } else {
        res.status(500).json({
          status: "error",
          error: "Internal server error"
        })
      }
    }

    /**
     * Log the HTTP response if we're in development mode
     */
    logger.info(
      `⬅️  ${req.method} ${req.url} took ${
        new Date().getTime() - startTime.getTime()
      }ms`
    )
  }
}
