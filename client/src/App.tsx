import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { PatientDetails } from './components/patient-details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:patientId" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
