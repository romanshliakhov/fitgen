// Feedbacks Slider
$(document).ready(function() {
    if ($('.feedbacks__slider').length) { 
        $('.feedbacks__slider').slick({
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: true,
            speed: 1000,
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

// Before and After 
$(document).ready(function() {
    // Initialize the slider
    $('.beforeAfter').beforeAfter({
        movable: true,
        clickMove: true,
        position: 90,
        separatorColor: '#fafafa',
        bulletColor: '#fafafa',
        onMoveStart: function (e) {
          console.log(event.target);
        },
        onMoving: function () {
          console.log(event.target);
        },
        onMoveEnd: function () {
          console.log(event.target);
        },
    });
});

// Scroll to block
$(document).ready(function() {
    $('.anchor').click(function(event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        var targetId = $(this).attr('href'); // Получаем значение href (id цели)
        var targetOffset = $(targetId).offset().top - 10; // Положение цели минус 15px отступа

        // Закрываем мобильное меню при клике на ссылку
        $('.burger').removeClass('active');
        $('body').removeClass('dis-scroll');
        $('.header__mobile').removeClass('active');

        // Плавный скролл к целевому элементу
        $('html, body').animate({
            scrollTop: targetOffset
        }, 800); // 800 миллисекунд для анимации
    });
});

// Burger menu
$(document).ready(function() {
    // Открытие и закрытие меню по клику на бургер
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('body').toggleClass('dis-scroll');
        $('.header__mobile').toggleClass('active');
    });

    // Закрытие меню при клике вне области header
    $(document).click(function(event) {
        // Проверяем, был ли клик не по header или бургер-кнопке
        if (!$(event.target).closest('.header__mobile, .burger').length) {
            $('.burger').removeClass('active');
            $('body').removeClass('dis-scroll');
            $('.header__mobile').removeClass('active');
        }
    });
});





