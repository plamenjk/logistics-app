import { getRepository } from 'typeorm';
import { Client } from '../entities/client.entity';

const repo = () => getRepository(Client);

export async function listClients() {
  return repo().find();
}

export async function getClient(id: number) {
  return repo().findOne({ where: { id } });
}

export async function createClient(data: Partial<Client>) {
  const c = repo().create(data);
  return repo().save(c);
}

export async function updateClient(id: number, data: Partial<Client>) {
  await repo().update(id, data);
  return getClient(id);
}

export async function deleteClient(id: number) {
  await repo().delete(id);
}
