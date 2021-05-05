import bySummonerNameInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-summoner-name.interface";
import byEncryptedAccountIdInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-account-id.interface";

import byEncryptedAccountId from "@riot-api/lol/api/summoner-v4/by-encrypted-account-id";
import bySummonerName from "./by-summoner-name";

import platformEnum from "@enums/routing/platform.enum";

export default class SummonerV4 {
  private readonly apiKey: string;
  private readonly region: platformEnum | undefined;

  constructor(apiKey: string, region?: platformEnum) {
    this.apiKey = apiKey;

    region ? (this.region = region) : (this.region = undefined);
  }

  async byEncryptedAccountId(
    encryptedAccountId: string,
    region?: platformEnum
  ): Promise<byEncryptedAccountIdInterface> {
    if (region) {
      return byEncryptedAccountId(encryptedAccountId, region, this.apiKey);
    } else if (this.region) {
      return byEncryptedAccountId(encryptedAccountId, this.region, this.apiKey);
    } else {
      throw Error("No region was given");
    }
  }

  byPuuid(summonerId: string, region?: platformEnum) {
    if (region) {
      return bySummonerName(summonerId, region, this.apiKey);
    } else if (this.region) {
      return bySummonerName(summonerId, this.region, this.apiKey);
    } else {
      throw Error("No region was given");
    }
  }

  bySummonerId(summonerId: string, region?: platformEnum) {
    if (region) {
      return bySummonerName(summonerId, region, this.apiKey);
    } else if (this.region) {
      return bySummonerName(summonerId, this.region, this.apiKey);
    } else {
      throw Error("No region was given");
    }
  }

  async bySummonerName(
    summonerName: string,
    region?: platformEnum
  ): Promise<bySummonerNameInterface> {
    if (region) {
      return bySummonerName(summonerName, region, this.apiKey);
    } else if (this.region) {
      return bySummonerName(summonerName, this.region, this.apiKey);
    } else {
      throw Error("No region was given");
    }
  }
}
