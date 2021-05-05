import { expect } from "chai";

import Api, { Platform } from "~/index";

describe("Base API", () => {
  it("Throws an error if the api key does not start with RGAPI", () => {
    try {
      new Api("totally_legit_api_key");
    } catch (e) {
      expect(e.message).to.not.be.null;
    }
  });

  it('Throws the correct error message ("Invalid API key.")', () => {
    try {
      new Api("totally_legit_api_key");
    } catch (e) {
      expect(e.message).to.equal("Invalid API key.");
    }
  });
});
