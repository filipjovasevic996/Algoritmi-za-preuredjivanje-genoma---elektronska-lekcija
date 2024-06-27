import axios from "axios";
import { BASE_URL } from "constants/constants";

export const getNumberOfBreakpoints = async (path: string, body: any) => {
  const { data } = await axios.post<number>(`${BASE_URL}${path}`, body);
  return data;
};

export const getPermutations = async (path: string, body: any) => {
  const { data } = await axios.post<{
    permutations: number[][];
    permutationDistance: number;
  }>(`${BASE_URL}${path}`, body);
  return data;
};

export const getTwoBreakDistance = async (path: string, body: any) => {
  const { data } = await axios.post<number>(`${BASE_URL}${path}`, body);
  return data;
};

export const shortestRearrangementScenario = async (
  path: string,
  body: any
) => {
  const { data } = await axios.post<{
    permutations: number[][];
    permutationDistance: number;
  }>(`${BASE_URL}${path}`, body);
  return data;
};
