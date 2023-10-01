import { findAll } from './find-all';
import { findById } from './find-by-id';
import { create } from './create';
import { update } from './update';
import { remove } from './delete';
import { removeAll } from './delete-all';

export const PatientController = {
  findAll,
  findById,
  create,
  update,
  remove,
  removeAll,
};
