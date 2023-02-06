// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handler } from "@/lib/api-fns"

type Data = {
  name: string
}

export default handler<Data>((req, res) => {
  res.status(200).json({ status: "ok", data: { name: "John Doe" } })
})
