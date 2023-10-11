// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getQuestionById GET /api/question/inner/get/id */
export async function getQuestionByIdUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.Question>('/api/question/inner/get/id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getQuestionSubmitById GET /api/question/inner/question_submit/get/id */
export async function getQuestionSubmitByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionSubmitByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.QuestionSubmit>('/api/question/inner/question_submit/get/id', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateQuestionSubmitById POST /api/question/inner/question_submit/update */
export async function updateQuestionSubmitByIdUsingPOST(
  body: API.QuestionSubmit,
  options?: { [key: string]: any },
) {
  return request<boolean>('/api/question/inner/question_submit/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
