import type { ApiResponse } from "./handler"

/**
 *
 */
export const apiFetch = async <T>(
  url: string,
  options?: RequestInit
): Promise<T | void> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json"
    }
  })

  const json = (await response.json()) as ApiResponse<T>

  if (json.status !== "ok") {
    throw new Error(json.error)
  }

  if ("data" in json) {
    return json.data
  }
}
