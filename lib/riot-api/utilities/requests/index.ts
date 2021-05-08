import axios from "axios";

import requestTypes from "@enums/utilities/requests";

const instance = axios.create({
  timeout: 1000,
});

/**
 * Request handler
 *
 * @param {string} url
 * @param {requestTypes} method
 */
const req = async (url: string, method: requestTypes) => {
  return instance.request({ method, url });
};

export default req;
