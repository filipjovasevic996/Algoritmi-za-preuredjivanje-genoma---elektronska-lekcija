import axios from "axios";
import { baseUrl } from "constants/constants";

export const getData = async (path: string, body: any) => {
  const { data } = await axios.get<number>(`${baseUrl}${path}`, body);

  return data;
};
