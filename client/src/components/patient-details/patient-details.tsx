import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePatientsStore } from '../home/stores';

export const PatientDetails = () =>
  //   {
  //   name,
  //   cpf,
  //   currentResult,
  // }: {
  //   name: string;
  //   cpf?: string;
  //   currentResult?: string;
  // }
  {
    const { patientId } = useParams();
    const { patient, findPatientById, updatePatient } = usePatientsStore();
    // const [sum, setSum] = useState<number>(0);

    useEffect(() => {
      findPatientById(patientId);
    }, []);

    useEffect(() => {
      console.log(patient);

      const select = async () => {
        if (!patient?.currentResult || patient.currentResult) {
          if (patient.sum >= 0 && patient.sum < 24) {
            await updatePatient({ currentResult: 'blue' }, patient?.id);
          }

          if (patient.sum >= 24 && patient.sum < 74) {
            await updatePatient({ currentResult: 'green' }, patient?.id);
          }

          if (patient.sum >= 74 && patient.sum < 149) {
            await updatePatient({ currentResult: 'yellow' }, patient?.id);
          }

          if (patient.sum >= 149 && patient.sum < 1000) {
            await updatePatient({ currentResult: 'orange' }, patient?.id);
          }

          if (patient.sum >= 1000) {
            await updatePatient({ currentResult: 'red' }, patient?.id);
          }

          findPatientById(patientId);
        }
      };

      select();
    }, [patient]);

    if (patient)
      return (
        <div className="h-full flex flex-col">
          <div className="pt-7 w-11/12 mx-auto sm:w-[600px] leading-5 flex flex-col items-center font-semibold text-center">
            <Link to="/" className="underline">
              voltar
            </Link>
            <h1 className="text-center pt-8 text-xl">Dados do paciente</h1>

            <div className="mt-5 self-start w-full">
              <div>
                <h1 className="text-lg text-left">Nome: {patient.name}</h1>
                {patient.cpf ? (
                  <h1 className="text-lg text-left">CPF: {patient.cpf}</h1>
                ) : (
                  <h1 className="text-lg text-left">CPF: não informado</h1>
                )}
              </div>
            </div>

            <div className="w-full mt-5">
              {patient.currentResult ? (
                <div className="w-full">
                  {patient.currentResult === 'red' && (
                    <>
                      <p className="w-full bg-red-700 text-lg text-white">vermelho</p>
                      <p className="w-full bg-red-700 text-lg text-white">
                        atendimento imediato
                      </p>
                    </>
                  )}
                  {patient.currentResult === 'orange' && (
                    <>
                      <p className="w-full bg-orange-600 text-lg text-white">laranja</p>
                      <p className="w-full bg-orange-600 text-lg text-white">
                        atendimento em até 10 minutos
                      </p>
                    </>
                  )}
                  {patient.currentResult === 'yellow' && (
                    <>
                      <p className="w-full bg-yellow-400 text-lg text-white">amarelo</p>
                      <p className="w-full bg-yellow-400 text-lg text-white">
                        atendimento em até 1 hora
                      </p>
                    </>
                  )}
                  {patient.currentResult === 'green' && (
                    <>
                      <p className="w-full bg-green-700 text-lg text-white">verde</p>
                      <p className="w-full bg-green-700 text-lg text-white">
                        atendimento em até 2 horas
                      </p>
                    </>
                  )}
                  {patient.currentResult === 'blue' && (
                    <>
                      <p className="w-full bg-blue-700 text-lg text-white">azul</p>
                      <p className="w-full bg-blue-700 text-lg text-white">
                        atendimento em até 4 horas
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full bg-zinc-400 py-5 text-lg">não determinado</div>
              )}
            </div>

            <div className="mt-5 gap-3 flex flex-col w-full">
              <p className="leading-4">
                Selecione as opções de acordo com suas observações
              </p>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 1000 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 1000 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">
                  Apresenta sinais de choque ou está inconsciente
                </p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 1000 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 1000 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">
                  Mostra uma respiração ineficaz com sinais de engasgo
                </p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 149 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 149 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Criança com febre alta</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 149 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 149 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Paciente apresenta dor severa</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 149 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 149 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">
                  Demonstra alterações constantes no nível de consciência
                </p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 149 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 149 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">
                  Apresenta uma hemorragia fora de controle
                </p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 74 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 74 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Paciente tem dor moderada</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 74 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 74 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Vômito persistente e constante</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 24 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 24 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Apenas com dores leves</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 24 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 24 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Febre baixa</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 24 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 24 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Vômitos esporádicos</p>
              </div>

              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 11 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 11 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Troca de sondas</p>
              </div>
              <div className="gap-2 rounded-lg flex py-4 px-2 bg-zinc-300 w-full">
                <input
                  type="checkbox"
                  onChange={async (e) => {
                    if (e.target.checked) {
                      await updatePatient({ sum: patient.sum + 11 }, patientId);
                    } else {
                      await updatePatient({ sum: patient.sum - 11 }, patientId);
                    }
                  }}
                />
                <p className="leading-4 text-left">Aplicação de medicação de rotina</p>
              </div>
            </div>
          </div>
        </div>
      );

    return <div className="text-center pt-10">paciente não encontrado</div>;
  };
