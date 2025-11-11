import { logoEtitc, logoVirtualAprende } from "../../../assets/images";
import { homePath, profilePath, savedPath, settingsPath, trendPath } from "../../../constants/iconPaths";

export const sideBarItems = [
  {icon: homePath, label: "Inicio", direction: "inicio"},
  {icon: trendPath, label: "Explorar", direction: "explorar"},  
  {icon: profilePath, label: "Perfil", direction: "perfil/elvisserrano"},  
  {icon: savedPath, label: "Guardados", direction: "guardados"},  
  {icon: settingsPath, label: "Ajustes", direction: "ajustes"},  
]

export const sideBarCommunities = [
  {image: logoEtitc, label: "ETITC", direction: "institucion/etitc"},
  {image: logoVirtualAprende, label: "Virtual Aprende", direction: `semillero/virtualAprende/principal`},  
]

export const sidebarChannels = [
  {image: logoEtitc, label: "ETITC", direction: "institucion/etitc/canal"},          
]