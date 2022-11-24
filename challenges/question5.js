const getSummary = (transactions, threshold) =>
  // spread operator to create a new array that doesn´t mutate the original
  [
    ...transactions
      // reduce list of transactions into a Map, using category as key &  amount as values
      .reduce(
        (acc, { category, amount }) =>
          acc.set(category, (acc.get(category) ?? 0) + amount),
        new Map()
      )
      // so it does it for each entrie or transaction
      .entries(),
  ]
    // map them into objects with category & total as key-value pair
    .map(([category, total]) => ({ category, total }))
    // filter the results as requested
    .filter(({ total }) => threshold == null || total >= threshold)
    // sort them by total value in descending order, then category
    .sort(
      ({ total: at, category: ac }, { total: bt, category: bc }) =>
        bt - at || ac.localeCompare(bc)
    )
    // if threshold is missing, output must be limited to 3 summary objects
    .slice(0, threshold == null ? 3 : undefined);

///****** Add to comments - notes *****************

// 1. Reduce list of transactions into a Map by using the "category" as a key &  "amount" as value.
// 2. Once we have a Map, we can grab the entries, map them into objects with a "category" & "total" key-value pair.
// 3. Filter the objects by their "total" as it compares to the " threshold". If no threshold, show all transactions. If threshold --> show only those transactions which ar above or equal to the threshold.
// 4. Sort them by total (descending), as instructed.
// 5. Slice the result to return top three spending categories if threshold is missing or return undefined.
