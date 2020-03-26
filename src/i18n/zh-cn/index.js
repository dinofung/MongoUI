// This is just an example,
// so you can safely delete all default props below

export default {
  // failed: 'Action failed',
  // success: 'Action was successful',
  search: '搜寻',
  sec: '秒',
  detail: '详情',
  ok: '确定',
  cancel: '取消',
  create: '新建',
  run: '执行',
  error: '错误',
  pageSizeLabel: '每页记录:',
  requestJsonParseTip: '必须输入JSON格式对象内容.',
  requestTip: '必须输入内容.',
  databaseStatistics: '数据库统计数据',
  serverStatus: '服务器状态',
  documents: '记录数:',
  storage: '存储:',
  key: '键',
  value: '值',
  type: '类型',
  field: '字段',
  record: '记录',
  modify: '修改',
  save: '保存',
  document_insert_success: '成功插入文档',
  document_update_success: '成功更新文档(<%=id%>)',
  document_delete_success: '成功删除文档(<%=id%>)',
  create_database: {
    title: '新建数据库',
    message: '数据库名称',
    success: '已成功新建集合，名称为"<%=database%>"',
    validateMSG: '数据库名称为必填项',
  },
  drop_database: {
    title: '删除数据库',
    message: '请确认是否删除数据库"<%=database%>"?',
    success: '已成功删除数据库"<%=database%>"',
    ok: '确认',
    cancel: '取消',
  },
  create_collection: {
    title: '新建集合',
    message: '集合名称',
    success: '已成功新建集合，名称为"<%=table%>"',
    validateMSG: '集合名称为必填项',
  },
  rename_collection: {
    title: '重命名集合',
    message: '新集合名称:',
    success: '已成功重命名集合，新名称为"<%=table%>"',
    warning: '新名称与旧名称一致',
  },
  duplicate_collection: {
    title: '复制集合',
    message: '新集合名称',
    success: '已成功复制集合，新集合为"<%=table%>"',
    warning: '新集合名称与旧名称一致',
  },
  drop_collection: {
    title: '删除集合',
    message: '请确认是否删除集合"<%=table%>"?',
    success: '已成功删除集合"<%=table%>"',
    ok: '确认',
    cancel: '取消',
  },
  delete_all_doc: {
    title: '删除所有记录',
    message: '请确认是否删除集合"<%=table%>"下所有记录?',
    success: '已成功删除集合"<%=table%>"下所有记录',
    ok: '确认',
    cancel: '取消',
  },
  serverConfigDialog: {
    title: '新建服务器连接',
    nameLabel: '服务器名 *',
    valueLabel: '连接字符串 *',
    optionsLabel: '连接可选配置',
  },
  menu: {
    updateDocument: '修改记录',
    removeDocument: '删除记录',
    refresh: '刷新',
    databaseStatistics: '数据库统计数据',
    dropDatabase: '删除数据库',
    insertDocument: '插入记录',
    removeAllDocuments: '删除所有记录',
    renameCollection: '重命名集合',
    duplicateCollection: '复制集合',
    dropCollection: '删除集合',
    createCollection: '新建集合',
    statistics: '统计数据',
    createDatabase: '新建数据库',
    serverStatus: '服务器状态',
    hostInfo: '主机信息',
    mongoDBVersion: 'MongoDB版本',
    showLog: '显示日志',
  },
}
