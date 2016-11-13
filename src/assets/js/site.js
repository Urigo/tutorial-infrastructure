document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
	var navLinks = document.querySelector('.nav-links');

	var dropdown = document.querySelector('.tutorials-dropdown');
	var dropdownContent = document.querySelector('.dropdown-content');

	navToggle.addEventListener('click', function() {
		navLinks.classList.toggle('visible');
	});

	dropdown.addEventListener('click', function() {
		dropdownContent.classList.toggle('visible');
	});
}, false);
