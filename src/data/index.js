import expo2025 from "./events/Expo2025";
import virtualAprende from "./semilleros/virtualAprende";
import elvisserrano from "./users/elvisSerrano";
import etitc from "./institutions/etitc";
import kVant from "./semilleros/kVant";

export const semilleros = {
  virtualAprende,
  kVant
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