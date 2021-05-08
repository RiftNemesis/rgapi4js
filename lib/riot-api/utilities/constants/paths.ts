/**
 * API paths for Riot Games' apis
 */
const PATHS = {
  riotApi: {
    lol: {
      api: {
        summonerV4: {
          bySummonerName: (name: string): string =>
            `/lol/summoner/v4/summoners/by-name/${encodeURI(name)}`,

          byEncryptedAccountId: (encryptedAccountId: string): string =>
            `/lol/summoner/v4/summoners/by-account/${encryptedAccountId}`,
          byUuid: (uuid: string): string =>
              `/lol/summoner/v4/summoners/by-puuid/${uuid}`,
          byEncryptedSummonerId: (encryptedSummonerId: string): string =>
          `/lol/summoner/v4/summoners/${encryptedSummonerId}`
        },
      },
    },
  },
};

export default PATHS;
