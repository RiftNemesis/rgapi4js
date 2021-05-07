//import redis from "redis";

import Lol from "@riot-api/lol";
import rateLimiter from "@riot-api/utilities/ratelimiter";

import RedisInterface from "@interfaces/redis";

import platformEnum from "@enums/routing/platform.enum";

export default class RiotApi {
  private logger: any | undefined;
  private redis: RedisInterface | undefined;
  private readonly token: string;
  private rateLimiter: (
    region: platformEnum,
    path: string,
    token: string
  ) => Promise<void>;

  /**
   * An api wrapper for api's made by Riot Games
   * @param apiToken The token given to you to access the api's
   * @param logger must include info,warn and error functions
   * @param redisConnectionSettings pass
   * @param options
   */
  constructor(
    apiToken: string,
    logger?: any | null,
    redisConnectionSettings?: RedisInterface,
    options?: any
  ) {
    if (typeof window !== "undefined") {
      if (typeof process !== "object") {
        throw new Error(
          "Client-side calls are blocked as there is no way to make them without exposing your API key to users."
        );
      }
    }

    // API keys always start with RGAPI.
    if (!apiToken.startsWith("RGAPI")) {
      if (!apiToken.startsWith("rgapi")) {
        throw new Error("Invalid API key.");
      }
    }

    this.token = apiToken;
    this.rateLimiter = rateLimiter;

    // Optional logger requires log, warn, info and error functions
    if (logger) {
      this.logger = logger;
    }

    // Optional redis connection for spreading load across multiple servers
    if (redisConnectionSettings) {
      this.redis = redisConnectionSettings;
    }
  }

  /**
   * Fetch assets from either DataDragon or CommunityDragon
   * (CommunityDragon is preferred as it is more accurate)
   */
  fetchAssets() {}

  /**
   * Fetch data for League of Legends.
   * @param platform
   */
  lol(platform: platformEnum) {
    return new Lol(this.token, platform);
  }

  /**
   * Fetch data for Legends of Runeterra
   */
  lor() {}

  /**
   * Riot Sign-On
   * Api key must have explicit access to RSO otherwise will not work
   */
  rso() {}

  /**
   * Fetch data for Team Fight Tactics
   */
  tft() {}

  /**
   * Fetch data for Valorant
   */
  val() {}
}

export { platformEnum as Platform };
