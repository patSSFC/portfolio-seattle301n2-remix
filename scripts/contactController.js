(function(module) {
  contactController = {};

  contactController.showContact = function() {
    $target = $('.tab-content');
    $target.hide();
    $target.filter('#contact').fadeIn();
  };

}(window));
