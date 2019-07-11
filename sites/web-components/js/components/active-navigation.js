(function activateNavigation(win, doc) {
	const activateNav = doc.querySelector('[data-nav="activate-nav"]');
  const contents = doc.querySelectorAll('[data-activate="content"]'); 

	if (contents.length) {
		contents.forEach((topic) => {
			const listItems = doc.createElement('li');
			const links = doc.createElement('a');
			const contentsId = topic.getAttribute('id');
			const contentsTitle = topic.getAttribute('title');

			links.innerText = contentsTitle;
			links.setAttribute('data-menu', 'activeLink');
			links.setAttribute('href', '#' + contentsId);

			listItems.appendChild(links);
			activateNav.appendChild(listItems);
		})

		window.addEventListener('scroll', activeScroll);

		function activeScroll() {
			contents.forEach((content) => {
				const contentStart = content.getBoundingClientRect().top - parseInt(window.getComputedStyle(content).getPropertyValue('margin-top'));
				const contentMarginTop = content.offsetHeight ;
				const contentEnd = contentStart + contentMarginTop;
				const contentId = content.getAttribute('id');
				const itemMenu = doc.querySelector('[data-menu="activeLink"][href="#' + contentId + '"]');
				
				console.log()

				if (content.scrollTop > contentStart && content.scrollTop < contentEnd) {
					itemMenu.classList.add('active')
				} else {
					itemMenu.classList.remove('active')
				}
			})
		}

		const selectLinks = doc.querySelectorAll('[data-menu="activeLink"]');
    
		selectLinks.forEach((link) => {
			link.addEventListener('click', activeLinks);
		})

		function activeLinks(e) {
			selectLinks.forEach((link) => {
				link.classList.remove('active')
			})
			this.classList.add('active')
		}
	}
})(window, document);

