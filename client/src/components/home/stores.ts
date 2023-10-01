import { create } from 'zustand';
import { CreatePatientSchemaType, UpdatePatientSchemaType } from './home.helpers';

export type PatientProps = {
  id?: string;
  name?: string;
  cpf?: string;
  currentResult?: string;
  sum: number;
};

type usePatientStoreType = {
  patients: [];
  patient: PatientProps;
  createPatient: (data: CreatePatientSchemaType) => void;
  findAllPatients: () => void;
  findPatientById: (id: string | undefined) => void;
  updatePatient: (data: UpdatePatientSchemaType, id: string | undefined) => void;
  deleteAllPatients: () => void;
};

export const usePatientsStore = create<usePatientStoreType>((set) => ({
  patients: [],
  patient: {
    sum: 0,
  },
  createPatient: async (data) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/patients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          cpf: data.cpf,
        }),
      }).then(async (response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new String(text);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  findAllPatients: async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/patients`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        set({ patients: result.data.reverse() });
      }
    } catch (error) {
      console.log(error);
    }
  },
  findPatientById: async (id: string | undefined) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/patients/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        set({ patient: result.data });
      }
    } catch (error) {
      console.log(error);
    }
  },
  updatePatient: async (data, id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/patients/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `${import.meta.env.VITE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        if (!response.ok) {
          console.log(response);
          return response.text().then((text) => {
            throw new String(text);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteAllPatients: async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/patients`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('apagado com sucesso');
    } catch (error) {
      console.log(error);
    }
  },
}));
