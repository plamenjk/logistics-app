// backend/src/routes/employee.ts
import express from 'express';
import * as empService from '../services/employee.service';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try { res.json(await empService.listEmployees()); } catch (err) { next(err); }
});
router.get('/:id', async (req, res, next) => {
  try {
    const e = await empService.getEmployee(+req.params.id);
    e !== null ? res.json(e) : res.sendStatus(404);
  } catch (err) { next(err); }
});
router.post('/', async (req, res, next) => {
  try { res.status(201).json(await empService.createEmployee(req.body)); } catch (err) { next(err); }
});
router.put('/:id', async (req, res, next) => {
  try {
    const e = await empService.updateEmployee(+req.params.id, req.body);
    e !== undefined ? res.json(e) : res.sendStatus(404);
  } catch (err) { next(err); }
});
router.delete('/:id', async (req, res, next) => {
  try {
    await empService.deleteEmployee(+req.params.id);
    res.sendStatus(204);
  } catch (err) { next(err); }
});

export default router;
