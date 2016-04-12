(function(module) {
  Project.projects = [];

  function Project(proj) {
    for (var prop in proj) {
      if(proj.hasOwnProperty(prop)) {
        this[prop] = proj[prop];
      }
    }
  }

  Project.prototype.toHtml = function () {
    var $source = $('#projectTemplate').html();
    var template = Handlebars.compile($source);
    // console.log(this);
    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });


    Project.projects = rawData.map(function(p) {
      return new Project(p);
    });
  };

  Project.numWordsAll = function() {
    return Project.projects.map(function(proj) {
      // Get the total number of words in this article
      return proj.body.split(' ').length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  Project.getXhr = function(path, localVar) {
    $.ajax({
      url: path,
    })
    .done(function(output, status, xhr){
      console.log('inside done' + localVar);
      localStorage.setItem(localVar, xhr.getResponseHeader('Last-Modified'));
    });
  };

  Project.fetchAll = function (next) {
    var lastModNew = 'lastModNew';
    var lastMod = 'lastMod';
    Project.getXhr('../data/test.json', lastModNew);
    if(localStorage.rawData && localStorage.lastMod === localStorage.lastModNew) {
      console.log('same old data.');
      Project.loadAll(
        JSON.parse(localStorage.rawData)
      );
    } else {
      console.log('making new request...');
      Project.getXhr('../data/test.json', lastMod);
      $.getJSON('../data/test.json', function( data ) {
        console.log('getting JSON...');
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(
          JSON.parse(localStorage.rawData)
        );
      });
    };
    next();
  };

  module.Project = Project;
})(window);
