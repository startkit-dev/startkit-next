import { handler } from "@/lib/api-fns"

type Data = {
  pong: string
}

const gitSha = process.env.VERCEL_GIT_COMMIT_SHA || "local"

/**
 * Healthcheck API endpoint which returns with success if the server is healthy,
 * and responds with the latest git sha.
 */
export default handler<Data>((_req, res) => {
  res.status(200).json({ status: "ok", data: { pong: gitSha.substring(0, 7) } })
})
