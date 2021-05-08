import rateLimiter from "@riot-api/utilities/ratelimiter";

import PlatformEnum from "@enums/routing/platform.enum";

import byEncryptedSummonerIdInterface
  from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-summoner-id.interface";

import Paths from "@riot-api/utilities/constants/paths";

/**
 * Fetch account information by encrypted summoner id
 *
 * @param {string} encryptedSummonerId
 * @param {PlatformEnum} platform
 * @param {string} token
 */
const byEncryptedAccountId: (
    encryptedSummonerId: string,
    region: PlatformEnum,
    token: string
) => Promise<byEncryptedSummonerIdInterface> = (
    encryptedSummonerId: string,
    platform: PlatformEnum,
    token: string
) =>
    rateLimiter(
        platform,
        `${Paths.riotApi.lol.api.summonerV4.byEncryptedSummonerId(encryptedSummonerId)}`,
        token
    );

export default byEncryptedAccountId;
