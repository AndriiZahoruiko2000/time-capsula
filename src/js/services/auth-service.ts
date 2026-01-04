import { saveToLs } from "../helpers/local-storage";
import type {
  ConfirmUserEmail,
  LoginResponse,
  RegisterBody,
} from "../types/users";
import { api } from "./server-config";

export async function registerUser(userData: RegisterBody) {
  const response = await api.post("auth/register", userData);
  return response.data;
}

export async function confirmUserEmail(userData: ConfirmUserEmail) {
  const response = await api.post("auth/confirm", userData);
  return response.data;
}

export async function loginUser(
  userData: RegisterBody
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("auth/login", userData);
  setToken(response.data.accessToken);
  return response.data;
}

function setToken(token: string) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  saveToLs("token", token);
}
