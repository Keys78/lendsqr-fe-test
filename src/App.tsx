import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard, Users, UserDetails } from "./pages";
import { ToastContainer } from 'react-toastify';
import Layout from "./components/Layout";

function App() {

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout children={<Dashboard />} />} />
          <Route path="/users" element={<Layout children={<Users />} />} />
          <Route path="/users/:id" element={<Layout children={<UserDetails />} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;