import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>

    <div>
      <h1>Manasa Rao</h1>
      <h2>Summer 2 2024(Section 1)</h2>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
      </Routes>
      <a id="wd-github" href="https://github.com/manasarao30/kanbas-react-web-app">GitHub</a>
    </div>
    </Provider>

  );
}
