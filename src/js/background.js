chrome.tabs.onUpdated.addListener(function (id){
    chrome.pageAction.show(id);
});