// Feedbacks Slider
$(document).ready(function() {
    if ($('.feedbacks__slider').length) { 
        $('.feedbacks__slider').slick({
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: true,
            speed: 2000,
            prevArrow: '.feedbacks__control--prev',
            nextArrow: '.feedbacks__control--next',
        });
    }
});


// Сountdown timer
$(document).ready(function() {
    $('.promo__counter').each(function() {
        var $counter = $(this);
        var deadline = new Date($counter.data('deadline')).getTime();

        if (!deadline) return;

        function updateCounter() {
            var now = new Date().getTime();
            var timeLeft = deadline - now;

            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((timeLeft % (1000 * 60)) / 1000);

            $counter.find('.days').text(days < 10 ? '0' + days : days);
            $counter.find('.hours').text(hours < 10 ? '0' + hours : hours);
            $counter.find('.mins').text(mins < 10 ? '0' + mins : mins);
            $counter.find('.sec').text(sec < 10 ? '0' + sec : sec);

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                $counter.find('.days, .hours, .mins, .sec').text('00');
            }
        }

        updateCounter();
        var timerInterval = setInterval(updateCounter, 1000);
    });
});

