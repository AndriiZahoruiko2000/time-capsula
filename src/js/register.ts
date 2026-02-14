import iziToast from "izitoast";
import { refs } from "./helpers/refs";
import { confirmUserEmail, registerUser } from "./services/auth-service";
import type { ConfirmUserEmail, RegisterBody } from "./types/users";
import "izitoast/dist/css/iziToast.min.css";

refs.registerForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = refs.registerForm as HTMLFormElement;

  const formData = new FormData(form);

  const registerEmail = formData.get("email") as string;
  const registerPassword = formData.get("password") as string;
  const confirmRegisterPassword = formData.get("repeat-password") as string;

  if (registerPassword === confirmRegisterPassword) {
    const registerData: RegisterBody = {
      email: registerEmail,
      password: registerPassword,
    };
    // const response = await registerUser(registerData);
    refs.confirmSection?.classList.add("is-open");
  } else {
    iziToast.show({
      title: "Hey",
      message: "Please password does not match",
    });
  }

  form.reset();
});

refs.confirmForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = refs.confirmForm as HTMLFormElement;
  const formData = new FormData(form);

  const confirmUserData: ConfirmUserEmail = {
    email: formData.get("confirm-email") as string,
    code: formData.get("code") as string,
  };

  const response = await confirmUserEmail(confirmUserData);
  const link = document.createElement("a");
  link.href = "/login";
  link.click();
});

refs.confirmSection?.addEventListener("click", (e) => {
  if (e.target !== refs.confirmSection) return;
  refs.confirmSection?.classList.remove("is-open");
});
