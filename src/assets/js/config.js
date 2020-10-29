let dev_root_url = "https://armypurchase-api-biz.nb0574.net";
// let production_root_url = '';

let api_root_url = dev_root_url;

export default {
  // 登录
  userLogin: api_root_url + "/login/submit", // 账号密码登录

  // 注册
  userRegister: api_root_url + "/login/register", // 用户注册

  // 信息修改
  editUserInfo: api_root_url + "/user/userupdata", // 修改用户信息
  editPassword: api_root_url + "/user/updatapwd", // 修改密码

  // 公共部分
  uploadOneFile: api_root_url + "/api/file/uploadOneFile", //文件上传
  getCorrespondDict: api_root_url + "/baseitem/query", // 获取各类字典内容
  getProjectTypeDict: api_root_url + "/baseitem/projectTypequery", // 获取项目类树状数据结构
  getNoTokenDict: api_root_url + "/baseitem/querynotoken", // 获取无需token时的字典内容

  // 工作台消息列表
  getMessageList: api_root_url + "/message/list", // 消息列表
  message: api_root_url + "/message/update", //消息更新

  editMessage: api_root_url + "/message/update", // 修改消息状态

  // 用户信息 —— 管理员模块
  getAdminInfo: api_root_url + "/user/userinfo", // 获取管理员信息

  // 题库查询 —— 管理员模块
  getQuestionList: api_root_url + "/supplier/templatequery", // 获取题库查询列表
  addQuestion: api_root_url + "/supplier/templatadd", // 新增题库
  editQuestion: api_root_url + "/supplier/templatupdata", // 修改题库详情信息

  // 供应商管理 —— 管理员模块
  getSupplierWhiteList: api_root_url + "/blacksup/supwhite", // 获取供应商白名单
  getSupplierScoreByAdmin: api_root_url + "/supplier/templatequery", // 管理员获取供应商相关模板详情
  getSupplierBlackList: api_root_url + "/blacksup/list", // 获取供应商黑名单
  addSupplierBlack: api_root_url + "/blacksup/save", // 新增供应商黑名单
  downloadBlackTemplate: api_root_url + "/template/黑名单批量导入模板.xlsx", // 下载黑名单模板
  importBlackFile: api_root_url + "/blacksup/batchImport", // 批量导入黑名单数据
  editSupplierBlackDetail: api_root_url + "/blacksup/update", // 修改供应商黑名单详情信息
  deleteSupplierBlack: api_root_url + "/blacksup/delete", // 供应商解除黑名单
  getSupplierResList: api_root_url + "/supplier/supplierlist", // 获取供应商资源列表
  getScoreList: api_root_url + "/supplier/rateScoreList", // 获取分数列表

  // 采购人管理 —— 管理员模块
  getPurchList: api_root_url + "/user/purchlist", // 获取采购人列表
  editPurchPer: api_root_url + "/user/updatacheckandpermission", // 修改采购人权限
  deletePurch: api_root_url + "/user/userdelete", // 移除采购人

  // 采购机构管理 —— 管理员模块
  getPurchAgencyList: api_root_url + "/user/purchlist", // 获取采购机构列表
  editPurchAgencyPer: api_root_url + "/user/updatacheckandpermission", // 修改采购人权限
  deletePurchAgency: api_root_url + "/user/userdelete", // 移除采购机构

  // 需求公示项目管理 —— 管理员模块
  getNeedPublicList: api_root_url + "/purch/demand/query", // 获取需求公示项目列表
  editNeedPublic: api_root_url + "/purch/demand/updata", // 需求公示信息修改\审核、撤销等操作
  editNeedPublicSecond: api_root_url + "/purch/demand/contentcheck", // 需求公示信息补充内容二次审核
  getSupplierOpinion: api_root_url + "/purch/demand/sup/query", // 获取供应商意见
  getMyOpinion: api_root_url + "/purch/demand/sup/querybyself", // 获取个人意见

  // 比价项目管理 —— 管理员模块
  getParityList: api_root_url + "/purch/projectitem/list", // 获取比价项目列表
  getParityDetail: api_root_url + "/purch/projectitem/query", // 获取比价项目信息详情
  auditParityProject: api_root_url + "/purch/projectitem/status", // 审核比价项目
  auditParityProjectSecond: api_root_url + "/purch/projectitem/contentcheck", // 比价项目补充内容二次审核
  deleteParityProject: api_root_url + "/purch/projectitem/delete", // 撤销比价项目
  getParitySuppliers: api_root_url + "/purch/projectsup/query", // 项目关系查询
  auditParitySuppliers: api_root_url + "/purch/projectsup/update", // 审核参与比价的供应商
  getMyParity: api_root_url + "/purch/projectsup/querybyself", // 我的比价项目报价

  // 集中采购项目管理 —— 管理员模块
  getMallList: api_root_url + "/purch/projectitem/list", // 获取集中采购项目列表
  getMallDetail: api_root_url + "/purch/projectitem/query", // 获取集中采购项目信息详情
  auditMallProject: api_root_url + "/purch/projectitem/status", // 审核集中采购项目
  auditMallProjectSecond: api_root_url + "/purch/projectitem/contentcheck", // 集中采购项目补充内容二次审核
  deleteMallProject: api_root_url + "/purch/projectitem/delete", // 撤销集中采购项目
  getMyMall: api_root_url + "/purch/projectsup/querybyself", // 我的集采项目参与

  // 专家管理 —— 管理员模块
  getExpertList: api_root_url + "/purch/expret/list", // 获取专家列表
  getExpertDetail: api_root_url + "/purch/expret/query", // 获取专家详情
  addExpert: api_root_url + "/purch/expret/save", // 新增专家
  editExpert: api_root_url + "/purch/expret/update", // 修改专家信息
  deleteExpert: api_root_url + "/purch/expret/delete", // 移除专家
  downloadExpertImportFile:
    api_root_url + "/purch/excel/expret/template/download", // 专家信息导入模板下载
  importExpertFile: api_root_url + "/purch/expret/excelsave", // 批量导入专家信息
  getExpertMallList: api_root_url + "/purch/expret/projectitem/list", // 获取专家集采记录

  // 基础数据维护 —— 管理员模块
  getBasicData: api_root_url + "/baseitem/query", // 获取基础数据列表或详情
  addBasicData: api_root_url + "/baseitem/add", // 新增基础数据
  editBasicData: api_root_url + "/baseitem/update", // 修改基础数据
  deleteBasicData: api_root_url + "/baseitem/delete", // 删除基础数据

  // 企业信息 —— 供应商模块
  getSupplierInfo: api_root_url + "/supplier/supplierinfo", // 获取供应商企业详情信息

  // 企业自评 —— 供应商模块
  getQuestions: api_root_url + "/supplier/templatesupquery", // 获取自评模板
  addMyScore: api_root_url + "/supplier/supplierEvaluationsup", // 新增自评
  editMyScore: api_root_url + "/supplier/supplierEvaluationsupupdata", // 修改自评
  getMyScore: api_root_url + "/supplier/supplierEvaluationsupquery", // 获取自我评分详情信息

  // 需求公示项目管理 —— 供应商模块
  // 获取需求公示项目列表接口地址同管理员模块
  // 获取供应商意见接口地址同管理员模块
  submitPublicOpinion: api_root_url + "/purch/demand/sup/add", // 提交意见
  editLikeOrNotLike: api_root_url + "/purch/demand/sup/like", // 意见点赞或取消点赞

  // 比价项目管理 —— 供应商模块
  // 获取比价项目列表接口地址同管理员模块
  // 获取比价项目详情接口地址同管理员模块
  submitParityPrice: api_root_url + "/purch/projectsup/add", // 提交报价及相关材料

  // 集中采购项目管理 —— 供应商模块
  // 获取集中采购项目列表接口地址同管理员模块
  // 获取集中采购项目详情接口地址同管理员模块
  submitMallData: api_root_url + "/purch/projectsup/add", // 提交相关材料

  // 我的产品 ———— 供应商模块
  getMyProductList: api_root_url + "/supplier/supplierfundquery", // 获取我的产品列表
  addProduct: api_root_url + "/supplier/supplierfundadd", // 新增产品
  editProduct: api_root_url + "/supplier/supplierfundupdata", // 修改产品详情信息
  downloadProductImportFile:
    api_root_url + "/supplier/excel/fun/template/download", // 产品信息导入模板下载
  importProductFile: api_root_url + "/supplier/supplierfundupdataimport", // 批量导入产品信息

  // 比价/集中采购项目
  projectitemSave: api_root_url + "/purch/projectitem/save", //新增项目
  projectitemList: api_root_url + "/purch/projectitem/list", //查询项目列表
  projectitemDelete: api_root_url + "/purch/projectitem/delete", //撤销项目
  projectitemQuery: api_root_url + "/purch/projectitem/query", //查询单个项目
  projectitemUpdate: api_root_url + "/purch/projectitem/update", //编辑项目
  projectsupQuery: api_root_url + "/purch/projectsup/query", //根据项目id获取供应商
  projectsupUpdate: api_root_url + "/purch/projectsup/batupdate", //多条项目关系修改
  commentUpdate: api_root_url + "/purch/projectsup/update", //提交中标供应商评价内容
  suppliertype: api_root_url + "/supplier/suppliertype", //供应商类型列表
  projectitemCatchsave: api_root_url + "/purch/projectitem/catchsave", //保存草稿
  projectitemcancel: api_root_url + "/purch/projectitem/cancel", //待审核撤销
  projectitemcontentadd: api_root_url + "/purch/projectitem/contentadd", //补充内容添加
  projectitemcontentcancel: api_root_url + "/purch/projectitem/contentcancel", //补充内容撤销

  //   需求公示项目
  demandQuery: api_root_url + "/purch/demand/query", //获取项目列表
  demandAdd: api_root_url + "/purch/demand/add", //需求新增
  demandDelete: api_root_url + "/purch/demand/updata", //撤销项目
  demandUpdate: api_root_url + "/purch/demand/sup/update", //需求关系新增
  querybyitem: api_root_url + "/message/querybyitem", //推送供应商查询
  demandCatchadd: api_root_url + "/purch/demand/catchadd", //保存草稿
  demandCatchupdata: api_root_url + "/purch/demand/catchupdata", //修改保存草稿
  cancle: api_root_url + "/purch/demand/cancel", //新增撤销接口
  demandContentadd: api_root_url + "/purch/demand/contentadd", //提交补充内容
  demandContentcancel: api_root_url + "/purch/demand/contentcancel", //撤销补充内容

  // 专家信息
  expretList: api_root_url + "/purch/expret/list", //获取专家列表
  expretQuery: api_root_url + "/purch/expret/query", //查询专家详情
  expreDetlete: api_root_url + "/purch/expret/delete", //删除专家
  expreSave: api_root_url + "/purch/expret/save", //单个录入专家
  expretUpdate: api_root_url + "/purch/expret/update", //修改专家
  projectitemExpret: api_root_url + "/purch/projectitem/expret/query", //参与专家查询
  expretAdd: api_root_url + "/purch/projectitem/expret/batadd", //添加专家至项目
  expretDraw: api_root_url + "/purch/projectitem/expret/draw", //抽取专家
  expretNum: api_root_url + "/purch/projectitem/expret/num", //提交抽取专家类型及数量
  expretupp: api_root_url + "/purch/projectitem/expret/add", //专家抽取：参加、不参加、待定
  expreTotal: api_root_url + "/purch/projectitem/expret/numbytype", //专家可抽取总人数
  exprethasdone: api_root_url + "/purch/projectitem/expret/listnum", //已抽取专家类型及数量
  expretListbyex: api_root_url + "/purch/expret/projectitem/listbyex", //专家模糊查询

  // 供应商资源
  supplierList: api_root_url + "/supplier/supplierlist", //供应商查询
  supplierfundquery: api_root_url + "/supplier/supplierfundquery", //产品查询
  fundquerybyname: api_root_url + "/supplier/fundquerybyname", //产品名称模糊查询

  // 采购人 采购机构工作台
  messagelist: api_root_url + "/message/list", //工作台消息列表

  //获取采购人、采购机构信息
  getpurchinfo: api_root_url + "/user/purchinfo", //获取用户信息
  // 修改采购人、采购机构信息
  userupdata: api_root_url + "/user/userupdata", //保存信息修改
};
