import { useState, useEffect, useCallback } from "react";
import { BACKEND_URI } from "@/constant";

interface FetchOptions {
  method: string;
  headers: HeadersInit;
  body?: string | null;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(endpoint: string, autoFetch: boolean = false) => {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(
    async (
      method: string = "GET",
      body: any = null,
      headers: HeadersInit = {}
    ) => {
      setFetchState({ data: null, loading: true, error: null });

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
        const responseData = await response.json();
        setFetchState({ data: responseData, loading: false, error: null });
      } catch (error) {
        console.error("Fetch error:", error);
        setFetchState({ data: null, loading: false, error });
      }
    },
    [endpoint]
  );

  const get = useCallback(
    async (headers: HeadersInit = {}) => {
      await fetchData("GET", null, headers);
    },
    [fetchData]
  );

  const post = useCallback(
    async (body: any, headers: HeadersInit = {}) => {
      await fetchData("POST", body, headers);
    },
    [fetchData]
  );

  const update = useCallback(
    async (body: any, headers: HeadersInit = {}) => {
      await fetchData("PUT", body, headers);
    },
    [fetchData]
  );

  useEffect(() => {
    if (autoFetch) {
      get();
    }
  }, [get, autoFetch]);

  return { ...fetchState, get, post, update };
};

export default useFetch;
