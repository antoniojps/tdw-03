import { expect, test } from "vitest";
import { add } from "./helpers";

test("add 1+1 = 2", () => {
  const result = add(1, 1);
  expect(result).toBe(2);
});
