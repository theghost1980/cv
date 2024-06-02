import { Config } from "../config";

const getJsonFromRepository = async (baseUrl: string, route: string) => {
  //TODO remove testing block
  console.log({ 1: process.env.GH_KEY, 2: process.env.REACT_APP_API_KEY });
  //end testing

  try {
    const response = await fetch(`${baseUrl}${route}`, {
      headers: {
        Authorization: `Bearer ${Config.api}`,
      },
    });
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(
      `Error fetching data from repo. ${response.status} - ${response.statusText}`
    );
  } catch (error) {
    console.log("Error fetching data from repo.", { error });
  }
};

export const CardUtils = {
  getJsonFromRepository,
};
