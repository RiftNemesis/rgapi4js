import rateLimiter from "@riot-api/utilities/ratelimiter";

import PlatformEnum from "@enums/routing/platform.enum";

import byEncryptedAccountInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-account-id.interface";

import Paths from "@riot-api/utilities/constants/paths";

/**
 * Fetch account information by encrypted account id
 *
 * @param {string} encryptedAccountId
 * @param {PlatformEnum} platform
 * @param {string} token
 */
const byEncryptedAccountId: (
  encryptedAccountId: string,
  region: PlatformEnum,
  token: string
) => Promise<byEncryptedAccountInterface> = (
  encryptedAccountId: string,
  platform: PlatformEnum,
  token: string
) =>
  rateLimiter(
    platform,
    `${Paths.riotApi.lol.api.summonerV4.byEncryptedAccountId(encryptedAccountId)}`,
    token
  );

export default byEncryptedAccountId;
