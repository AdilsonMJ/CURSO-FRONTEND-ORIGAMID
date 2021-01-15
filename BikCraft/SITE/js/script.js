if (window.SimpleSlide) {

	new SimpleSlide({
		slide: "quote", // nome do atributo data-slide="principal"
		time: 5000 // tempo de transição dos slides
	});

	new SimpleSlide({
		slide: "portfolio",
		auto: false, // se o slide deve passar automaticamente
		time: 5000,
		nav: true
	});
}

new SimpleAnime();