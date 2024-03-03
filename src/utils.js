import store from "./stores";
import { addTodo } from "./stores/todo";
import { login, logout } from "./stores/auth";
import { openModal } from "./stores/modal";

// //tüm hepsini verir auth,modal todo gibi
// // console.log(
// //     store.getState()
// // )

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo));
};
export const loginHandle = (user) => {
  store.dispatch(login(user));
};
export const logoutHandle = (user) => {
  store.dispatch(logout());
};
export const modal = (name, data = false) => {
  store.dispatch(
    openModal({
      name,
      data,
    })
  );
};
