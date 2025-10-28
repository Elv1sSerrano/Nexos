import { logoEtitc, logoVirtualAprende } from "../../../assets/images";
import { homePath, profilePath, savedPath, settingsPath, trendPath } from "../../../constants/iconPaths";

export const sideBarItems = [
  {icon: homePath, label: "Inicio", direction: "inicio"},
  {icon: trendPath, label: "Explorar", direction: "explorar"},  
  {icon: profilePath, label: "Perfil", direction: "perfil"},  
  {icon: savedPath, label: "Guardados", direction: "guardados"},  
  {icon: settingsPath, label: "Ajustes", direction: "ajustes/preferencias"},  
]

export const sideBarCommunities = [
  {image: logoEtitc, label: "ETITC", direction: "etitc/principal"},
  {image: logoVirtualAprende, label: "Virtual Aprende", direction: "virtual aprende/principal"}
]