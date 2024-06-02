import { Config } from "../config";

const getJsonFromRepository = async (baseUrl: string, route: string) => {
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
