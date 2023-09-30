import { create } from 'zustand';

export type PatientProps = {
  id: string;
  name: string;
  cpf?: string;
  currentResult?: string;
};

type usePatientStoreType = {};

export const usePatientsStore = create<usePatientStoreType>((set) => ({}));
