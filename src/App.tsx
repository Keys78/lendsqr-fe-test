import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import { Login } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Login />
      {/* <Layout>
          <div>
          </div>
      </Layout> */}
    </main>
  );
}

export default App;
