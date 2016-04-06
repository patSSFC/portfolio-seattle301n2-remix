(function(module) {
  console.log('projects controller...');
  var projectsController = {};

  projectsController.showProjects = function() {
    $target = $('.tab-content');
    $target.hide();
    $target.filter('#projects').fadeIn();
  };

  module.projectsController = projectsController;

}(window));
