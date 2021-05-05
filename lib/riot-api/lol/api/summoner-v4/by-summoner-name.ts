import rateLimiter from "@riot-api/utilities/ratelimiter";

import Platform from "@enums/routing/platform.enum";

import bySummonerNameInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-summoner-name.interface";

import Paths from "@riot-api/utilities/constants/paths";

/**
 * Search by summoner name (automatically url encoded).
 * @param summonerName {string} The in game name of the summoner
 * @param platform {Platform}  The platform to execute the request against.
 * @param token {string} The api token (found at https://developer.riotgames.com/)
 */
const bySummonerName: (
  summonerName: string,
  region: Platform,
  token: string
) => Promise<bySummonerNameInterface> = (
  summonerName: string,
  platform: Platform,
  token: string
) =>
  rateLimiter(
    platform,
    `${Paths.riotApi.lol.api.summonerV4.bySummonerName(summonerName)}}`,
    token
  );

export default bySummonerName;
