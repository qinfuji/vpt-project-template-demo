const started = false;

let editorId = 0;
//component constructor order
const startIdMap = new Map();
//componentDidMount order
const endIdMap = new Map();
//id列表
const idList = [];

/**
 * 计算节点的父子关系
 */
function walkTree() {}

/**
 * 注册一个节点
 */
export function startPushNode(idNodeInfo) {
  startIdMap.set(idNodeInfo.id, idNodeInfo);
  idList.push(idNodeInfo.id);
  if (started) {
    report();
  }
}

export function endPushNode(idDomInfo) {
  endIdMap.set(idDomInfo.id, idDomInfo);
}

export function removeNode(id) {}

export function report() {
  walkTree();
}

export function receive() {}

/**
 * 启动节点处理
 */
export function start() {
  if (started) {
    return;
  }
  report();
}

export function nextId() {
  return ++editorId;
}
