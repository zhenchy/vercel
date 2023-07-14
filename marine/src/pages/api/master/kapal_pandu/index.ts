import { NextApiRequest, NextApiResponse } from 'next/types';
import { MasterFasilitas } from '../../../../entity/MasterFasilitas2'
import { SysCodesLocal } from '../../../../entity/SysCodesLocal'
import { ApiResponseType } from 'src/types/api/responseType';
import DataBase from 'src/data-source';


interface data_result {
  id: string;
  jn_fasilitas?: string;
  nm_fasilitas?: string;


}

const Handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseType>
) => {
    let isError = false;
    const db = new DataBase({ entities: [MasterFasilitas,SysCodesLocal],log:true })
    let resCode = '00';
    let resMsg = 'Succeed';
    let result: data_result[] = [];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(200).end();

      return;
    }



  switch (req.method) {
    case 'GET':
      try {
        const {id} = req.query;
        const connection = await db.connect();
        const repo = connection.getRepository(MasterFasilitas);
        const response = await repo.createQueryBuilder("a")
        .select("a.FASILITAS_ID", "FASILITAS_ID")
        .addSelect("a.NM_FAS", "NM_FAS")
        .addSelect("a.JN_FAS", "JN_FAS")
        .addSelect("a.STATUS", "STATUS")
        .addSelect("DECODE(a.STATUS, '1', 'ACTIVE', '0', 'NOT ACTIVE', 'NOT SET')" , "STATUS_DESCR")
        .addSelect('b.DESCR','JN_FAS_DESCR')
        .innerJoin("a.SysCodesLocal", "b", "b.CODE_TP = 'JN_FAS'")
        // .where("status='1'")
        //.andWhere(id ? "fasilitas_id=:vid" : "1=1" )
        .where(id ? "fasilitas_id=:vid" : "1=1" )
        .setParameters({
          vid: id,
        })
        .getRawMany()



        result = response.map((data) => ({
          id: data.FASILITAS_ID,
          jn_fasilitas : data.JN_FAS,
          jn_fasilitas_descr : data.JN_FAS_DESCR,
          nm_fasilitas : data.NM_FAS,
          st_fasilitas : data.STATUS,
          st_fasilitas_descr : data.STATUS_DESCR,
        }));
        //console.log(result);









        if (result.length <= 0) {
          resCode = '99'
          resMsg = "Data not found!"
        }

        // await queryRunner1.connect();
        // const result = await queryRunner1.query(
        //     `SELECT A.*FROM OP_H A LEFT JOIN KADE B ON (A.SITE_ID=B.SITE_ID AND A.GROUP_ID = B.GROUP_ID AND A.KD_KADE=B.KD_KADE)`
        //   );
        //   console.log("result = ",result)
        //   await queryRunner1.release()
    } catch (error) {
        isError = true;
        resCode = '01';
        resMsg = 'Terjadi Kesalahan Transaksi ' + error;
      } finally {
        if (isError) {
          res.status(401).json({ errorCode: resCode, message: 'Unauthorized', data: result })
        } else {
          res.status(200).json({ errorCode: resCode, message: resMsg, data: result });
        }

        await db.disconnect()
      }
      break;
    case 'PUT':
      const { id } = req.body;
      console.log("id : ", id)
      isError = false;
      res.status(200).json({ errorCode: resCode, message: resMsg, data: result, status: isError });
      break;
    default:
      res.status(405).json({ errorCode: '02', message: 'Metode Tidak Diizinkan' });
      break;
  }
};

export default Handler;
