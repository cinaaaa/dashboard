import { GetListParams } from "react-admin";

export function URLParams(params: GetListParams): string {
  // parameters and filters
  const limit = `limit=${params.pagination.perPage}&`;
  const query = params.filter.q !== undefined ? `&q=${params.filter.q}` : "";
  const sort = `&ordering=${
    params.sort.order === "DESC" ? params.sort.field : "-" + params.sort.field
  }`;
  const skip = `skip=${
    (params.pagination.page - 1) * params.pagination.perPage
  }`;

  return `?${limit + skip + query + sort}`;
}
