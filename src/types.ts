/* eslint-disable no-unused-vars */
export enum ERoutes {
  Home = '/',
  Map = '/map',
  Dashboard = '/dashboard',
  Investitions = '/investitions/:id',
  Gross = '/gross',
  Settings = '/settings',
  Error404 = '/404',
}
export type TModalTypes =
  | 'add-money'
  | 'create-wallet'
  | 'how-to-buy-eth'
  | 'withdraw-money'
  | 'success'
  | 'error'
  | 'authError';
