// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addQuestion POST /api/question/add */
export async function addQuestionUsingPOST(
  body: API.QuestionAddRequest | any,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/question/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteQuestion POST /api/question/delete */
export async function deleteQuestionUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/question/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editQuestion POST /api/question/edit */
export async function editQuestionUsingPOST(
  body: API.QuestionEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/question/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionById GET /api/question/get */
export async function getQuestionByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestion_>('/api/question/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getQuestionVOById GET /api/question/get/vo */
export async function getQuestionVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestionVO_>('/api/question/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listQuestionByPage POST /api/question/list/page */
export async function listQuestionByPageUsingPOST(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listQuestionVOByPage POST /api/question/list/page/vo */
export async function listQuestionVOByPageUsingPOST(
  body: API.ProblemQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/api/question/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyQuestionVOByPage POST /api/question/my/list/page/vo */
export async function listMyQuestionVOByPageUsingPOST(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/api/question/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listSafeQuestionVoByPage POST /api/question/page/vo/safe */
export async function listSafeQuestionVoByPageUsingPOST(
  body: API.ProblemQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageSafeQuestionVo_>('/api/question/page/vo/safe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionSubmitVoById GET /api/question/questin_submit/${param0} */
export async function getQuestionSubmitVoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionSubmitVoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseQuestionSubmitVO_>(`/api/question/questin_submit/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** doQuestionSubmit POST /api/question/question_submit/do */
export async function doQuestionSubmitUsingPOST(
  body: API.QuestionSubmitAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/question/question_submit/do', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listQuestionSubmitByPage POST /api/question/question_submit/list/page */
export async function listQuestionSubmitByPageUsingPOST(
  body: API.QuestionSubmitQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionSubmitVO_>('/api/question/question_submit/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSubmitSummary GET /api/question/summary */
export async function getSubmitSummaryUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseSubmitSummaryVo_>('/api/question/summary', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getProblemTags GET /api/question/tags */
export async function getProblemTagsUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListString_>('/api/question/tags', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateQuestion POST /api/question/update */
export async function updateQuestionUsingPOST(
  body: API.QuestionUpdateRequest | any,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/question/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSafeQuestionVoById GET /api/question/vo/safe/${param0} */
export async function getSafeQuestionVoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSafeQuestionVoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseSafeQuestionVo_>(`/api/question/vo/safe/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
