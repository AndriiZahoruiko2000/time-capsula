import { saveToLs } from "./helpers/local-storage";
import { refs } from "./helpers/refs";
import { loginUser } from "./services/auth-service";

refs.loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = refs.loginForm as HTMLFormElement;
  const formData = new FormData(form);

  const userData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const response = await loginUser(userData);
  console.log("login", response);

  saveToLs("LOGIN_USER_INFO", response);

  const link = document.createElement("a");
  link.href = "/index";
  link.click();
  form.reset();
});
