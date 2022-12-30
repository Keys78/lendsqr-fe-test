import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import { Login, Dashboard, Users, UserDetails } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <main className="page__wrapper">
      {/* <Login /> */}
      <Layout>
        {/* <Users /> */}
        <UserDetails />
      </Layout>
    </main>
  );
}

export default App;
