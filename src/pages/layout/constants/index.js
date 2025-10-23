import { logoEtitc, logoVirtualAprende } from "../../../assets/images";
import { homePath, profilePath, savedPath, settingsPath, trendPath } from "../../../constants/iconPaths";

export const sideBarItems = [
  {icon: homePath, label: "Inicio"},
  {icon: trendPath, label: "Popular"},  
  {icon: profilePath, label: "Perfil"},  
  {icon: savedPath, label: "Guardados"},  
  {icon: settingsPath, label: "Ajustes"},  
]

export const sideBarCommunities = [
  {image: logoEtitc, label: "ETITC"},
  {image: logoVirtualAprende, label: "Virtual Aprende"}
]