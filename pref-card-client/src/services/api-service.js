import TokenService from "./token-service";
import config from "../config";

const ApiService = {
  getAllCards() {
    return fetch(`${config.API_ENDPOINT}/all`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postCard(newCard) {
    return fetch(`${config.API_ENDPOINT}/create-card`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: newCard
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getAllUsers() {
    return fetch(`${config.API_ENDPOINT}/auth/users`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

};
export default ApiService;
