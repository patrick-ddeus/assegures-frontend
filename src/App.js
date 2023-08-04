import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import RegisterProperty from "./pages/Dashboard/RegisterProperty";
import { UserProvider } from "./contexts/UserContext";
import useToken from "./hooks/useToken";
import GeralInformation from "./pages/Dashboard/GeralInformation";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:finalidade/imoveis" element={<PropertiesPage />} />
          <Route path="/admin/painel-de-controle" element={<Dashboard />}>
            <Route path="" element={<GeralInformation />} />
            <Route path="cadastro-de-imovel" element={<RegisterProperty />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

function ProtectedRouter({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default App;
