/**
    Use these tests to validate your solution while you work on it.
    Feel free to make any changes, including adding new test cases.

    NOTE that these tests will not be used upon submission, we will
    run a series of different tests to validate your solution then.
 */

import { maybeDisemvowel } from "../src/challenge";

describe("maybeDisemvowel", function () {
  it("should not change a string with a minority of vowels", function () {
    expect(maybeDisemvowel("hello")).toEqual("hello");
  });

  it("should strip vowels from a string with a majority of vowels", function () {
    expect(maybeDisemvowel("I heard audio")).toEqual("hrd d");
  });
});
