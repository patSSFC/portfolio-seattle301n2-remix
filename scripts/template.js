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

Project.fetchAll = function () {
  if(localStorage.rawData) {
    console.log('yuuup!');
  } else {
    console.log('nope.');
    $.getJSON('scripts/projectArticles.json', function(data) {
      console.log('fire!');
      localStorage.rawData = JSON.stringify(data);
    });
  }
};
