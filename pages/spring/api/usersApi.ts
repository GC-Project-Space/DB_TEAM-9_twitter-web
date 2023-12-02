import { SignUpRequest } from "../@types/users.types";
import { apiClient } from "../config/apiClinet";

export const postSignUp = async (body: SignUpRequest) => {
  const result  = await apiClient.post(`/users/sign-up`, body);  return result;
  return result.data;
};