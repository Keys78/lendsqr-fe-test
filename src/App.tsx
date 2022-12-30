import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import { Login, Dashboard, Users } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Login />
      {/* <Layout>
        <Users />
      </Layout> */}
    </main>
  );
}

export default App;
