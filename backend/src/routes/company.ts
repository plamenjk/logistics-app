// backend/src/routes/company.ts
import express, { Request, Response, NextFunction, Router } from 'express';
import {
  listCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} from '../services/company.service';

const router = express.Router();

// GET /api/companies
router.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const all = await listCompanies();
      res.json(all);
    } catch (err) {
      next(err);
    }
  }
);

// GET /api/companies/:id
router.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => {
    (async () => {
      const id = Number(req.params.id);
      const comp = await getCompany(id);
      if (!comp) {
        return res.status(404).json({ error: 'Not found' });
      }
      res.json(comp);
    })().catch(next);
  }
);

// POST /api/companies
router.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comp = await createCompany(req.body);
      res.status(201).json(comp);
    } catch (err) {
      next(err);
    }
  }
);

// PUT /api/companies/:id
router.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const comp = await updateCompany(id, req.body);
      res.json(comp);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /api/companies/:id
router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await deleteCompany(id);
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
