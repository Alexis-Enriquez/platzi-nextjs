import { NextApiRequest, NextApiResponse } from "next";
import DB from '../../../database/db'


const allAvos = async(request: NextApiRequest, response:NextApiResponse)=>{
    const db = new DB()

    let id = request.query.id

    const entry = await db.getById(id.toString())

    response.status(200).json(entry)
}

export default allAvos