(function(module) {
  var repo = {};

  repo.all = [];

  repo.requestRepos = function(callback) {
    console.log(authToken);
    $.ajax({
      url: 'https://api.github.com/users/patSSFC/repos',
      headers: {
        'Authorization': authToken,
      },
      success: function(data, message, xhr) {
        localStorage.data = data;
        repo.all = data;
        // repo.all.forEach(function(r){
        //   $('#repos').append(repo.toHtml(r));
        // });
        // repo.initPage();
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
  };

  // repo.showRepos = function() {
  //   repo.all.forEach = function(r) {
  //     console.log(r.language);
  //   };
  // };

  this.repo = repo;
})(window);
