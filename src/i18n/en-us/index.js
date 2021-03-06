// This is just an example,
// so you can safely delete all default props below

export default {
  // failed: 'Action failed',
  // success: 'Action was successful',
  search: 'search',
  sec: 'sec',
  detail: 'Detail',
  ok: 'OK',
  cancel: 'cancel',
  create: 'create',
  run: 'run',
  error: 'Error',
  pageSizeLabel: 'Records per page:',
  requestJsonParseTip: 'Please type something that can JSON parse.',
  requestTip: 'Please type something.',
  databaseStatistics: 'Database Statistics',
  serverStatus: 'Server Status',
  documents: 'Documents:',
  storage: 'Storage:',
  key: 'Key',
  value: 'Value',
  type: 'Type',
  field: 'field',
  record: 'record',
  modify: 'modify',
  save: 'save',
  document_insert_success: 'Document inserted successfully.',
  document_update_success: 'Document(<%=id%>) updated successfully.',
  document_delete_success: 'Document(<%=id%>) deleted successfully.',
  create_database: {
    title: 'Create Database',
    message: 'Database Name:',
    success: 'Create database success. name is "<%=database%>".',
    validateMSG: 'Database Name is required',
  },
  drop_database: {
    title: 'Drop Database',
    message: 'Are you sure drop "<%=database%>" database?',
    success: 'Drop database "<%=database%>" success.',
    ok: 'Confirm',
    cancel: 'Cancel',
  },
  create_collection: {
    title: 'Create Collection',
    message: 'Collection Name:',
    success: 'Create collection success. name is "<%=table%>".',
    validateMSG: 'Collection Name is required',
  },
  rename_collection: {
    title: 'Rename Collection',
    message: 'New Collection Name:',
    success: 'Rename collection success. New name is "<%=table%>".',
    warning: 'The new name is the same as the old one.',
  },
  duplicate_collection: {
    title: 'Duplicate Collection',
    message: 'New Collection Name:',
    success: 'Duplicate collection success. New collection name is "<%=table%>".',
    warning: 'The new name is the same as the old one.',
  },
  drop_collection: {
    title: 'Drop Collection',
    message: 'Are you sure drop "<%=table%>" collection?',
    success: 'Drop collection "<%=table%>" success.',
    ok: 'Confirm',
    cancel: 'Cancel',
  },
  delete_all_doc: {
    title: 'Remove All Document',
    message: 'Are you sure remove "<%=table%>" all document?',
    success: 'Remove "<%=table%>" all document success.',
    ok: 'Confirm',
    cancel: 'Cancel',
  },
  serverConfigDialog: {
    title: 'Create new server connection',
    nameLabel: 'Server name *',
    valueLabel: 'Connection string *',
    optionsLabel: 'Connection options',
  },
  menu: {
    refresh: 'Refresh',
    insertDocument: 'Insert Documents',
    updateDocument: 'Update Document',
    removeDocument: 'Remove Document',
    removeAllDocuments: 'Remove All Documents',
    duplicateCollection: 'Duplicate Collection',
    dropCollection: 'Drop Collection',
    renameCollection: 'Rename Collection',
    createCollection: 'Create Collection',
    statistics: 'Statistics',
    createDatabase: 'Create Database',
    dropDatabase: 'Drop Database',
    databaseStatistics: 'Database Statistics',
    serverStatus: 'Server Status',
    hostInfo: 'Host Info',
    mongoDBVersion: 'MongoDB Version',
    showLog: 'Show Log',
  },
}
