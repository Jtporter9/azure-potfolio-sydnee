angular.module('portfolio').service('mainService', function($http) {


  this.headShot = {
    string: "http://sydsnews.weebly.com/uploads/7/0/3/1/70315543/8783822.jpg?1452680078"
  };

  this.intro = {
    string: "People and their experiences inspire me. Each person has a story to tell and a voice to be heard. My goal is to be that voice to the world as well as an ear to its people.  My passion for story-telling started in high school and has grown even more as I have studied and worked as a reporter. I served a LDS mission in Paraguay and Argentina where I learned to speak Spanish fluently and developed a love for other cultures. I graduated  from BYU with a degree in Broadcast Journalism and Spanish. My long-term goal is to become an International Reporter.  Take a look at my portfolio below and don’t hesitate to contact me. I would love to tell you more about my personal story and how I plan to write it."
  };

  this.projects = [
    {
    number: 2,
    name: "Colliding beliefs",
    link: "https://player.vimeo.com/video/161518438",
    picture: "./images/Colliding.png"
    },
    {
    number: 3,
    name: "Change for change Sydnee Gunter",
    link: "https://player.vimeo.com/video/154638207",
    picture: "./images/change.png"
    },
]

  this.bioTitle = {
    string: "Finding My Voice"
  };

  this.p1 = {
    string: "This is how I found my voice, and my passion telling stories",
    link:"https://docs.google.com/document/d/18YPd3QMjvvs91iPfRJF8WLl0xigrLU82HyYQZKyAbHg/edit"
  };

  this.p2 = {
    string: "* Daily universe article written by yours truly",
    link:"http://universe.byu.edu/2013/05/09/becky-mackintosh-and-kristi-rodgerson-encouraging-praising-and-providing-help-for-our-teenagers/"
  };

  this.p3 = {
    string:"* Local business story",
    link:"https://docs.google.com/document/d/1dJcmjkgEOpXbUGh_SVgkJJbodAUqrtFGCXwamF9KCHk/edit"
  }

  this.p4 = {
    string:"* Local cuisine",
    link:"https://docs.google.com/document/d/1hyxZVM8DZDoUfj2_Td2vMfVAwuPPcnOJOpS7YeqWRCk/edit"
  };

  this.p5 = {
    string: "* Stories untold",
    link:"https://docs.google.com/document/d/1BAQ51GInkIurHJb-fvLJac2myAIXDlHj8j2gcoGqHb0/edit"
  };

});
