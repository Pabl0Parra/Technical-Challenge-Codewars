const getSummary = (transactions, threshold) =>
  [
    ...transactions
      .reduce(
        (acc, { category, amount }) =>
          acc.set(category, (acc.get(category) ?? 0) + amount),
        new Map()
      )
      .entries(),
  ]
    .map(([category, total]) => ({ category, total }))
    .filter(({ total }) => threshold == null || total >= threshold)
    .sort(
      ({ total: at, category: ac }, { total: bt, category: bc }) =>
        bt - at || ac.localeCompare(bc)
    ) // Sort by total, then category
    .slice(0, threshold == null ? 3 : undefined); // Slice to 3

const { expect } = chai;
mocha.setup("bdd");
chai.should();

describe("getSummary", () => {
  const transactions = [
    { category: "food", amount: 30 },
    { category: "fuel", amount: 40 },
    { category: "transport", amount: 10 },
    { category: "holidays", amount: 50 },
    { category: "entertainment", amount: 20 },
  ];

  it("returns top spending categories on or above the threshold", () => {
    expect(getSummary(transactions, 30)).to.eql([
      { category: "holidays", total: 50 },
      { category: "fuel", total: 40 },
      { category: "food", total: 30 },
    ]);
  });

  it("returns top three spending categories if threshold is missing", () => {
    expect(getSummary(transactions)).to.eql([
      { category: "holidays", total: 50 },
      { category: "fuel", total: 40 },
      { category: "food", total: 30 },
    ]);
  });
});

mocha.run();
