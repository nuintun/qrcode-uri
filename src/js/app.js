var QRBox = $('#qr-box');

chrome.tabs.getSelected(function(tab) {
	QRBox.QREncode({
		text: tab.url,
		moduleSize: 3,
		logo: 'images/qrlogo.ico',
		error: function (e){
			var error = $('#error'),
				message = e.errorCode === 2
					? '链接地址过长，超过了二维码的存储上限，<br/>请使用短链接服务生成短链接后再生成二维码！'
					: e.message;

			QRBox.hide();
			error.html(message).show();
		}
	});
});
