class Api {
  constructor(options) {
    this.baseURL = options.baseURL;
    this.headers = options.headers;
  }

  getBeer() {
    return fetch(this.baseURL + "/beer/random_beer", {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
      // .then((res) => {
      //   console.log(res);
      //   return res;
      // })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  getUserInfo() {
    return fetch(this.baseURL + "/users/random_user", {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => {
        // console.log("hello");
        // console.log(err);
        return err;
      });
  }
}

let options = {
  baseURL: " https://random-data-api.com/api",
  headers: {
    authorization: "",
    "Content-Type": "application/json",
  },
};
const api = new Api(options);
export default api;
