import axios from "axios";
import { BASE_URL } from "constants/constants";

export const getNumberOfBreakpoints = async (path: string, body: any) => {
  const { data } = await axios.post<[number, number[]]>(
    `${BASE_URL}${path}`,
    body
  );
  return data;
};

export const getPermutations = async (path: string, body: any) => {
  const { data } = await axios.post<{
    permutations: number[][];
    permutationDistance: number;
    lefts: number[][];
    mids: number[][];
    breakpoints: number[][];
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

export const getKmers = async (
  path: string,
  body: { k: number; chromosome1: string; chromosome2: string }
) => {
  const { data } = await axios.post<[number, number][]>(
    `${BASE_URL}${path}`,
    body
  );
  console.log("DATA: ", data);
  return data;
};
