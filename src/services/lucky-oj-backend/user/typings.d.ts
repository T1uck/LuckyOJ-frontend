declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMapStringObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getByIdUsingGETParams = {
    /** userId */
    userId: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type listByIdsUsingGETParams = {
    /** idList */
    idList: number[];
  };

  type loginByEmailUsingPOSTParams = {
    creationTime?: number;
    id?: string;
    lastAccessedTime?: number;
    maxInactiveInterval?: number;
    new?: boolean;
    'servletContext.classLoader'?: any;
    'servletContext.contextPath'?: string;
    'servletContext.defaultSessionTrackingModes'?: 'COOKIE' | 'URL' | 'SSL';
    'servletContext.effectiveMajorVersion'?: number;
    'servletContext.effectiveMinorVersion'?: number;
    'servletContext.effectiveSessionTrackingModes'?: 'COOKIE' | 'URL' | 'SSL';
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].buffer'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].defaultContentType'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].deferredSyntaxAllowedAsLiteral'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].elIgnored'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].errorOnUndeclaredNamespace'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includeCodas'?: string[];
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].includePreludes'?: string[];
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].isXml'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].pageEncoding'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].scriptingInvalid'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].trimDirectiveWhitespaces'?: string;
    'servletContext.jspConfigDescriptor.jspPropertyGroups[0].urlPatterns'?: string[];
    'servletContext.jspConfigDescriptor.taglibs[0].taglibLocation'?: string;
    'servletContext.jspConfigDescriptor.taglibs[0].taglibURI'?: string;
    'servletContext.majorVersion'?: number;
    'servletContext.minorVersion'?: number;
    'servletContext.requestCharacterEncoding'?: string;
    'servletContext.responseCharacterEncoding'?: string;
    'servletContext.serverInfo'?: string;
    'servletContext.servletContextName'?: string;
    'servletContext.sessionCookieConfig.comment'?: string;
    'servletContext.sessionCookieConfig.domain'?: string;
    'servletContext.sessionCookieConfig.httpOnly'?: boolean;
    'servletContext.sessionCookieConfig.maxAge'?: number;
    'servletContext.sessionCookieConfig.name'?: string;
    'servletContext.sessionCookieConfig.path'?: string;
    'servletContext.sessionCookieConfig.secure'?: boolean;
    'servletContext.sessionTimeout'?: number;
    'servletContext.virtualServerName'?: string;
    valueNames?: string[];
  };

  type LoginEmailRequest = {
    code?: string;
    email?: string;
  };

  type LoginUserVO = {
    accessKey?: string;
    createTime?: string;
    email?: string;
    id?: number;
    secretKey?: string;
    sex?: number;
    tags?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'CONTINUE'
      | 'SWITCHING_PROTOCOLS'
      | 'PROCESSING'
      | 'CHECKPOINT'
      | 'OK'
      | 'CREATED'
      | 'ACCEPTED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NO_CONTENT'
      | 'RESET_CONTENT'
      | 'PARTIAL_CONTENT'
      | 'MULTI_STATUS'
      | 'ALREADY_REPORTED'
      | 'IM_USED'
      | 'MULTIPLE_CHOICES'
      | 'MOVED_PERMANENTLY'
      | 'FOUND'
      | 'MOVED_TEMPORARILY'
      | 'SEE_OTHER'
      | 'NOT_MODIFIED'
      | 'USE_PROXY'
      | 'TEMPORARY_REDIRECT'
      | 'PERMANENT_REDIRECT'
      | 'BAD_REQUEST'
      | 'UNAUTHORIZED'
      | 'PAYMENT_REQUIRED'
      | 'FORBIDDEN'
      | 'NOT_FOUND'
      | 'METHOD_NOT_ALLOWED'
      | 'NOT_ACCEPTABLE'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUEST_TIMEOUT'
      | 'CONFLICT'
      | 'GONE'
      | 'LENGTH_REQUIRED'
      | 'PRECONDITION_FAILED'
      | 'PAYLOAD_TOO_LARGE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'URI_TOO_LONG'
      | 'REQUEST_URI_TOO_LONG'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'EXPECTATION_FAILED'
      | 'I_AM_A_TEAPOT'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'METHOD_FAILURE'
      | 'DESTINATION_LOCKED'
      | 'UNPROCESSABLE_ENTITY'
      | 'LOCKED'
      | 'FAILED_DEPENDENCY'
      | 'TOO_EARLY'
      | 'UPGRADE_REQUIRED'
      | 'PRECONDITION_REQUIRED'
      | 'TOO_MANY_REQUESTS'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'INTERNAL_SERVER_ERROR'
      | 'NOT_IMPLEMENTED'
      | 'BAD_GATEWAY'
      | 'SERVICE_UNAVAILABLE'
      | 'GATEWAY_TIMEOUT'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'VARIANT_ALSO_NEGOTIATES'
      | 'INSUFFICIENT_STORAGE'
      | 'LOOP_DETECTED'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'NOT_EXTENDED'
      | 'NETWORK_AUTHENTICATION_REQUIRED';
    view?: View;
    viewName?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type RegisterEmailRequest = {
    checkPassword?: string;
    code?: string;
    email?: string;
    userPassword?: string;
  };

  type sendMsgUsingPOSTParams = {
    /** email */
    email: string;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    email?: string;
    id?: number;
    isDelete?: number;
    secretKey?: string;
    sex?: number;
    tags?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    email?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    email?: string;
    password?: string;
    tags?: number[];
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    email?: string;
    id?: number;
    password?: string;
    tags?: number[];
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    accessKey?: string;
    createTime?: string;
    email?: string;
    id?: number;
    secretKey?: string;
    sex?: number;
    tags?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type View = {
    contentType?: string;
  };
}
