import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Puzzle from "./puzzle/App";
import Moon from "./moon/App"
import Home from "./App";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="puzzle" element={<Puzzle />} />
          <Route path="moon" element={<Moon />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);