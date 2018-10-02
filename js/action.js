
var modalPopup = {
	toggle: function(accordion){
		accordion.forEach(function(elements) {
		 elements.addEventListener('click', function(evt) {
			var toggler = evt.currentTarget.children[1].classList.toggle('open');

			var rotIcon = evt.currentTarget.children[0].children[0].firstChild.classList.toggle('rotate');
		 });
	 });
	},
   display: function(name){
	   console.log(`${name} says hellow`);
	   console.log(this);
   }
}

var module = modalPopup;

(function(w, d, m){
	/* Select accordion button class */
	const accordion =document.querySelectorAll('.accordion-btn');

	/* Toggle items */
	m.toggle(accordion);
	m.display('Amenemope');
})(window, document, module);





