import { MongoMemoryServer } from 'mongodb-memory-server';

export const getMongoURI = async () => {
  if (process.env.NODE_ENV === 'test') {
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    return { uri };
  }
  return { uri: 'mongodb://localhost:27017/tst' };
};