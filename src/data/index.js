import expo2025 from "./events/Expo2025";
import virtualAprende from "./semilleros/virtualAprende";
import elvisserrano from "./users/elvisSerrano";
import etitc from "./institutions/etitc";
import kVant from "./semilleros/kVant";
import sapientiam from "./semilleros/sapientiam";
import solidWorks from "./semilleros/solidWorks";

export const semilleros = {
  virtualAprende,
  kVant,
  sapientiam,
  solidWorks
}

export const institutions = {
  etitc
}

export const events = {
  expo2025
}

export const users = {
  elvisserrano
}

export const accountData = {
  followingAccounts: [
    etitc,
    virtualAprende
  ],
  channels: [
    {etitc}
  ],
  personalData: [
    {elvisserrano}
  ]
}