(function(module) {
  var repoController = {};

  repoController.showRepos = function() {
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
  };

  this.repoController = repoController;
})(window);
