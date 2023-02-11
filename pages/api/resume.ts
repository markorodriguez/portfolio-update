// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import stream from 'stream'
import { promisify } from 'util'
import fetch from 'node-fetch'

type Data = {
  name: string
}

const pipeline = promisify(stream.pipeline)
const url = '/documents/Marko_Rodriguez-CV.pdf'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //res.status(200).json({ name: 'John Doe' })
  const response:any = await fetch(url)
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename=Marko_Rodriguez-CV.pdf')
  await pipeline(response.body, res)

}
