import { Link } from 'react-router-dom';

export const PatientCard = ({
  id,
  name,
  cpf,
  currentResult,
}: {
  id?: string;
  name?: string;
  cpf?: string;
  currentResult?: string;
}) => {
  return (
    <Link
      to={`/${id}`}
      className="w-full rounded-lg justify-between bg-zinc-300 flex pl-3 text-lg"
    >
      <p className="py-5">{name}</p>

      {currentResult === 'red' && (
        <p className="h-full py-5 bg-red-700 text-red-700 w-10 rounded-r-lg">/</p>
      )}
      {currentResult === 'orange' && (
        <p className="h-full py-5 bg-orange-600 text-orange-600 w-10 rounded-r-lg">/</p>
      )}
      {currentResult === 'yellow' && (
        <p className="h-full py-5 bg-yellow-400 text-yellow-400 w-10 rounded-r-lg">/</p>
      )}
      {currentResult === 'green' && (
        <p className="h-full py-5 bg-green-700 text-green-700 w-10 rounded-r-lg">/</p>
      )}
      {currentResult === 'blue' && (
        <p className="h-full py-5 bg-blue-700 text-blue-700 w-10 rounded-r-lg">/</p>
      )}
    </Link>
  );
};
