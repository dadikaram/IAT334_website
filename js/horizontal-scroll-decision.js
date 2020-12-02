var width;

$(function() {
    var print = function(msg) {
        alert(msg);
    };

    var setInvisible = function(elem) {
        if (elem.hasClass('active')) {
            elem.removeClass("active");
        }
    };
    var setVisible = function(elem) {
        if (!elem.hasClass('active')) {
            elem.addClass("active");
        }
    };

    var elem = $("#elemDecision");
    var items = elem.children();

    var outer = $('#outerDecision');
    var actualWidth = 0;

    var updateUI = function() {
        width = outer.outerWidth(true);
        $.each($('#innerChoose >'), function(i, item) {
            actualWidth += $(item).outerWidth(true);
        });

        if (actualWidth <= width) {
            setInvisible($('#right-button-decision'));
        }
    };
    updateUI();



    $('#left-button-decision').click(function() {
        setVisible($('#right-button-decision'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos - (width / 1.5)
        }, 800, function() {
            if ($('#outerDecision').scrollLeft() <= 0) {
                setInvisible($('#left-button-decision'));
            }
        });

        return false;
    });

    $('#right-button-decision').click(function() {
        setVisible($('#left-button-decision'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos + (width / 1.5)
        }, 800, function() {
            console.log("leftPos: " + leftPos);
            if ($('#outerDecision').scrollLeft() >= (actualWidth - outer.outerWidth(true)) * 0.95) {
                setInvisible($('#right-button-decision'));
            }
        });

        return false;
    });

    $(window).resize(function() {
        updateUI();
    });
});

var leftBtn = document.getElementById('left-button-decision');
var rightBtn = document.getElementById('right-button-decision');

leftBtn.addEventListener('click', decreasePageNumber);
rightBtn.addEventListener('click', increasePageNumber);

function increasePageNumber() {
    var currentPage = document.getElementById('currentPageDecision');

    currentPage.innerHTML = "02";
}

function decreasePageNumber() {
    var currentPage = document.getElementById('currentPageDecision');

    currentPage.innerHTML = "01";
}