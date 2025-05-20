// backend/src/routes/package.ts
import express from 'express';
import * as pkgService from '../services/package.service';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try { res.json(await pkgService.listPackages()); } catch (err) { next(err); }
});
router.get('/:id', async (req, res, next) => {
  try {
    const p = await pkgService.getPackage(+req.params.id);
    p !== null && p !== undefined ? res.json(p) : res.sendStatus(404);
  } catch (err) { next(err); }
});
router.post('/', async (req, res, next) => {
  try { res.status(201).json(await pkgService.createPackage(req.body)); } catch (err) { next(err); }
});
router.put('/:id', async (req, res, next) => {
  try {
    const p = await pkgService.updatePackage(+req.params.id, req.body);
    if (p !== null && p !== undefined) {
      res.json(p);
    } else {
      res.sendStatus(404);
    }
  } catch (err) { next(err); }
});
router.delete('/:id', async (req, res, next) => {
  try {
    await pkgService.deletePackage(+req.params.id);
    res.sendStatus(204);
  } catch (err) { next(err); }
});

export default router;
