export type TInvest = 'minor' | 'major' | 'grand';

export const CHECK_INVEST: TInvest[] = ['minor', 'major', 'grand'];

export const INVEST_DATA: Record<TInvest, Record<string, string>> = {
  minor: {
    title: 'Minor',
    text: 'MINOR investment will give you opportunity to use crypto trader bot at a minimum power.',
    value: '100$ to 300$ inclusive',
    guarantie: 'You are guaranteed to receive 5% of your',
    invest: '150',
    get: '7.5',
    friends: '22.5',
  },
  major: {
    title: 'Major',
    text: 'MAJOR investment will give you opportunity to use crypto trader bot at a medium power.',
    value: '301$ to 1000$ inclusive',
    guarantie: 'You are guaranteed to receive 6.5% of your',
    invest: '500',
    get: '32.5',
    friends: '82.5',
  },
  grand: {
    title: 'Grand',
    text: 'GRAND investment will give you opportunity to use crypto trader bot at a maximum power.',
    value: '1001$ to 5000$ inclusive',
    guarantie: 'You are guaranteed to receive 8% of your',
    invest: '3000',
    get: '240',
    friends: '540',
  },
};
