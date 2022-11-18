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
