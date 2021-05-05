import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import logger from "mocha-logger";

import rateLimiter from "@riot-api/utilities/ratelimiter";

import paths from "@riot-api/utilities/constants/paths";

import Platform from "@enums/routing/platform.enum";

import bySummonerNameInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-account-id.interface";

describe("Riot Games API rate limiter", () => {
  it("Successfully make a request", () => {
    try {
      chai.use(chaiAsPromised);
      const apikey = () => {
        if (process.env.RIOT_API_KEY) return process.env.RIOT_API_KEY;

        throw new Error("No api key provided.");
      };
      const name = "Rąy";

      const endpoint = paths.riotApi.lol.api.summonerV4.bySummonerName(name);

      expect(rateLimiter(Platform.EUW, endpoint, apikey())).to.eventually.not.be
        .null;
    } catch (e) {
      logger.error(e.message);
      throw new Error(e);
    }
  });
});
