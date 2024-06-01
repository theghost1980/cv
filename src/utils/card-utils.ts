const getJsonFromRepository = async (baseUrl: string, route: string) => {
  try {
    const response = await fetch(`${baseUrl}${route}`, {
      headers: {
        Authorization: `Bearer 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`,
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
