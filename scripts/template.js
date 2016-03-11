$(function () {
  var projects = [];

  function Project(proj) {
    this.screenshotUrl = proj.screenshotUrl;
    this.screenAlt = proj.screenAlt;
    this.description = proj.description;
    this.projectUrl = proj.projectUrl;
    this.publishedOn = proj.publishedOn;
  }

  Project.prototype.toHtml = function () {
    var $newProject = $('article.project').clone();

    $newProject.find('figure.l-figure-contain a').attr('href', this.projectUrl);
    $newProject.find('p.l-copy-contain').html(this.description);

  };

  function setLink() {
    var $newProject = $('article.project');
    $newProject.find('figure.l-figure-contain a').attr('href', 'http://www.travellingfan.org').attr('target', '_blank');
  }

  setLink();

  var $projects = $('#projects');
  $projects.append((new Project(proj)).toHtml());
});
