import { Db, MongoClient } from 'mongodb';
import { Token } from 'typedi';

export type Mongo = Db;
export const MongoToken = new Token<Mongo>('Mongo');

export type { MongoClient };
export const MongoClientToken = new Token<MongoClient>('MongoClient');
