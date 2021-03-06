import axios from "axios";
const { REACT_APP_HOST } = process.env;

export const getAllhistories = (token) => {
  const URL = `${REACT_APP_HOST}/api/transactions?page=1&limit=12`;
  return axios.get(URL, { headers: { "x-access-token": token } });
};

export const softDeleteHistories = (token, id) => {
  const URL = `${REACT_APP_HOST}/api/transactions/${id}`;
  return axios.patch(URL, { headers: { "x-access-token": token } });
};
