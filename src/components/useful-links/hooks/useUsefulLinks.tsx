"use client";

import { UsefulLink } from "@/models/UseLink";
import { APIError } from "@/utils/api-error";
import { MILLISECONDS_IN_ONE_MINUTE } from "@/constants";
import { useQuery } from "@tanstack/react-query";

async function getUsefulLinks() {
  const request = new Request("/api/useful-links", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  const response = await fetch(request);
  const data = await response.json();

  if (!response.ok) {
    throw new APIError(request, response, data);
  }
  return data.usefulLinks;
}

export function useUsefulLinks() {
  return useQuery<Array<UsefulLink>, APIError>({
    queryKey: ["useful-links"],
    queryFn: async () => {
      return await getUsefulLinks();
    },
    staleTime: MILLISECONDS_IN_ONE_MINUTE * 5,
  });
}
