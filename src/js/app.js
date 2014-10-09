// 点击扩展按钮生成二维码
chrome.tabs.getSelected(function(tab) {
	$('#qrcode').QREncode({
		text: tab.url,
		moduleSize: 3,
		logo: 'images/qrlogo.ico'
	});
});
