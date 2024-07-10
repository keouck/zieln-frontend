import { BACKEND_URI } from "@/constant";

interface FetchOptions {
  method: string;
  headers: HeadersInit;
  body?: string | null;
}

const fetchData = async <T>(
  endpoint: string,
  method: string,
  headers: HeadersInit = {},
  body: any = null
): Promise<T> => {
  const url = `${BACKEND_URI}/api${endpoint}`;
  const options: FetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const get = async <T>(
  endpoint: string,
  headers: HeadersInit = {}
): Promise<T> => {
  return fetchData<T>(endpoint, "GET", headers);
};

export const post = async <T>(
  endpoint: string,
  body: any,
  headers: HeadersInit = {}
): Promise<T> => {
  return fetchData<T>(endpoint, "POST", headers, body);
};
