import { getRepository } from 'typeorm';
import { Company } from '../entities/company.entity';

const repo = () => getRepository(Company);

export async function listCompanies() {
  return repo().find();
}
export async function getCompany(id: number) {
  return repo().findOneBy({ id });
}
export async function createCompany(data: Partial<Company>) {
  const c = repo().create(data);
  return repo().save(c);
}
export async function updateCompany(id: number, data: Partial<Company>) {
  await repo().update(id, data);
  return getCompany(id);
}
export async function deleteCompany(id: number) {
  return repo().delete(id);
}
