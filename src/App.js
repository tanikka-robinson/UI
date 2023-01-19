import "./App.css";
import { Splash } from "./pages/splash";
import { Routes, Route } from "react-router-dom";
import { LoginField } from "./pages/login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />}></Route>
        <Route path="/login" element={<LoginField />}></Route>
      </Routes>
    </div>
  );
}

export default App;
