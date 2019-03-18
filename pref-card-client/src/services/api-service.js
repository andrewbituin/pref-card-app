import TokenService from "./token-service";
import config from "../config";

const ApiService = {
  getAllCards() {
    return fetch(`${config.API_ENDPOINT}/all`, {
      method: "GET"
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};
export default ApiService;
