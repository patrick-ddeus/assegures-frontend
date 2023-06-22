import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import RegisterProperty from "./pages/RegisterProperty";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:tipo/imoveis' element={<PropertiesPage />} />
        <Route path='/admin/painel-de-controle' element={<Dashboard />} />
        <Route path='/admin/painel-de-controle/cadastro-de-imovel' element={<RegisterProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
