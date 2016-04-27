(function(module) {
  var repoController = {};

  repoController.showRepos = function(ctx, next) {
    // repo.requestRepos(repo.initPage);
    next();
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
