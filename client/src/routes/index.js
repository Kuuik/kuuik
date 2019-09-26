import Client from '../components/client'
import Investor from '../components/investor'
import Landing from '../components/landing'

const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

const investorRoutes = {
  path: "/investor",
  name: "Investor",
  children:[
    {
      path: "/investor/land",
      name: "Investor Landing",
      component: Investor
    }
  ]
}
const clientRoutes = {
  path: "/client",
  name: "client",
  children: [
    {
      path: "/client/land",
      name: "Default",
      component: Client
    }
  ]
};

export const landing = [landingRoutes];
export const client = [clientRoutes]
export const investor = [investorRoutes]

export default [
  landingRoutes,
  clientRoutes,
  investorRoutes
]
