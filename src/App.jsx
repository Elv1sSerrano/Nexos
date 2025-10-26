import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./pages/layout/components/NavBar";
import SideBar from './pages/layout/components/SideBar'
import Feed from "./pages/feed/Feed";
import Settings from "./pages/settings/Settings";
import Explore from "./pages/explore/Explore";
import Saved from "./pages/saved/Saved";
import Communitie from "./pages/communities/Communitie";
import Preferences from "./pages/settings/sections/Preferences";
import Profile from "./pages/settings/sections/Profile";
import Security from "./pages/settings/sections/Security";
import Notifications from "./pages/settings/sections/Notifications";

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
          <Route path="explorar" element={<Explore />}/>
          <Route path="perfil" element={<Profile />}/>
          <Route path="guardados" element={<Saved />}/>
          <Route path="ajustes" element={<Settings />}>
            <Route path="preferencias" element={<Preferences />}/>
            <Route path="perfil" element={<Profile />}/>
            <Route path="notificaciones" element={<Notifications />}/>
            <Route path="seguridad" element={<Security />}/>
          </Route>
          <Route path="virtual aprende" element={<Communitie />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;