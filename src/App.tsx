import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './page/Home';
import { NotFound } from './page/NotFound';
import { LanguageProvider } from './i18n/LanguageProvider';

export function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
