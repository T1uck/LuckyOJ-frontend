declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListString_ = {
    code?: number;
    data?: string[];
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number | any;
    message?: string;
  };

  type BaseResponsePageQuestion_ = {
    code?: number;
    data?: PageQuestion_;
    message?: string;
  };

  type BaseResponsePageQuestionSubmitVO_ = {
    code?: number;
    data: PageQuestionSubmitVO_;
    message?: string;
  };

  type BaseResponsePageQuestionVO_ = {
    code?: number;
    data?: PageQuestionVO_| any;
    message?: string;
  };

  type BaseResponsePageSafeQuestionVo_ = {
    code?: number;
    data?: PageSafeQuestionVo_;
    message?: string;
  };

  type BaseResponseQuestion_ = {
    code?: number;
    data?: Question;
    message?: string;
  };

  type BaseResponseQuestionSubmitVO_ = {
    code?: number;
    data: QuestionSubmitVO | any;
    message?: string;
  };

  type BaseResponseQuestionVO_ = {
    code?: number;
    data: QuestionVO | any;
    message?: string;
  };

  type BaseResponseSafeQuestionVo_ = {
    code?: number;
    data?: SafeQuestionVo;
    message?: string;
  };

  type BaseResponseSubmitSummaryVo_ = {
    code?: number;
    data?: SubmitSummaryVo;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getQuestionByIdUsingGET1Params = {
    /** questionId */
    questionId: number;
  };

  type getQuestionByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getQuestionSubmitByIdUsingGETParams = {
    /** questionId */
    questionId: number;
  };

  type getQuestionSubmitVoByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type getQuestionVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getSafeQuestionVoByIdUsingGETParams = {
    /** id */
    id: number;
  };

  type JudgeCase = {
    input?: string;
    output?: string;
  };

  type JudgeConfig = {
    memoryLimit: number;
    stackLimit: number;
    timeLimit: number;
  };

  type JudgeInfo = {
    expectedOutput?: string;
    input?: string;
    memory?: number;
    message?: string;
    output?: string;
    pass?: number;
    status?: string;
    time?: number;
    total?: number;
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

  type PageQuestion_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Question[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageQuestionSubmitVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records: QuestionSubmitVO[] | any;
    searchCount?: boolean;
    size?: number;
    total: number;
  };

  type PageQuestionVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records: QuestionVO[];
    searchCount?: boolean;
    size?: number;
    total: number;
  };

  type PageSafeQuestionVo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records: SafeQuestionVo[];
    searchCount?: boolean;
    size?: number;
    total: number;
  };

  type ProblemQueryRequest = {
    current?: number;
    difficulty?: string;
    keyword?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    tags?: string[];
  };

  type Question = {
    acceptedNum: number;
    answer: string;
    content: string;
    createTime: string;
    difficulty: string;
    favourNum: number;
    id: number;
    isDelete: number;
    judgeCase: JudgeCase[];
    judgeConfig: JudgeConfig;
    submitNum: number;
    tags: string[];
    thumbNum: number;
    title: string;
    updateTime: string;
    userId: number;
  };

  type QuestionAddRequest = {
    answer: string;
    content: string;
    difficulty: string;
    judgeCase: JudgeCase[];
    judgeConfig: JudgeConfig;
    tags: string[];
    title: string;
  };

  type QuestionEditRequest = {
    answer?: string;
    content?: string;
    id?: number;
    judgeCase?: JudgeCase[];
    judgeConfig?: JudgeConfig;
    tags?: string[];
    title?: string;
  };

  type QuestionQueryRequest = {
    answer?: string;
    content?: string;
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type QuestionSubmit = {
    code?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    judgeInfo?: string;
    language?: string;
    questionId?: number;
    status?: number;
    updateTime?: string;
    userId?: number;
  };

  type QuestionSubmitAddRequest = {
    code?: string;
    language?: string;
    questionId?: number;
  };

  type QuestionSubmitQueryRequest = {
    current?: number;
    language?: string;
    pageSize?: number;
    questionId?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    userId?: number;
  };

  type QuestionSubmitVO = {
    code?: string;
    createTime?: string;
    id?: number;
    difficulty: string;
    judgeInfo?: JudgeInfo;
    language?: string;
    questionId?: number;
    questionVO?: QuestionVO;
    status?: number;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type QuestionUpdateRequest = {
    answer?: string;
    content?: string;
    difficulty?: string;
    id?: number;
    judgeCase?: JudgeCase[];
    judgeConfig?: JudgeConfig;
    tags?: string[];
    title?: string;
  };

  type QuestionVO = {
    acceptedNum: number;
    content: string;
    createTime: string;
    favourNum: number;
    id: number;
    judgeConfig: JudgeConfig;
    submitNum: number;
    tags: string[];
    thumbNum: number;
    title: string;
    updateTime: string;
    userId: number;
    userVO: UserVO;
  };

  type SafeQuestionVo = {
    acceptedNum: number;
    answer: string;
    content?: string;
    createTime?: string;
    difficulty?: string;
    favourNum: number;
    id: number;
    judgeConfig?: JudgeConfig;
    status: string;
    submitNum: number;
    tags: string[];
    thumbNum: number;
    title?: string;
    updateTime?: string;
  };

  type SubmitSummaryVo = {
    easyPass: number;
    easyTotal: number;
    hardPass: number;
    hardTotal: number;
    mediumPass: number;
    mediumTotal: number;
    passCount: number;
    submitCount: number;
    total: number;
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
