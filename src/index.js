import "./styles/main.scss";
import template from "./templates/main.hbs";
import { getUsers } from "./utils/requests";

let page = 1;
let dataState = [];
const limit = 16;

window.onload = () => {
  const container = document.getElementById("container");
  const load = document.getElementById("load");
  getUsers(page, limit)
    .then(users => {
      dataState = [...users];
      container.innerHTML = template({ pageContent: dataState });
    })
    .catch(e => {
      console.log("ooooooooo");
    });

  // load.addEventListener("click", () => {
  //   getUsers(++page, limit).then(users => {
  //     dataState = [...dataState, ...users];
  //     container.innerHTML = template({ pageContent: dataState });
  //   });
  // });

  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - 10) {
      getUsers(++page, limit).then(users => {
        console.log({ users });
        if (users.length === 0) {
          alert("The End");
          return;
        }
        dataState = [...dataState, ...users];
        container.innerHTML = template({ pageContent: dataState });
      });
    }
  });
};
