// backend/src/app.ts
import express, { Request, Response } from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';

dotenv.config();

// Зареждаме Swagger спецификацията
const swaggerDocument = YAML.load(__dirname + '/swagger.yaml');

// 1. Създаваме и конфигурираме Express инстанцията
const app = express();
app.use(express.json());

// 2. Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 3. Health-check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// TODO: добавете тук останалите рутове:
// import authRouter from './routes/auth';
// app.use('/auth', authRouter);

// 4. Експортираме app за тестове (без да стартираме нищо автоматично)
export default app;

// 5. Функция за стартиране на връзката към база и HTTP сървъра
export async function bootstrap() {
  try {
    await createConnection();
    console.log('✅ Database connected');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚀 Backend listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Error during app bootstrap:', err);
    process.exit(1);
  }
}

// 6. Стартираме bootstrap() само ако файлът е изпълнен директно
if (require.main === module) {
  bootstrap();
}
