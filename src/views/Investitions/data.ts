export type TInvest = 'minor' | 'major' | 'grand';

export const CHECK_INVEST: TInvest[] = ['minor', 'major', 'grand'];

export const INVEST_DATA: Record<TInvest, Record<string, string>> = {
  minor: {
    title: 'Minor',
  },
  major: {
    title: 'Major',
  },
  grand: {
    title: 'Grand',
  },
};
