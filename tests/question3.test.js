/**
    Use these tests to validate your solution while you work on it.
    Feel free to make any changes, including adding new test cases.

    NOTE that these tests will not be used upon submission, we will
    run a series of different tests to validate your solution then.
 */

import { mergeArrays } from "../src/challenge";

describe("mergeArrays", () => {
  it("should merge two arrays", () => {
    const arrayOne = [{ Id: "a1" }, { Id: "a2", Name: "Record 2", Cost: 4 }];
    const arrayTwo = [{ Id: "a2", Cost: 6 }, { Id: "a3" }];

    const expected = [
      { Id: "a1" },
      { Id: "a2", Name: "Record 2", Cost: 6 },
      { Id: "a3" },
    ];
    const received = mergeArrays(arrayOne, arrayTwo);

    expect(received.length).toEqual(expected.length);
    expect(received).toEqual(expect.arrayContaining(expected));
  });
});
