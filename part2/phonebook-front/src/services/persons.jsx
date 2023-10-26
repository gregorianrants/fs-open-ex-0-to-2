import axios from "axios";

const URL = "/api/persons";

let get = () => {
  return axios.get(URL).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

function create(data) {
  return axios.post(URL, data).then((res) => res.data);
}

function remove(id) {
  return axios.delete(`${URL}/${id}`).then((res) => {});
}

function update(id, data) {
  return axios.put(`${URL}/${id}`, data).then((res) => res.data);
}

export default {
  get,
  create,
  remove,
  update,
};
