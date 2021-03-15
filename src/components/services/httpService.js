import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api/users";

function getUsers(pageNo = 1, userPerPage) {
  return axios
    .get(`?per_page=${userPerPage}&page=${pageNo}`)
    .then((res) => res.data)
    .then((resData) => ({
      list: resData.data,
      total: resData.total,
    }));
}

export default getUsers;
