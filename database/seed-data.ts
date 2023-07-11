import { Entry } from '../interfaces';

type SeedData = {
  entries: SeedEntry[];
};

type SeedEntry = Omit<Entry, '_id'>;

export const seedData: SeedData = {
  entries: [
    {
      description: 'Lorem ipsum dolor sit amet',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'Lorem ipsum in course',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'completed',
      createdAt: Date.now() - 100024,
    },
  ],
};
