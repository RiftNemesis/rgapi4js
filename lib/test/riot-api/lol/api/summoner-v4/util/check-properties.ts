import bySummonerNameInterface
  from "@interfaces/riot-api/lol/api/summoner-v4/by-encrypted-account-id.interface";
import {expect} from "chai";

const checkProperties = (res) => {

  const mock: bySummonerNameInterface = {
    accoundId: "",
    id: "",
    name: "",
    profileIconId: 0,
    puuid: "",
    revisionDate: 0,
    summonerLevel: 0,
  };

  expect(res)
  .to.have.property("accountId")
  .which.is.a(typeof mock.accoundId);

  expect(res)
  .to.have.property("id")
  .which.is.a(typeof mock.id);

  expect(res)
  .to.have.property("name")
  .which.is.a(typeof mock.name);

  expect(res)
  .to.have.property("profileIconId")
  .which.is.a(typeof mock.profileIconId);

  expect(res)
  .to.have.property("puuid")
  .which.is.a(typeof mock.puuid);

  expect(res)
  .to.have.property("revisionDate")
  .which.is.a(typeof mock.revisionDate);

  expect(res)
  .to.have.property("summonerLevel")
  .which.is.a(typeof mock.summonerLevel);
}

export default checkProperties
