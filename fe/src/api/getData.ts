import axios from "axios";

export const getData = async (path: string) => {
  const { data } = await axios.get<{
    [key: string]: { [key: string]: string };
  }>("http://localhost:9090/sectionNames");

  return data;
};
