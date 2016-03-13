var projects = [];

function Project(proj) {
  this.title = proj.title,
  this.category = proj.category,
  this.author = proj.author,
  this.screenshot = proj.screenshot,
  this.projectUrl = proj.projectUrl,
  this.authorUrl = proj.authorUrl,
  this.publishedOn = proj.publishedOn,
  this.body = proj.body
}

Project.prototype.toHtml = function () {
  // var $newProject = $('article.project').clone();
  //
  // $newProject.find('figure.l-figure-contain a').attr('href', this.projectUrl);
  // $newProject.find('p.l-copy-contain').html(this.description);

  var $source = $('#projectTemplate').html();
  var template = Handlebars.compile($source);

  return template(this);
};

// Project.prototype.setLink = function () {
//   var $newProject = $('article.project');
//   $newProject.find('figure.l-figure-contain a').attr('href', 'http://www.travellingfan.org').attr('target', '_blank');
// }

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
