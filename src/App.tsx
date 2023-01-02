import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Dashboard, Users, UserDetails } from "./pages";
import Layout from "./components/Layout";
import { useEffect, useState } from 'react'
import LoadingScreen from 'components/LoadingSreen/LoadingScreen';

function App() {
  const [isPageLoader, setIspageLoader] = useState(true)

  const pageLoader = () => {
    setTimeout(() => {
      setIspageLoader(!isPageLoader)
    }, 2000)
  }
  useEffect(() => {
    pageLoader();
  }, [])
  return (
    <>
      {isPageLoader ? <LoadingScreen /> :
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Layout children={<Dashboard />} />} />
            <Route path="/users" element={<Layout children={<Users />} />} />
            <Route path="/users/:id" element={<Layout children={<UserDetails />} />} />
          </Routes>
        </Router>
      }
    </>
  );
};

export default App;