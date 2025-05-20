// backend/src/app.ts
import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';

import dbConfig from './ormconfig';
import companyRouter  from './routes/company';
import clientRouter   from './routes/client';
import officeRouter   from './routes/office';
import packageRouter  from './routes/package';
import employeeRouter from './routes/employee';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const app = express();
app.use(express.json());   // важно за body parsing

// Swagger (load from project root)
const swaggerDoc = YAML.load(path.resolve(process.cwd(), 'swagger.yaml'));

// Mount routers
app.use('/api/companies', companyRouter);
app.use('/api/clients',   clientRouter);
app.use('/api/offices',   officeRouter);
app.use('/api/packages',  packageRouter);
app.use('/api/employees', employeeRouter);

// Error handler
interface ErrorWithStatus extends Error {
  status?: number;
}

app.use((err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' });
});

if (require.main === module) {
  createConnection(dbConfig)
    .then(() => {
      console.log('✅ Database connected');
      const PORT = process.env.PORT || 3001;
      app.listen(PORT, () =>
        console.log(`🚀 Backend listening on http://localhost:${PORT}`)
      );
    })
    .catch((err) => {
      console.error('❌ DB connection error:', err);
      process.exit(1);
    });
}

export default app;
