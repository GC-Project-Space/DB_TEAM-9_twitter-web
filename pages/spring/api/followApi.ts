import { apiClient } from "../config/apiClinet";

export const getFollowCount = async (email: string) => {
  const result  = await apiClient.get(`/follow/count?email=${email}`);
  return result;
};