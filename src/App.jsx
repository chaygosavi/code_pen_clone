import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./container";

function App() {
  // return <h1 className="text-3xl font-bold underline">JAI SHREE RAM</h1>;
  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path="/home/*" index element={<Home />} />
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
