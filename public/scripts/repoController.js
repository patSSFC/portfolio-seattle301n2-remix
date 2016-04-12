(function(module) {
  var repoController = {};

  repo.requestRepos(repo.initPage);
  repoController.showRepos = function() {
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
    $('.repo-details').hide();
  };

  repoController.showTeaser = function() {

    $('#repos').on('click', '.repo-name', function() {
      $(this).siblings().slideToggle();
    });
  };

  repoController.showTeaser();

  module.repoController = repoController;
})(window);
