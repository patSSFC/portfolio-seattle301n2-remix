
(function(module) {
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

  templateView.showMenu = function() {
    var $nav = $('.l-nav');
    $('.ion-navicon-round').on('click', function() {
      $('.l-nav').slideToggle();
    });
  };

  templateView.stats = function() {
    $('#project-count').html(Project.projects.length);
    $('#word-count').html(Project.numWordsAll());
  };

  templateView.initIndexPage = function() {
    Project.projects.forEach(function(a){
      $('#projects').append(a.toHtml());
    });

    templateView.stats();
    templateView.showTabs();
    templateView.showTeaser();
    templateView.showMenu();
    window.onresize = function() {
      //Fixes hamburger resize bug
      if(window.innerWidth > 721) {
        $('.l-nav').css('display', 'block');
      }
    };
  };
  module.templateView = templateView;
})(window);
