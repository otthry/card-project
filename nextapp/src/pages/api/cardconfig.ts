import { cardConfig } from '@/data/cardconfig'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  data: any
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({'data' : cardConfig})
}
