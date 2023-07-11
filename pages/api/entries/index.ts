import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry | IEntry[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);

    case 'POST':
      return res.status(200).json({ message: 'POST' });

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

async function getEntries(res: NextApiResponse<Data>) {
  await db.connect();
  const entries = await Entry.find({}).sort({ createdAt: -1 });
  await db.disconnect();

  return res.status(200).json(entries);
}
