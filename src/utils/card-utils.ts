const GITHUB_API_TOKEN =
  process.env.GITHUB_API_TOKEN ?? "no token, contact DEV!";

const getJsonFromRepository = async (baseUrl: string, route: string) => {
  try {
    const response = await fetch(`${baseUrl}${route}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_API_TOKEN}`,
      },
    });
    if (response.status === 200) {
      console.log({ response }); //TODO remove line
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
