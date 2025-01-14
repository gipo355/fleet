import { InsufficientInputs } from "./insufficientInputs";

describe("Insufficient inputs error", () => {
  it("Should hold details and return formatted error message", () => {
    const unreached = {
      nanoErgs: 10n,
      "007fd64d1ee54d78dd269c8930a38286caa28d3f29d27cadcb796418ab15c283": 100n
    };
    const error = new InsufficientInputs(unreached);

    expect(error.unreached).toBe(unreached);
    expect(
      error.message.includes("nanoErgs") &&
        error.message.includes("007fd64d1ee54d78dd269c8930a38286caa28d3f29d27cadcb796418ab15c283")
    ).toBeTruthy();
  });
});
