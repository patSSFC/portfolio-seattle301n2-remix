//Object array that holds functions for updating page and dynamic changes
//But why do we need an array? Ask today during lab.
var templateView = {};

templateView.showTeaser = function() {
  $('article .l-copy-wrap').children().filter('.l-copy-contain:nth-of-type(n+2)').hide();
  $('article').on('click', '.reveal-btn', function(ev) {
    ev.preventDefault();
    console.log(this);
    $(this).parent().children().show();
    $(this).hide();
  });
};

templateView.showTabs = function() {
  var $target = $('ul');
  $target.on('click', '.tab', function(ev){
    ev.preventDefault();
    $clickTarget = $(ev.target).attr('href');
    $('section').hide();
    $($clickTarget).fadeIn(700);
  });
  $target.find('li.tab a[href="#intro"]').click();
};

function showMenu() {
  $('.ion-navicon-round').on('click', function() {
      $('.l-nav').slideToggle();
  });
};

$(
  function() {
    templateView.showTabs();
    templateView.showTeaser();
    showMenu();
  }
);
