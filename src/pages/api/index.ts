import type { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '../../utils/database';

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { db } = await connect();

  if (req.method === 'GET') {
    const cursor = db.collection('users').find({});

    const data = await cursor.toArray();
    // console.table(data);
    res.status(200).json(data);
  }
}
