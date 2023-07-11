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
      return postEntry(req, res);

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

async function postEntry(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { description = '' } = req.body;
  const entry = new Entry({
    description,
    status: 'pending',
    createdAt: new Date(),
  });

  try {
    await db.connect();
    const createdEntry = await entry.save();
    await db.disconnect();

    return res.status(201).json(createdEntry);
  } catch (error: any) {
    await db.disconnect();
    console.log(error);

    if (error.errors?.description?.kind === 'required')
      return res.status(400).json({ message: 'Description is required' });

    return res.status(500).json({ message: 'Error creating entry' });
  }
}
