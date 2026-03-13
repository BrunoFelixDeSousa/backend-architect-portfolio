import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { Index } from './page/Home';
import { NotFound } from './page/NotFound';


export function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}
