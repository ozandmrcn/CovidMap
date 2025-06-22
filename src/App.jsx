import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:country" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
