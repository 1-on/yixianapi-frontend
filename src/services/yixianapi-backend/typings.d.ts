declare namespace API {
  type AddInvokeNumDTO = {
    interfaceInfoId?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getInterfaceInfoVOByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type getUserInterfaceInfoVOByIdParams = {
    id: number;
  };

  type getUserVOByIdParams = {
    id: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceInfo = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestParams?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type InterfaceInfoAddDTO = {
    name?: string;
    description?: string;
    url?: string;
    requestParams?: string;
    requestHeader?: string;
    responseHeader?: string;
    method?: string;
  };

  type InterfaceInfoEditDTO = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestParams?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
  };

  type InterfaceInfoInvokeDTO = {
    id?: number;
    userRequestParams?: string;
  };

  type InterfaceInfoQueryDTO = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestParams?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
    userId?: number;
  };

  type InterfaceInfoUpdateDTO = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestParams?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
  };

  type InterfaceInfoVO = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    requestParams?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
  };

  type LoginUserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    token?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageInterfaceInfo = {
    records?: InterfaceInfo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageInterfaceInfo;
    searchCount?: PageInterfaceInfo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageInterfaceInfoVO = {
    records?: InterfaceInfoVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageInterfaceInfoVO;
    searchCount?: PageInterfaceInfoVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUser = {
    records?: User[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUser;
    searchCount?: PageUser;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserInterfaceInfo = {
    records?: UserInterfaceInfo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserInterfaceInfo;
    searchCount?: PageUserInterfaceInfo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserInterfaceInfoVO = {
    records?: UserInterfaceInfoVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserInterfaceInfoVO;
    searchCount?: PageUserInterfaceInfoVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type ResultBoolean = {
    code?: number;
    message?: string;
    data?: boolean;
  };

  type ResultInterfaceInfoVO = {
    code?: number;
    message?: string;
    data?: InterfaceInfoVO;
  };

  type ResultLoginUserVO = {
    code?: number;
    message?: string;
    data?: LoginUserVO;
  };

  type ResultLong = {
    code?: number;
    message?: string;
    data?: number;
  };

  type ResultObject = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type ResultPageInterfaceInfo = {
    code?: number;
    message?: string;
    data?: PageInterfaceInfo;
  };

  type ResultPageInterfaceInfoVO = {
    code?: number;
    message?: string;
    data?: PageInterfaceInfoVO;
  };

  type ResultPageUser = {
    code?: number;
    message?: string;
    data?: PageUser;
  };

  type ResultPageUserInterfaceInfo = {
    code?: number;
    message?: string;
    data?: PageUserInterfaceInfo;
  };

  type ResultPageUserInterfaceInfoVO = {
    code?: number;
    message?: string;
    data?: PageUserInterfaceInfoVO;
  };

  type ResultPageUserVO = {
    code?: number;
    message?: string;
    data?: PageUserVO;
  };

  type ResultString = {
    code?: number;
    message?: string;
    data?: string;
  };

  type ResultUser = {
    code?: number;
    message?: string;
    data?: User;
  };

  type ResultUserInterfaceInfoVO = {
    code?: number;
    message?: string;
    data?: UserInterfaceInfoVO;
  };

  type ResultUserVO = {
    code?: number;
    message?: string;
    data?: UserVO;
  };

  type ResultVoid = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type User = {
    id?: number;
    userAccount?: string;
    userPassword?: string;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    accessKey?: string;
    secretKey?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddDTO = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    id?: number;
    userId?: number;
    interfaceInfoId?: number;
    totalNum?: number;
    leftNum?: number;
    status?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserInterfaceInfoAddDTO = {
    userId?: number;
    interfaceInfoId?: number;
    totalNum?: number;
    leftNum?: number;
  };

  type UserInterfaceInfoEditDTO = {
    id?: number;
    totalNum?: number;
    leftNum?: number;
    status?: number;
  };

  type UserInterfaceInfoQueryDTO = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    userId?: number;
    interfaceInfoId?: number;
    totalNum?: number;
    leftNum?: number;
    status?: number;
  };

  type UserInterfaceInfoUpdateDTO = {
    id?: number;
    totalNum?: number;
    leftNum?: number;
    status?: number;
  };

  type UserInterfaceInfoVO = {
    id?: number;
    userId?: number;
    interfaceInfoId?: number;
    totalNum?: number;
    leftNum?: number;
    status?: number;
    createTime?: string;
    updateTime?: string;
  };

  type UserLoginDTO = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryDTO = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterDTO = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserUpdateDTO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserUpdateMyDTO = {
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
  };

  type UserVO = {
    id?: number;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
  };
}
