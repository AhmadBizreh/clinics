import axios from "axios";

const BaseURL = "";

export default class Api {
  Get() {
    return axios.get(`${BaseURL}/`, {});
  }
  AddCustomer() {
    return axios.post(`${BaseURL}/`, {});
  }

  Edit(id) {}
}
export let APIInstance = new Api();
