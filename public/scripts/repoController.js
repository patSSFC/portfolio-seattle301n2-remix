(function(module) {
  var repoController = {};

  repo.requestRepos(repo.initPage);
  repoController.showRepos = function() {
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
  };

  repoController.showTeaser = function() {
    $target = $('article.repo');
    console.log($target.filter('.repo-details'));
    $target.filter('.repo-details').slideUp();
    $target.on('click', 'h2.repo-name', function() {
      $(this).siblings().slideToggle();
    });
  };

  repoController.showTeaser();

  module.repoController = repoController;
})(window);
