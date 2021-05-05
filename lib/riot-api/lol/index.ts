import Api from "./api";

import platformEnum from "@enums/routing/platform.enum";

export default class LolApi {
  private readonly apiKey: string;
  private readonly platform: platformEnum;

  constructor(apiKey: string, platform: platformEnum) {
    this.apiKey = apiKey;
    this.platform = platform;
  }

  /**
   * The league of legends api to fetch match history (2 year retention)
   */
  api() {
    return new Api(this.apiKey, this.platform);
  }

  /**
   * The league client api (not to be used as a replacement for the lol api)
   */
  lcu() {}

  /**
   * The ingame api for league of legends
   */
  ingame() {}

  /**
   * The replay api for league of legends
   */
  replay() {}
}
