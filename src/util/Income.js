export const calculateIncomeSum = (incomes) => {
  return incomes.reduce((acc, item) => acc + parseInt(item.value), 0);
};

export const calculateAverageIncome = (totalIncome, numOfIncomes) =>
  totalIncome / numOfIncomes;

export const calculateLastMonthIncome = (incomes) => {
  const lastIncomeDate = new Date(
    Math.max.apply(
      null,
      incomes.map((item) => {
        return new Date(item.date);
      })
    )
  );

  const lastMonthIncomes = incomes.filter((item) => {
    const itemDate = new Date(item.date);
    if (
      itemDate.getFullYear() === lastIncomeDate.getFullYear() &&
      itemDate.getMonth() === lastIncomeDate.getMonth()
    ) {
      return true;
    }
    return false;
  });
  return calculateIncomeSum(lastMonthIncomes);
};

export const processCompaniesIncomeData = (incomes) => {
  const totalIncome = calculateIncomeSum(incomes);
  const averageIncome = calculateAverageIncome(totalIncome, incomes.length);
  const lastMonthIncome = calculateLastMonthIncome(incomes);

  return { totalIncome, averageIncome, lastMonthIncome };
};
