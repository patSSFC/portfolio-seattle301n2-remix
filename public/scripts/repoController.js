(function(module) {
  var repoController = {};

  repoController.showRepos = function() {
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
  };

  module.repoController = repoController;
})(window);
