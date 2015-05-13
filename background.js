// Workaround to properly show up page action icon
// See http://stackoverflow.com/a/15921382/1030960
chrome.extension.onMessage.addListener(function(message, sender) {
    if (message && message.type === 'showPageAction') {
        var tab = sender.tab;
        chrome.pageAction.show(tab.id);
        chrome.pageAction.setTitle({
            tabId: tab.id,
            title: 'url=' + tab.url
        });
    }
});
