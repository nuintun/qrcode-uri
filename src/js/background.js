/**
 * 获取初始化标签并显示pageAction按钮
 */
chrome.tabs.getSelected(function (tab){
  chrome.pageAction.show(tab.id);
});

/**
 * 监听标签的选择变更事件并显示pageAction按钮
 */
chrome.tabs.onSelectionChanged.addListener(function (uuid){
  chrome.pageAction.show(uuid);
});

/**
 * 监听标签的状态更新事件并显示pageAction按钮
 */
chrome.tabs.onUpdated.addListener(function (uuid){
  chrome.pageAction.show(uuid);
});