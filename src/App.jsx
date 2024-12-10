import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
