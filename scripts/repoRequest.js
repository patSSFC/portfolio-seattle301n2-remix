(function(module) {
  var repo = {};

  repo.requestRepos = function() {
    $.ajax({
      url: 'https://api.github.com/users/patSSFC/repos',
      headers: {
        'Authorization': authToken,
      },
      success: function(data, message, xhr) {
        console.log(data);
      }
    });
  };

})(window);
