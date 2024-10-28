import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sub from "./pages/Sub";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub/:id" element={<Sub />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
