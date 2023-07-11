import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `Invalid id: ${id}` });
  }

  switch (req.method) {
    case 'GET':
      return getEntry(req, res);

    case 'PUT':
      return updateEntry(req, res);

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}

async function getEntry(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  await db.connect();
  const entry = await Entry.findById(id);
  await db.disconnect();

  if (entry) return res.status(200).json(entry);

  return res.status(404).json({ message: `Entry not found: ${id}` });
}

async function updateEntry(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(404).json({ message: `Entry not found: ${id}` });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true },
    );
    await db.disconnect();

    return res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    console.log(error);

    if (error.errors.status.properties.message)
      return res.status(400).json({ message: 'Invalid status' });

    return res.status(500).json({ message: 'Error creating entry' });
  }
}
