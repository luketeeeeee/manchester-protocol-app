import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import manchesterLogo from '../../assets/manchester-logo.png';
import { PatientProps, usePatientsStore } from './stores';
import { CreatePatientSchemaType, createPatientSchema } from './home.helpers';
import { PatientCard } from '../patient-card';

type RenderPatientsCardsProps = {
  data: PatientProps[];
};

const RenderPatientsCards = ({ data }: RenderPatientsCardsProps) => {
  if (data?.length > 0) {
    return data.map((patient) => {
      if (patient.id) {
        return <PatientCard key={patient.id} {...patient} />;
      }
    });
  }
};

export const Home = () => {
  const { patients, createPatient, findAllPatients, deleteAllPatients } =
    usePatientsStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePatientSchemaType>({
    resolver: zodResolver(createPatientSchema),
  });

  const onSubmit: SubmitHandler<CreatePatientSchemaType> = async (data) => {
    await createPatient(data);
    reset();
    findAllPatients();
  };

  useEffect(() => {
    findAllPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col items-center pt-10">
        <img src={manchesterLogo} alt="logo do manchester city" className="w-12" />
        <h1 className="text-[#94C6F2] pt-2 text-3xl font-bold text-center leading-7">
          Protocolo de Manchester
        </h1>
        <p className="text-sm text-gray-300">(an ai based app, i hope so)</p>
      </div>

      <div className="pt-10 w-11/12 mx-auto sm:w-[600px] leading-5 flex flex-col items-center font-semibold text-center">
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <h1 className="text-lg font-semibold">Registre um novo paciente</h1>

            <div className="w-full flex flex-col mt-5">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-left">
                  Nome:*
                </label>
                <input
                  id="name"
                  type="text"
                  autoFocus
                  {...register('name')}
                  className="mt-1 bg-slate-300 text-lg w-full rounded-lg h-9 pl-2"
                />
                {errors.name ? (
                  <p className="text-sm text-red-500">{errors.name?.message}</p>
                ) : (
                  <p className="mt-5"></p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="cpf" className="text-left">
                  CPF:
                </label>
                <input
                  id="cpf"
                  type="text"
                  maxLength={11}
                  {...register('cpf')}
                  className="mt-1 bg-slate-300 text-lg w-full rounded-lg h-9 pl-2"
                />
                {errors.cpf ? (
                  <p className="text-sm text-red-500">{errors.cpf?.message}</p>
                ) : (
                  <p className="mt-5"></p>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <button
                type="submit"
                className="bg-[#0545a6] text-white py-3 text-xl rounded-lg"
              >
                Registrar
              </button>
              <button
                type="button"
                onClick={async () => {
                  await deleteAllPatients();
                  findAllPatients();
                }}
                className="bg-[#68727c] text-white py-1 text-xl rounded-lg"
              >
                Limpar lista
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="pt-10 w-11/12 mx-auto sm:w-[600px] leading-5 pb-10 flex flex-col items-center font-semibold text-center">
        <h1 className="text-xl font-semibold">Pacientes registrados</h1>

        <div className="w-full mt-4 gap-4 flex flex-col">
          <RenderPatientsCards data={patients} />
        </div>
      </div>
    </div>
  );
};
