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

    var elem = $("#elemChoose");
    var items = elem.children();

    var outer = $('#outerChoose');
    var actualWidth = 0;

    var updateUI = function() {
        width = outer.outerWidth(true);
        $.each($('#innerChoose >'), function(i, item) {
            actualWidth += $(item).outerWidth(true);
        });

        if (actualWidth <= width) {
            setInvisible($('#right-button-choose'));
        }
    };
    updateUI();



    $('#left-button-choose').click(function() {
        setVisible($('#right-button-choose'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos - (width / 1.5)
        }, 800, function() {
            if ($('#outerChoose').scrollLeft() <= 0) {
                setInvisible($('#left-button-choose'));
            }
        });

        return false;
    });

    $('#right-button-choose').click(function() {
        setVisible($('#left-button-choose'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos + (width / 1.5)
        }, 800, function() {
            console.log("leftPos: " + leftPos);
            if ($('#outerChoose').scrollLeft() >= (actualWidth - outer.outerWidth(true)) * 0.95) {
                setInvisible($('#right-button-choose'));
            }
        });

        return false;
    });

    $(window).resize(function() {
        updateUI();
    });
});

var leftBtn = document.getElementById('left-button-choose');
var rightBtn = document.getElementById('right-button-choose');

leftBtn.addEventListener('click', decreasePageNumber);
rightBtn.addEventListener('click', increasePageNumber);

function increasePageNumber() {
    var currentPage = document.getElementById('currentPageChoose');

    currentPage.innerHTML = "02";
}

function decreasePageNumber() {
    var currentPage = document.getElementById('currentPageChoose');

    currentPage.innerHTML = "01";
}