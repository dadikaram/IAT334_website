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

    var elem = $("#elemFeature");
    var items = elem.children();

    var outer = $('#outerFeature');
    var actualWidth = 0;

    var updateUI = function() {
        width = outer.outerWidth(true);
        $.each($('#innerChoose >'), function(i, item) {
            actualWidth += $(item).outerWidth(true);
        });

        if (actualWidth <= width) {
            setInvisible($('#right-button-feature'));
        }
    };
    updateUI();



    $('#left-button-feature').click(function() {
        setVisible($('#right-button-feature'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos - (width / 1.5)
        }, 800, function() {
            if ($('#outerFeature').scrollLeft() <= 0) {
                setInvisible($('#left-button-feature'));
            }
        });

        return false;
    });

    $('#right-button-feature').click(function() {
        setVisible($('#left-button-feature'));
        var leftPos = outer.scrollLeft();
        outer.animate({
            scrollLeft: leftPos + (width / 1.5)
        }, 800, function() {
            console.log("leftPos: " + leftPos);
            if ($('#outerFeature').scrollLeft() >= (actualWidth - outer.outerWidth(true)) * 0.95) {
                setInvisible($('#right-button-feature'));
            }
        });

        return false;
    });

    $(window).resize(function() {
        updateUI();
    });
});

var leftBtn = document.getElementById('left-button-feature');
var rightBtn = document.getElementById('right-button-feature');

leftBtn.addEventListener('click', decreasePageNumber);
rightBtn.addEventListener('click', increasePageNumber);

function increasePageNumber() {
    var currentPage = document.getElementById('currentPageFeature');

    currentPage.innerHTML = "02";
}

function decreasePageNumber() {
    var currentPage = document.getElementById('currentPageFeature');

    currentPage.innerHTML = "01";
}