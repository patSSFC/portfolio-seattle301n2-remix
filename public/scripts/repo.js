(function(module) {
  var repo = {};

  repo.all = [];

  repo.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/patSSFC/repos',
      headers: {
        'Authorization': process.env.GIT_HUB_TOKEN,
      },
      success: function(data, message, xhr) {
        repo.all = data;
        callback();
      }
    });
  };

  repo.toHtml = function(r) {
    var $source = $('#repoTemplate').html();
    var template = Handlebars.compile($source);
    return template(r);
  };

  repo.initPage = function() {
    repo.all.forEach(function(r) {
      $('#repos').append(repo.toHtml(r));
    });
    $('.repo-details').hide();
  };

  this.repo = repo;
})(window);
