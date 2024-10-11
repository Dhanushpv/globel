// ---------Responsive-navbar-active-animation-----------
function test() {
    const tabsNewAnim = $('#navbarSupportedContent');
    const activeItemNewAnim = tabsNewAnim.find('.active');
    
    if (activeItemNewAnim.length) { // Ensure there's an active item
        const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        const itemPosNewAnim = activeItemNewAnim.position();
    
        $(".hori-selector").css({
            top: itemPosNewAnim.top + "px",
            left: itemPosNewAnim.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px"
        });
    }
}

$(document).ready(function() {
    test(); // Run on page load

    // When clicking a navbar item
    $("#navbarSupportedContent").on("click", "li", function(e) {
        // Remove active class from all and add it to the clicked item
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        
        // Update the position of the horizontal selector
        const activeWidthNewAnimHeight = $(this).innerHeight();
        const activeWidthNewAnimWidth = $(this).innerWidth();
        const itemPosNewAnim = $(this).position();

        $(".hori-selector").css({
            top: itemPosNewAnim.top + "px",
            left: itemPosNewAnim.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px"
        });
    });
});

$(window).on('resize', function() {
    setTimeout(test, 500); // Run on window resize
});

$(".navbar-toggler").click(function() {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(test, 100); // Adjust selector positioning after toggle
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function($) {
    let path = window.location.pathname.split("/").pop();

    if (path === '') {
        path = 'index.html';
    }

    const target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass('active');
    test(); // Update the horizontal selector position
});


// function([string1, string2],target id,[color1,color2])    
consoleText(['We are the team that creates and constructs', ], 'text',[]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

new WOW().init();