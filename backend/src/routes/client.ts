// backend/src/routes/client.ts
import express from 'express';
import * as clientService from '../services/client.service';
const router = express.Router();

// GET /api/clients
router.get('/', async (req, res, next) => {
  try {
    const data = await clientService.listClients();
    res.json(data);
  } catch (err) { next(err); }
});

// GET /api/clients/:id
router.get('/:id', async (req, res, next) => {
  try {
    const item = await clientService.getClient(+req.params.id);
    item ? res.json(item) : res.sendStatus(404);
  } catch (err) { next(err); }
});

// POST /api/clients
router.post('/', async (req, res, next) => {
  try {
    const created = await clientService.createClient(req.body);
    res.status(201).json(created);
  } catch (err) { next(err); }
});

// PUT /api/clients/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await clientService.updateClient(+req.params.id, req.body);
    updated ? res.json(updated) : res.sendStatus(404);
  } catch (err) { next(err); }
});

// DELETE /api/clients/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await clientService.deleteClient(+req.params.id);
    res.sendStatus(204);
  } catch (err) { next(err); }
});

export default router;
