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

//TODO: Create functions to take out blocks of code,
//particularly the $.ajax blocks that check xhr
Project.fetchAll = function () {
  $.ajax({
    url: '../data/test.json',
  })
  .done(function(output, status, xhr){
    localStorage.lastModNew = xhr.getResponseHeader('Last-Modified');
  });
  if(localStorage.rawData && localStorage.lastMod === localStorage.lastModNew) {
    console.log('same old data.');
    Project.loadAll(
      JSON.parse(localStorage.rawData)
    );
    templateView.initIndexPage();
  } else {
    console.log('making new request...');
    $.ajax({
      url: '../data/test.json',
    })
    .done(function(output, status, xhr){
      // localStorage.setItem('eTag', xhr.getResponseHeader('etag'));
      localStorage.lastMod = xhr.getResponseHeader('Last-Modified');
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
