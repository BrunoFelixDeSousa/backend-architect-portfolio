import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from './page/Home';
import { NotFound } from './page/NotFound';
import { LanguageProvider } from './i18n/LanguageProvider';
import { DevModeOverlay } from "./components/DevModeOverlay";

export function App() {

  return (
    <LanguageProvider>
      <DevModeOverlay />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
