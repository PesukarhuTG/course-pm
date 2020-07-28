var lessonTitles = document.querySelectorAll('.lesson__title');

lessonTitles.forEach(function(lessonTitle) {
    lessonTitle.addEventListener('click', setClass);

    function setClass() {
        if (lessonTitle.closest('.lesson').classList.contains('active')) {
            lessonTitle.closest('.lesson').classList.remove('active');
        } else {
            lessonTitle.closest('.lesson').classList.add('active');
        }
    };
})

/* Jquery */

/*$('.lesson__title').on('click', function(){
	if($(this).closest('.lesson').hasClass('active')) {
		$(this).closest('.lesson').removeClass('active');
	}
	else {
		$('.lesson').removeClass('active');
		$(this).closest('.lesson').addClass('active');
	}
});*/