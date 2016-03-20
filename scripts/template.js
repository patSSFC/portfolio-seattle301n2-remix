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
    $.getJSON('data/test.json')
      .then( function(data) {
        console.log('HERE');
        data.each(function(article) {
          console.log(article);
        });
        console.log(error);
        localStorage.rawData = JSON.stringify(data);
    })
      .fail( function(data){
        console.log(data);
        console.log('fail');
    });
    // $.ajax({url: 'data/projectArticles.json', success: function(data) {
    //   $.each(console.log('Hello'));
    //   // console.log('sup');
    //   // localStorage.rawData = JSON.stringify(data);
    // }});

  }
};
