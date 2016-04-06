console.log('yo!!');

page('/', introController.showIntro);
page('/projects', projectsController.showProjects);
page('/contact', contactController.showContact);
page('/repos', repoController.showRepos);

page();
