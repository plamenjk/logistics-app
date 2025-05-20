// backend/src/routes/office.ts
import express from 'express';
import * as officeService from '../services/office.service';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try { res.json(await officeService.listOffices()); } catch (err) { next(err); }
});
router.get('/:id', async (req, res, next) => {
  try {
    const o = await officeService.getOffice(+req.params.id);
    o !== undefined && o !== null ? res.json(o) : res.sendStatus(404);
  } catch (err) { next(err); }
});
router.post('/', async (req, res, next) => {
  try { res.status(201).json(await officeService.createOffice(req.body)); } catch (err) { next(err); }
});
router.put('/:id', async (req, res, next) => {
  try {
    const updatedOffice = await officeService.updateOffice(+req.params.id, req.body);
    updatedOffice !== undefined && updatedOffice !== null ? res.json(updatedOffice) : res.sendStatus(404);
  } catch (err) { next(err); }
});
router.delete('/:id', async (req, res, next) => {
  try {
    await officeService.deleteOffice(+req.params.id);
    res.sendStatus(204);
  } catch (err) { next(err); }
});

export default router;
