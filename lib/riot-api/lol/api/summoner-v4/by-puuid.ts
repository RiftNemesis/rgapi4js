import rateLimiter from "@riot-api/utilities/ratelimiter";

import PlatformEnum from "@enums/routing/platform.enum";

import byUuidInterface from "@interfaces/riot-api/lol/api/summoner-v4/by-uuid.interface";

import Paths from "@riot-api/utilities/constants/paths";

/**
 * Fetch account information by uuid
 *
 * @param {string} uuid
 * @param {PlatformEnum} platform
 * @param {string} token
 */
const byUuid: (
    uuid: string,
    region: PlatformEnum,
    token: string
) => Promise<byUuidInterface> = (
    uuid: string,
    platform: PlatformEnum,
    token: string
) =>
    rateLimiter(
        platform,
        `${Paths.riotApi.lol.api.summonerV4.byUuid(uuid)}`,
        token
    );

export default byUuid;
