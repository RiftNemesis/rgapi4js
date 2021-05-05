import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import { it } from "mocha";
import logger from "mocha-logger";

import { createCheckers } from "ts-interface-checker";

import rateLimiter from "@riot-api/utilities/ratelimiter";
import paths from "@riot-api/utilities/constants/paths";

import Platform from "@enums/routing/platform.enum";

import bySummonerNameInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-account-id.interface";

describe("Summoner-v4", () => {
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
      ``;
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

      const mock: bySummonerNameInterface = {
        accoundId: "",
        id: "",
        name: "",
        profileIconId: 0,
        puuid: "",
        revisionDate: 0,
        summonerLevel: 0,
      };

      expect(res)
        .to.have.property("accountId")
        .which.is.a(typeof mock.accoundId);

      expect(res)
        .to.have.property("id")
        .which.is.a(typeof mock.id);

      expect(res)
        .to.have.property("name")
        .which.is.a(typeof mock.name);

      expect(res)
        .to.have.property("profileIconId")
        .which.is.a(typeof mock.profileIconId);

      expect(res)
        .to.have.property("puuid")
        .which.is.a(typeof mock.puuid);

      expect(res)
        .to.have.property("revisionDate")
        .which.is.a(typeof mock.revisionDate);

      expect(res)
        .to.have.property("summonerLevel")
        .which.is.a(typeof mock.summonerLevel);
    } catch (e) {
      logger.error(e.message);
      throw new Error(JSON.stringify(e));
    }
  });
});
