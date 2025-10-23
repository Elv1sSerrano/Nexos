import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./pages/layout/components/NavBar";
import SideBar from './pages/layout/components/SideBar'
import Feed from "./pages/feed/Feed";
import Settings from "./pages/settings/Settings";

function AppLayout () {
  return (
    <>
      <NavBar />
      <div className="flex pt-24">
        <SideBar />
        <main className="ml-72 p-8 w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
}

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/app' element={<AppLayout />}>
          <Route path="inicio" element={<Feed />}/>
          <Route path="ajustes" element={<Settings />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;