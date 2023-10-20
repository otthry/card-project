import { cardTemplate } from '@/data/cardservice'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  data: any
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({'data' : cardTemplate})
}
