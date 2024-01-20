import { ReadonlyURLSearchParams } from "next/navigation";

export const mountNextJsQueryParamsString = (
  searchParams: ReadonlyURLSearchParams,
  queryParams: Record<string, string | boolean>[]
) => {
  const newQueryParams = new URLSearchParams(searchParams);
  queryParams.forEach((param) => {
    const [paramKey, paramValue] = Object.entries(param)[0];

    newQueryParams.set(paramKey, String(paramValue));
  });

  return newQueryParams?.toString() ?? "";
};
