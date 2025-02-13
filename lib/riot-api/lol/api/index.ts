import Summonerv4 from "./summoner-v4";

import platformEnum from "@enums/routing/platform.enum";

export default class Api {
  private readonly apiKey: string;
  private readonly region: platformEnum;

  /**
   * All default apis found at: https://developer.riotgames.com/apis#summoner-v4
   *
   * @param {string} apiKey
   * @param {platformEnum} region
   */
  constructor(apiKey: string, region: platformEnum) {
    this.apiKey = apiKey;
    this.region = region;
  }

  /**
   * Ability to fetch users based on encryptedAccountId/puuid/summonerId/summonerName
   */
  summonerV4(region?: platformEnum) {
    if (region) {
      return new Summonerv4(this.apiKey, region);
    }
    return new Summonerv4(this.apiKey);
  }
}
