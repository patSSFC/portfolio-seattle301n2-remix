(function(module) {
  var repoController = {};

  repo.requestRepos(repo.initPage);
  repoController.showRepos = function() {
    $target = $('.tab-content');
    $target.hide().filter('#repos').show();
  };

  repoController.showTeaser = function() {
    console.log($('#repos').find('.repo').children());

    $('#repos').on('click', '.repo-name', function() {
      $(this).siblings().slideToggle();
    });
  };

  repoController.showTeaser();

  module.repoController = repoController;
})(window);
