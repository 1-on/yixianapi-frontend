// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /interfaceInfo/add */
export async function addInterfaceInfo(
  body: API.InterfaceInfoAddDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultLong>('/interfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/delete */
export async function deleteInterfaceInfo(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean>('/interfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/edit */
export async function editInterfaceInfo(
  body: API.InterfaceInfoEditDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean>('/interfaceInfo/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /interfaceInfo/get/vo */
export async function getInterfaceInfoVoById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceInfoVOByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultInterfaceInfoVO>('/interfaceInfo/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/invoke */
export async function interfaceInfoInvoke(
  body: API.InterfaceInfoInvokeDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultObject>('/interfaceInfo/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/list/page */
export async function listInterfaceInfoByPage(
  body: API.InterfaceInfoQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInterfaceInfo>('/interfaceInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/list/page/vo */
export async function listInterfaceInfoVoByPage(
  body: API.InterfaceInfoQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInterfaceInfoVO>('/interfaceInfo/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/my/list/page/vo */
export async function listMyInterfaceInfoVoByPage(
  body: API.InterfaceInfoQueryDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInterfaceInfoVO>('/interfaceInfo/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/offline */
export async function offlineInterfaceInfo(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.ResultBoolean>('/interfaceInfo/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/online */
export async function onlineInterfaceInfo(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.ResultBoolean>('/interfaceInfo/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interfaceInfo/update */
export async function updateInterfaceInfo(
  body: API.InterfaceInfoUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean>('/interfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
