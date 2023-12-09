import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../../runo-app2/src/assets/components/Layouts/Layout.jsx"
import Content from "./assets/components/Content/Content.jsx";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Content />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
