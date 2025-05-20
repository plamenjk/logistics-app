// backend/ormconfig.ts
import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || 'logistics_user',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'logistics',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entities/*.{ts,js}'],
};

export default config;
