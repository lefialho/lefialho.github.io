function copy() {
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
}
copy()

function smoothScroll() {
	const insideLinks = document.querySelectorAll('a[href^="#"]');

	function scrollToContent(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const content = document.querySelector(href);

		content.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
	insideLinks.forEach((link) => {
		link.addEventListener('click', scrollToContent);
	});
}
smoothScroll()