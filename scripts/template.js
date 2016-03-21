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
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    projects.push(new Project(ele));
  });
};

//TODO: Create functions to take out blocks of code. 
Project.fetchAll = function () {
  // var xhr = new XMLHttpRequest();
  // console.log(xhr);
  var eTag;
  if(localStorage.rawData) {
    console.log('if!');
    // TODO: Figure out logic for testing eTag
    // $.ajax({
    //   url: '../data/test.json',
    //   ifModified: true
    // }).then(function(data, status, xhr){
    //   console.log(status);
    // });
    Project.loadAll(
      JSON.parse(localStorage.rawData)
    );
    templateView.initIndexPage();
  } else {
    console.log('else');
    $.ajax({
      url: '../data/test.json',
    }).done(function(output, status, xhr){
      eTag = xhr.getResponseHeader('etag');
      console.log(eTag);
    });
    $.getJSON('../data/test.json', function( data ) {
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(
        JSON.parse(localStorage.rawData)
      );
      templateView.initIndexPage();
    });
  };
};
