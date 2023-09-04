import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./routes/Main";
import Orders from "./routes/Orders";
import Modify from "./routes/Modify";
import Filters from "./Filters";

function App() {
  // const location = useLocation();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/modify/:id" element={<Modify />} />
        </Routes>

        <Filters/>
      </BrowserRouter>

      {/* {location.pathname === "/" && <Filters />} */}
    </>
  );
}

export default App;
