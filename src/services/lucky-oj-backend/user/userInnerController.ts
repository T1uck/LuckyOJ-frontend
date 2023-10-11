// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getById GET /api/user/inner/get/id */
export async function getByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.User>('/api/user/inner/get/id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listByIds GET /api/user/inner/get/ids */
export async function listByIdsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listByIdsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.User[]>('/api/user/inner/get/ids', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
