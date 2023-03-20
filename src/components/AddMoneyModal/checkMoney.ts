export const checkMoney = (money: string) => {
  const moneyArray = [
    { start: 100, end: 300, percentage: 5 },
    { start: 301, end: 1000, percentage: 6.5 },
  ];
  let currentPeriod: any = {};

  moneyArray.forEach((current) => {
    if (Number(money) >= 1001) {
      currentPeriod = { start: 1001, end: null, percentage: 8 };
    } else {
      if (Number(money) >= current.start && Number(money) <= current.end) {
        currentPeriod = current;
      }
    }
  });
  return {
    dailyIncome: Object.values(currentPeriod).length ? currentPeriod.percentage : 0,
    dailyRate:
      Number(money) > 0 && Object.values(currentPeriod).length
        ? (Number(money) / 100) * currentPeriod.percentage
        : 0,
    remainderPrice:
      Number(money) > 0 && Object.values(currentPeriod).length
        ? currentPeriod.end + 1 - Number(money)
        : 0,
    needDailyRate: Object.values(currentPeriod).length
      ? currentPeriod.percentage + 1.5 >= 8
        ? 8
        : currentPeriod.percentage + 1.5
      : 5,
  };
};
