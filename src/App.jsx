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
import Profile from "./pages/settings/sections/Profile";
import Security from "./pages/settings/sections/Security";
import Notifications from "./pages/settings/sections/Notifications";
import Posts from "./pages/communities/sections/Posts";
import Principal from "./pages/communities/sections/Principal";
import Courses from "./pages/communities/sections/Courses";
import Projects from "./pages/communities/sections/Projects";
import Podcasts from "./pages/communities/sections/Podcasts";

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
          <Route path="virtual aprende" element={<Communitie />}>
            <Route path="principal" element={<Principal />}/>
            <Route path="publicaciones" element={<Posts />}/>
            <Route path="cursos" element={<Courses />}/>
            <Route path="proyectos" element={<Projects />}/>
            <Route path="podcasts" element={<Podcasts />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App;