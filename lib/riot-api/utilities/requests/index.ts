import axios from "axios";

import requestTypes from "@enums/utilities/requests";

const instance = axios.create({
  timeout: 1000,
});

const req = async (method: requestTypes) => {
  return instance.request({ method });
};

export default req;
