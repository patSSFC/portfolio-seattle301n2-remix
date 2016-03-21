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
  $.ajax({
    url: '../data/test.json',
  })
  .done(function(output, status, xhr){
    localStorage.eTagNew = xhr.getResponseHeader('Last-Modified');
  });
  if(localStorage.rawData && localStorage.eTag === localStorage.eTagNew) {
    console.log('if!');
    console.log('same old.');
    Project.loadAll(
      JSON.parse(localStorage.rawData)
    );
    templateView.initIndexPage();
  } else {
    console.log('else');
    $.ajax({
      url: '../data/test.json',
    })
    .done(function(output, status, xhr){
      // localStorage.setItem('eTag', xhr.getResponseHeader('etag'));
      localStorage.eTag = xhr.getResponseHeader('Last-Modified');
      console.log(localStorage.eTag);
    });
    $.getJSON('../data/test.json', function( data ) {
      console.log('getting JSON...');
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(
        JSON.parse(localStorage.rawData)
      );
      templateView.initIndexPage();
    });
  };
};
