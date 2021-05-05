const PATHS = {
  riotApi: {
    lol: {
      api: {
        summonerV4: {
          bySummonerName: (name: string): string =>
            `/lol/summoner/v4/summoners/by-name/${encodeURI(name)}`,
          byEncryptedAccountId: (encryptedAccountId: string): string =>
            `/lol/summoner/v4/summoners/by-account/${encryptedAccountId}`,
        },
      },
    },
  },
};

export default PATHS;
