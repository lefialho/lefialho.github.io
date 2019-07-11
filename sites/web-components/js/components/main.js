(function copy(win, doc) {
	const clipboard = new ClipboardJS('.btn-copy');
	clipboard.on('success', function (e) {
		console.info('Action:', e.action);
		alert('Código copiado', e.text);
		console.info('Trigger:', e.trigger);
		e.clearSelection();
	});

	clipboard.on('error', function (e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
	});
})(window, document);

(function smoothScroll(win, doc) {
	const insideLinks = doc.querySelectorAll('a[href^="#"]');

	function scrollToContent(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const content = doc.querySelector(href);

		content.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
	insideLinks.forEach((link) => {
		link.addEventListener('click', scrollToContent);
	});
})(window, document);