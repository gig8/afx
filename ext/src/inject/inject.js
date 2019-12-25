// if jquery
// $('a[href^=/accounting/payable_invoices/]').css('color','red');
function openInvoices() {
	const invoices = document.querySelectorAll("a[href^='/accounting/payable_invoices/']");
	invoices.forEach(function(invoice) {
		window.open(invoice.href);
	});
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		openInvoices();
	}
	}, 10);
});
