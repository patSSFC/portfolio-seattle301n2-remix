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
        repo.all = data;
      }
    });
  };

  

  this.repo = repo;
})(window);
