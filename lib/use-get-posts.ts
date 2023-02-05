import { APIError } from "@/lib/api-error";
import { MILLISECONDS_IN_ONE_MINUTE } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export interface PostMetadata {
  data: { [key: string]: any };
  slug: string;
}

async function getPosts() {
  const url = "/api/posts/get-list";
  const request = new Request(url, {
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
  return data;
}

export function useGetPosts() {
  return useQuery<Array<PostMetadata>, APIError>({
    queryKey: ["posts"],
    queryFn: async () => await getPosts(),
    staleTime: MILLISECONDS_IN_ONE_MINUTE * 5,
  });
}
