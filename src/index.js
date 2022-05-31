import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Puzzle from "./puzzle/App";
import Moon from "./puzzle/moon/App"
import Mars from './puzzle/mars/App'
import NotFound from "./404/App"
import Home from "./App";
import T from './nblsoesagsb3sk6mx/App'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="puzzle" element={<Puzzle />} />
          <Route path="/puzzle/moon" element={<Moon />} />
          <Route path="/puzzle/mars" element={<Mars />} />
          <Route path="nblsoesagsb3sk6mx" element={<T/>}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);