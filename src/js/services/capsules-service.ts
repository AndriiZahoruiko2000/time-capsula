import type {
  Capsula,
  GetCapsulasParams,
  GetCapsulasResponse,
  UpdateCapsulaBody,
} from "../types/capsules";
import { api } from "./server-config";

export async function getCapsula(params?: GetCapsulasParams) {
  const response = await api.get<GetCapsulasResponse>("/capsules", { params });
  return response.data;
}

export async function createCapsule() {
  const response = await api.post("/capsules");
  return response.data;
}

export async function updateCapsule(
  capsuleId: string,
  body: UpdateCapsulaBody
) {
  const response = await api.patch<Capsula>(`/capsules/${capsuleId}`, body);
  return response.data;
}

export async function deleteCapsula(capsuleId: string) {
  const response = await api.delete(`/capsules/${capsuleId}`);
  return response.data;
}

export async function getCapsulaById(capsuleId: string) {
  const response = await api.get<Capsula>(`/capsules/${capsuleId}`);
  return response.data;
}
