// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** error GET /api/user/error */
export async function errorUsingGET(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** error PUT /api/user/error */
export async function errorUsingPUT(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** error POST /api/user/error */
export async function errorUsingPOST(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** error DELETE /api/user/error */
export async function errorUsingDELETE(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** error PATCH /api/user/error */
export async function errorUsingPATCH(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
