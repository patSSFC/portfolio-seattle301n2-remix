(function(module) {
  var repo = {};

  repo.all = [];

  repo.requestRepos = function() {
    $.ajax({
      url: 'https://api.github.com/users/patSSFC/repos',
      headers: {
        'Authorization': authToken,
      },
      success: function(data, message, xhr) {
        // console.log(data);
        console.log('yo!');
        localStorage.data = data;
        repo.all = data;
        repo.all.forEach(function(r){
          console.log(r);
          $('#repos').append(repo.toHtml(r));
        });
      }
    });
  };

  repo.toHtml = function(r) {
    var $source = $('#repoTemplate').html();
    var template = Handlebars.compile($source);
    return template(r);
  };

  repo.initPage = function() {
    console.log('inside initPage ' + repo.all);
    repo.all.forEach = function(r) {
      console.log('inside loop');
      console.log(r);
      $('#repos').append(repo.toHtml(r));
    };
  };

  // repo.showRepos = function() {
  //   repo.all.forEach = function(r) {
  //     console.log(r.language);
  //   };
  // };

  this.repo = repo;
})(window);
