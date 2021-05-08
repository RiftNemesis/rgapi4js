import bySummonerNameInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-summoner-name.interface";
import byEncryptedAccountIdInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-account-id.interface";

import byEncryptedAccountId from "./by-encrypted-account-id";
import bySummonerName from "./by-summoner-name";
import byEncryptedSummonerId from './by-encrypted-summoner-id'
import byUuid from "./by-puuid";

import platformEnum from "@enums/routing/platform.enum";

export default class SummonerV4 {
  private readonly apiKey: string;
  private readonly region: platformEnum | undefined;

  /**
   * Starting point for all applications.
   *
   * @param {string} apiKey
   * @param {platformEnum} [region]
   */
  constructor(apiKey: string, region?: platformEnum) {
    this.apiKey = apiKey;

    region ? (this.region = region) : (this.region = undefined);
  }

  /**
   * Fetch basic summoner information by encrypted account id.
   *
   * @param encryptedAccountId
   * @param {platformEnum} [region]
   */
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

  /**
   * Fetch basic summoner information by uuid.
   *
   * @param uuid
   * @param {platformEnum} [region]
   */
  async byPuuid(uuid: string, region?: platformEnum) {
    if (region) {
      return byUuid(uuid, region, this.apiKey);
    } else if (this.region) {
      return byUuid(uuid, this.region, this.apiKey);
    } else {
      throw Error("No region was given");
    }
  }

  /**
   * Fetch basic summoner information by summonerId.
   *
   * @param summonerId
   * @param {platformEnum} [region]
   */
  async bySummonerId(summonerId: string, region?: platformEnum) {
    if (region) {
      return byEncryptedSummonerId(summonerId, region, this.apiKey);
    } else if (this.region) {
      return byEncryptedSummonerId(summonerId, this.region, this.apiKey);
    } else {
      throw Error("No region was given");
    }
  }

  /**
   * Fetch basic summoner information by summoner name (already url encoded).
   *
   * @param {string} summonerName
   * @param {platformEnum} [region]
   */
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
