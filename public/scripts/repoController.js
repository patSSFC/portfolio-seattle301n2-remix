(function(module) {
  var repoController = {};

  repo.requestRepos(repo.initPage);
  repoController.showRepos = function() {
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
  };

  repoController.showTeaser = function() {

  };

  module.repoController = repoController;
})(window);
