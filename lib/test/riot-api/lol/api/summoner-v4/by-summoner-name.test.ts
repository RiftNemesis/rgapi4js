import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { it } from "mocha";
import logger from "mocha-logger";

import rateLimiter from "@riot-api/utilities/ratelimiter";
import paths from "@riot-api/utilities/constants/paths";

import Platform from "@enums/routing/platform.enum";

import checkProperties from "./util/check-properties";

const bySummonerName = () => {
  it("Returns the correct properties for by-summoner-name", async () => {
    try {
      chai.use(chaiAsPromised);
      const apikey = () => {
        if (process.env.RIOT_API_KEY) return process.env.RIOT_API_KEY;

        throw new Error("No api key provided.");
      };
      const name = "Rąy";

      const endpoint = paths.riotApi.lol.api.summonerV4.bySummonerName(name);

      const res = await rateLimiter(Platform.EUW, endpoint, apikey());

      expect(res).to.have.keys(
          "accountId",
          "profileIconId",
          "revisionDate",
          "name",
          "id",
          "puuid",
          "summonerLevel"
      );
    } catch (e) {
      logger.error(e.message);
      throw new Error(JSON.stringify(e));
    }
  });

  it("Make sure that the types are correct", async () => {
    try {
      chai.use(chaiAsPromised);
      const apikey = () => {
        if (process.env.RIOT_API_KEY) return process.env.RIOT_API_KEY;

        throw new Error("No api key provided.");
      };
      const name = "Rąy";

      const endpoint = paths.riotApi.lol.api.summonerV4.bySummonerName(name);

      const res = await rateLimiter(Platform.EUW, endpoint, apikey());

      checkProperties(res)
    } catch (e) {
      logger.error(e.message);
      throw new Error(JSON.stringify(e));
    }
  });
}

export default bySummonerName
