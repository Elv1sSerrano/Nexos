import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Feed from "./pages/feed/Feed";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;