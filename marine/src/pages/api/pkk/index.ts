import { NextApiRequest, NextApiResponse } from 'next/types';
import Database from '../../../data-source'
import { Pkk } from "../../../entity/Pkk";
import { ApiResponseType } from "src/types/api/responseType";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseType>) {

  let stsCode;
  let sts;
  let stsMessage;
  let resmsg;

  if (req.method === 'GET') {
    const { id } = req.query;

    const db = new Database({ entities: [Pkk] })

    try {
      const ds = await db.connect()

      const rep = ds.getRepository(Pkk);

      const data = (id === "a") ? await rep.find() : await rep.find({ where: { vesId: `${id}` } });

      stsCode = "200";
      sts = true;
      stsMessage = "succeed"
      resmsg = data;

    } catch (error) {
      stsCode = "500";
      sts = false;
      stsMessage = "failed"
      resmsg = error.message;
    } finally {
      await db.disconnect()

      const resJson: ApiResponseType = {
        errorCode: stsCode,
        message: stsMessage,
        status: sts,
        data: resmsg,
      }

      return res.status(stsCode).json(resJson);
    }

  } else if (req.method === "POST") {

    const db = new Database({ entities: [Pkk] })

    try {
      const body: Pkk = req.body

      const ds = await db.connect()

      await ds.transaction(async (manager) => {
        const pkk = body

        manager.insert(Pkk, pkk)

        stsCode = 200;
        sts = true;
        stsMessage = "succeed"
      })

    } catch (error) {
      stsCode = "500";
      sts = false;
      stsMessage = "failed"
      resmsg = error.message;

      console.log(resmsg)
    } finally {
      await db.disconnect()

      const resJson: ApiResponseType = {
        errorCode: stsCode,
        message: stsMessage,
        status: sts,
        data: resmsg,
      }

      return res.status(stsCode).json(resJson);
    }
  }
}
