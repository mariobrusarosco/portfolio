import { ReadonlyURLSearchParams } from "next/navigation";

type Props = {
  searchParams: ReadonlyURLSearchParams;
  queryParams: Record<string, string | boolean>[] | undefined;
};

export const updateParamsOnURL = ({ searchParams, queryParams }: Props) => {
  if (queryParams === undefined) return null;

  const newQueryParams = new URLSearchParams(searchParams);
  queryParams.forEach((param) => {
    const [paramKey, paramValue] = Object.entries(param)[0];
    newQueryParams.set(paramKey, String(paramValue));
  });

  return newQueryParams?.toString() ?? "";
};
