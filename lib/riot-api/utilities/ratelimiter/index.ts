import { RiotRateLimiter } from "@fightmegg/riot-rate-limiter";
import Platform from "@enums/routing/platform.enum";

import RateLimiterOptions from "@interfaces/riot-api/utilities/ratelimiteroptions.interface";

const limiter = new RiotRateLimiter();

/**
 * Rate limiter for Riot Games apis
 *
 * @param region {Pl                                                                          atform} Region to execute against
 * @param path {string} API endpoint
 * @param token {string} API token (found at https://developer.riotgames.com)
 * @param options {RateLimiterOptions} Optional additions such as adding additional headers
 *
 * @returns {Object}
 */
const ExecuteRequest = async (
  region: Platform,
  path: string,
  token: string,
  options?: RateLimiterOptions
) => {
  return limiter.execute({
    url: new URL(path, `https://${region}.api.riotgames.com`),
    options: {
      headers: {
        "X-Riot-Token": token.trim(),
        ...options?.headers,
      },
    },
  });
};

export default ExecuteRequest;
