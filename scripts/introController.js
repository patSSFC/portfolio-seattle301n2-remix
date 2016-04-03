(function(module) {
  var introController = {};
  console.log('intro controller...');
  Project.fetchAll(templateView.initIndexPage);

  introController.showIntro = function() {
    $target = $('.tab-content');
    $target.hide();
    $target.filter('#intro').fadeIn();
  };


  module.introController = introController;
})(window);
