import { loadFromLs } from "./helpers/local-storage";
import { refs } from "./helpers/refs";

document.addEventListener("DOMContentLoaded", (e) => {
  const userData = loadFromLs("LOGIN_USER_INFO");
  if (userData) {
    refs.loginBtn?.classList.add("is-hidden");
    refs.logoutBtn?.classList.remove("is-hidden");
  } else {
    refs.loginBtn?.classList.remove("is-hidden");
    refs.logoutBtn?.classList.add("is-hidden");
  }
});

refs.logoutBtn?.addEventListener("click", (e) => {
  localStorage.removeItem("LOGIN_USER_INFO");
});
