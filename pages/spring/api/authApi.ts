import { apiClient } from "../config/apiClinet";

export const getUserCheck = async (email: string) => {
  const result  = await apiClient.get(`/auth/check-email?email=${email}`);
  return result;
};