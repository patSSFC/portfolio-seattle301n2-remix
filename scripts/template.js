var projects = [];

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

  return template(this);
};

Project.loadAll = function(rawData) {
  // console.log('raw data ' + typeof(rawData));
  // var x = JSON.parse(rawData);
  // console.log(x);
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    projects.push(new Project(ele));
  });
};

Project.fetchAll = function () {
  if(localStorage.rawData) {
    console.log('yuuup!');
  } else {
    console.log('nope.');
    // $.ajax({
    //   url: 'scripts/projectArticles.js',
    //   success: function(data) {
    //     // console.log(typeof(data));
    //     localStorage.rawData = JSON.parse(data);
    //     console.log(typeof(localStorage.rawData));
    //     // console.log(typeof(localStorage.rawData));
    //     // console.log('Type of ' + typeof(localStorage.rawData));
    //     Project.loadAll(localStorage.rawData);
    //     templateView.initIndexPage();
    //   }
    // });

    $.getJSON('../data/test.json', function( data ) {
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(
        JSON.parse(localStorage.rawData)
      );
      templateView.initIndexPage();
    });
    // console.log('done!');
  };
};
