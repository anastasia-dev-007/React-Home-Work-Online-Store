import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Orders from "./routes/Orders";
import Modify from "./routes/Modify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/orders" element={<Orders />} />
        <Route path = "/modify/:id" element = {<Modify/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
