import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./components/layout/NavBar";
import SideBar from './components/layout/SideBar'
import Feed from "./pages/feed/Feed";
import Settings from "./pages/settings/Settings";
import Explore from "./pages/explore/Explore";
import Saved from "./pages/saved/Saved";
import Communitie from "./pages/communities/Communitie";
import Preferences from "./pages/settings/sections/Preferences";
import ProfileSettings from "./pages/settings/sections/ProfileSetings";
import Profile from "./pages/profile/Profile";
import Security from "./pages/settings/sections/Security";
import Notifications from "./pages/settings/sections/Notifications";
import Posts from "./pages/communities/sections/Posts";
import Principal from "./pages/communities/sections/Principal";
import Courses from "./pages/communities/sections/Courses";
import Projects from "./pages/communities/sections/Projects";
import Videos from "./pages/communities/sections/Videos";
import Event from "./pages/event/Event";

function AppLayout () {
  return (
    <div className="font-inter bg-[#ececf0]">
      <NavBar />
      <div className="flex pt-24">
        <SideBar />
        <main className="ml-72 p-8 w-full">
          <Outlet />
        </main>
      </div>
    </div>
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
          <Route path="explorar/:eventoId" element={<Event />}/>            
          <Route path="perfil/:userId" element={<Profile />}/>
          <Route path="guardados" element={<Saved />}/>
          <Route path="ajustes" element={<Settings />}>
            <Route path="preferencias" element={<Preferences />}/>
            <Route path="perfil" element={<ProfileSettings />}/>
            <Route path="notificaciones" element={<Notifications />}/>
            <Route path="seguridad" element={<Security />}/>
          </Route>
          <Route path="semillero/:semilleroId" element={<Communitie />}>
            <Route path="principal" element={<Principal />}/>
            <Route path="publicaciones" element={<Posts />}/>
            <Route path="cursos" element={<Courses />}/>
            <Route path="proyectos" element={<Projects />}/>
            <Route path="videos" element={<Videos />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;