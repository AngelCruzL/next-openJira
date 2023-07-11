import mongoose from 'mongoose';

/**
 *   0 = disconnected
 *   1 = connected
 *   2 = connecting
 *   3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0,
};

export async function connect() {
  if (mongoConnection.isConnected) {
    console.log('Database is connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log('Database is already connecting');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URI || '');
  mongoConnection.isConnected = 1;
  console.log('Using mongo database');
}

export async function disconnect() {
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log('Database is disconnected');
}
