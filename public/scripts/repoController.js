(function(module) {
  var repoController = {};

  repoController.showRepos = function() {
    repo.requestRepos(repo.initPage);
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
    $('#repos').empty();
  };

  repoController.showTeaser = function() {
    $('#repos').on('click', '.repo-name', function() {
      $(this).siblings().slideToggle();
    });
  };

  repoController.showTeaser();

  module.repoController = repoController;
})(window);
