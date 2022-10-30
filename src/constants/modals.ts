import AddMoneyModal from '../components/AddMoneyModal/AddMoneyModal';
import CreateWalletModal from '../components/CreateWalletModal/CreateWalletModal';
import ErrorModal from '../components/ErrorModal/ErrorModal';
import HowToBuyEthModal from '../components/HowToBuyEthModal/HowToBuyEthModal';
import SuccessModal from '../components/SuccessModal/SuccessModal';
import WithdrawModal from '../components/WithdrawModal/WithdrawModal';
import { TModalTypes } from '../types';

export const MODALS: Record<
  TModalTypes,
  {
    component: any;
  }
> = {
  'add-money': {
    component: AddMoneyModal,
  },
  'create-wallet': {
    component: CreateWalletModal,
  },
  'how-to-buy-eth': {
    component: HowToBuyEthModal,
  },
  'withdraw-money': {
    component: WithdrawModal,
  },
  success: {
    component: SuccessModal,
  },
  error: {
    component: ErrorModal,
  },
};
