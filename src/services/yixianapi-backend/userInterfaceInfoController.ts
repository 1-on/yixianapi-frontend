// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /userInterfaceInfo/add */
export async function addUserInterfaceInfo(
  body: API.UserInterfaceInfoAddDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultLong>('/userInterfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/addInvokeNum */
export async function addInvokeNum(body: API.AddInvokeNumDTO, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/userInterfaceInfo/addInvokeNum', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/delete */
export async function deleteUserInterfaceInfo(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean>('/userInterfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/edit */
export async function editUserInterfaceInfo(
  body: API.UserInterfaceInfoEditDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean>('/userInterfaceInfo/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /userInterfaceInfo/get/vo */
export async function getUserInterfaceInfoVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserInterfaceInfoVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultUserInterfaceInfoVO>('/userInterfaceInfo/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/list/page */
export async function listUserInterfaceInfoByPage(
  body: API.UserInterfaceInfoQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUserInterfaceInfo>('/userInterfaceInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/list/page/vo */
export async function listUserInterfaceInfoVoByPage(
  body: API.UserInterfaceInfoQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUserInterfaceInfoVO>('/userInterfaceInfo/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/my/list/page/vo */
export async function listMyUserInterfaceInfoVoByPage(
  body: API.UserInterfaceInfoQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageUserInterfaceInfoVO>('/userInterfaceInfo/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userInterfaceInfo/update */
export async function updateUserInterfaceInfo(
  body: API.UserInterfaceInfoUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean>('/userInterfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
