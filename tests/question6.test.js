/**
    Use these tests to validate your solution while you work on it.
    Feel free to make any changes, including adding new test cases.

    NOTE that these tests will not be used upon submission, we will
    run a series of different tests to validate your solution then.
 */

jest.mock("../src/helper");

import { saveOne } from "../src/helper";
import { saveAll } from "../src/challenge";

describe("saveAll", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns an empty list if all records were saved", async () => {
    const data = [
      { id: "ds", name: "Death Star" },
      { id: "xw", name: "X-Wing" },
    ];

    saveOne.mockResolvedValueOnce("ds");
    saveOne.mockResolvedValueOnce("xw");

    const expected = []; // all saved
    const received = await saveAll(data);

    expect(received).toEqual(expected);
  });

  it("returns a list of ids of records that failed to save", async () => {
    const data = [
      { id: "a", name: "Apple" },
      { id: "b", name: "Banana" },
      { id: "c", name: "Cranberry" },
    ];

    saveOne.mockResolvedValueOnce("a"); // accept (save) the first one
    saveOne.mockRejectedValue("Fail!"); // reject (fail) the rest

    const expected = ["b", "c"]; // two failed
    const received = await saveAll(data);

    expect(received).toEqual(expected);
  });
});
