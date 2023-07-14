import { NextApiRequest, NextApiResponse } from "next/types";
import DataBase from "src/data-source";
import { ApiResponseType } from "src/types/api/responseType";

interface data {
  id: string
}

const Handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseType>
) => {
  let isError = false;
  const db = new DataBase({ entities: [] })
  let resCode = '00';
  let resMsg = 'Succeed';
  let result: data[] = [];

  if (req.method === 'OPTIONS') {
    res.status(200).end();

    return;
  }

  switch (req.method) {
    case 'GET':
      try {
        const connection = await db.connect();

        result = [];
        if (result.length <= 0) {
          resCode = '99'
          resMsg = "Data not found!"
        }
      } catch (error) {
        isError = true;
        resCode = '01';
        resMsg = "Terjadi Kesalahan Transaksi : " + error;
      } finally {
        if (isError) {
          res.status(401).json({ errorCode: resCode, message: resMsg, data: result })
        } else {
          res.status(200).json({ errorCode: resCode, status: isError, message: resMsg, data: result })
        }
        await db.disconnect();
      }
      break;
    default:
      res.status(405).json({ errorCode: '02', status: true, message: "Method Not Allowed", data: result })
      break;
  }
}

export default Handler
