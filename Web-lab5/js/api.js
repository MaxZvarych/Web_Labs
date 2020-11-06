const BASE_URL = "http://localhost:8080";
const RESOURSE_URL = `${BASE_URL}/securities`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

// public functionality

export const getAllSecurities = async () => {
  const rawResponse = await baseRequest({ method: "GET" });

  return await rawResponse.json();
};

export const postSecurity = (body) => baseRequest({ method: "POST", body });

export const updateSecurity = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteSecurity = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });
