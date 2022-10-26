import AddMoneyModal from '../components/AddMoneyModal/AddMoneyModal';
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
};
