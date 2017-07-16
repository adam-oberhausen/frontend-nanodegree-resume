var work = {
  jobs: [
    {
      employer: "DaySmart Software",
      title: "Operations Manager",
      location: "Ann Arbor, MI",
      dates: "Jan 16 - Present",
      url: "https://daysmart.com/",
      description: "As Operations Manager I am primarily responsible for the continued improvement of the operational systems, processes and policies in support of the organizational mission. Specifically, support better management, management reporting, information flow, business process and organizational planning.  My primary objective is to increase the effectiveness and efficiency of all departments (Software Development, Product Management, Infrastructure, Marketing, Sales, Customer Success and Support), through improvements to each function as well as coordination and communication between business functions."
    },
    {
      employer: "DaySmart Software",
      title: "Infrastructure Manager",
      location: "Ann Arbor, MI",
      dates: "Feb 15 - Present",
      url: "https://daysmart.com/",
      description: "Responsible for architecting and maintaining a highly available, elastic, fault tolerent deployment of all production services in DaySmart's AWS environment.  This is done by employing agile/scrum methodology where I act as product owner for a scrum team that consists of DevOps engineer(s), DBA(s), QA, System Administrator(s) as well as independent contractors.  Additionally, I am responsible for all information technology infrastructure and shared services, including all data center and disaster recovery sites, physical and virtual servers, storage and backup infrastructure, desktop hardware, server and desktop operating systems, wireless, local area and wide are networks (LAN/WAN), and SQL databases."
    },
    {
      employer: "DaySmart Software",
      title: "Software Development Manager",
      location: "Wixom, MI",
      dates: "Aug 10 - Feb 15",
      url: "https://daysmart.com/",
      description: "As manager of the Software Development team I oversee the development and release of all new and existing products. During my tenure I was responsible for implementing agile/scrum in our development cycle in which I both manage and actively participate in. DaySmart supports products on a wide variety of platforms which include Windows, Web, iPhone, and Android. It is my responsibility to lead and organize our various scrum teams, assess product feedback, prioritize backlogs, provide a stable production environment, and increase the productivity of the Software Development team."
    },
    {
      employer: "DaySmart Software",
      title: ".Net Software Developer",
      location: "Brighton, MI",
      dates: "Jul 06 - Aug 10",
      url: "https://daysmart.com/",
      description: "Software development for both in-house and production applications. This entails a wide variety of assignments ranging from developing design requirements, programming, researching, testing, working with customers, and etc."
    }
  ]
};

var projects = {
  projects: [
    {
      title: "Responsive Design",
      dates: "May 2017",
      description: "A website that demonstrates responsive design patterns using the Bootstrap framework, HTML, and CSS.  This project was part of the Udacity Front-End Web Developer Nanodegree program.",
      images: [""],
      url: "https://github.com/adam-oberhausen/portfolio-site"
    },
    {
      title: "CI/CD with Visual Studio Team Services, Jenkins and AWS",
      dates: "January 2017",
      description: "This project builds upon the previous project where we migrated DaySmart's production infrastructure to AWS US-East Region. This was a multi-phased project with the objective of creating a continous integration/continuous delivery pipeline using AWS CloudFormation and Jenkins.  The successful completion of this project resulted in a automated system where upon check-in of new code, DaySmart's web applications are automatically deployed and tested in development and staging environments. Production deployments are coordinated with a single button click from within the Jenkins interface.",
      images: [""],
      url: "https://aws.amazon.com/getting-started/projects/set-up-ci-cd-pipeline/"
    },
    {
      title: "Migrate DaySmart Web Applications & Databases From On-Premise to AWS",
      dates: "April 2015",
      description: "For this project, I switched roles within the organization in order to head up the initiative of migrating our on-premise infrastructure to AWS US-East Region.  This was a multi-phased project that entailed making our applications highly available, loosely coupled, and auto-scaling. An additional component of the project was to migrate our on-premise SQL database envrionment into AWS Relational Database Service (RDS).  The sucessful completion of this project resulted in service availability > 99.99% uptime for all production infrastructure and a significant cost savings to the business.",
      images: [""],
      url: "https://aws.amazon.com/"
    },
    {
      title: "Salon Iris iPhone App",
      dates: "2012",
      description: "An iPhone app written in Objective-C that allows users of DaySmart's desktop scheduling application to connect remotely to their on-premise SQL database from their Apple device (iPhone or iPad) to perform various business functions.",
      images: [""],
      url: "https://itunes.apple.com/us/app/salon-iris-salon-appointment-book-pos-software/id398253762?mt=8"
    }
  ]
}

var bio = {
  name: "Adam Oberhausen",
  role: "Software Development, DevOps, Scrum Master, Web Development",
  welcomeMessage: "A full-stack engineer with expertise in software development, devops, and cloud computing",
  bioPic: "images/adam-oberhausen.jpg",
  contacts: {
    mobile: "734.644.9099",
    email: "aoberhau@gmail.com",
    emaillink: "mailto:aoberhau@gmail.com",
    github: "adam-oberhausen",
    githublink: "https://github.com/adam-oberhausen",
    twitter: "@adamoberhausen",
    twitterlink: "https://twitter.com/AdamOberhausen",
    location: "Ann Arbor, MI",
    linkedin: "https://www.linkedin.com/in/adam-oberhausen/"
  },
  skills: ["management", "certified scrum master", "certified aws solutions architect", "devops", "html-css-javascript", ".net", "sql"],
  bioPic: "images/adam-oberhausen.jpg"
}

var education = {
  schools: [
    {
      name: "University of Michigan",
      location: "Dearborn, MI",
      degree: "Bachelor of Science",
      majors: ["Electrical Engineering"],
      dates: "2002 - 2005 ",
      url: "https://www.umich.edu/"
    }
  ],
  onlineCourses: [
    {
      title: "Front-End Web Developer",
      school: "Udacity",
      dates: "May 2017 - October 2017 ",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGitHub);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedSkills = "";
  for (var i = 0; i < bio.skills.length; i++){
    formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
  }

  HTMLskillsStart = HTMLskillsStart.replace('<ul id="skills" class="flex-column"></ul>', '<ul id="skills" class="flex-column">' + formattedSkills + '</ul>');
  console.log(HTMLskillsStart);
  $("#header").append(HTMLskillsStart);
}

bio.display();

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++){
    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    formattedworkEmployer = formattedworkEmployer.replace("#", work.jobs[i].url);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedworkDates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedworkLocation);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedworkDescription);
  }
}

work.display();

function inName(name) {
  nameArray = name.split(" ")
  var firstName = nameArray[0].toLowerCase();
  console.log(firstName);
  var firstNameFirstLetter = firstName.charAt(0).toUpperCase();
  console.log(firstNameFirstLetter);
  var firstNameWithoutFirstLetter = firstName.slice(1);
  console.log(firstNameWithoutFirstLetter);
  firstName = firstNameFirstLetter + firstNameWithoutFirstLetter;
  console.log(firstName);
  var lastName = nameArray[1].toUpperCase();
  console.log(lastName);
  return firstName + " " + lastName;
}

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    formattedprojectTitle = formattedprojectTitle.replace("#", projects.projects[i].url);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedprojectDescription);

    if (projects.projects[i].images.length > 0) {
      for (var j = 0; j < projects.projects[i].images; j++) {
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedprojectImage);
      }
    }
  }
}

projects.display();

education.display = function() {
  for (var i = 0; i < education.schools.length; i++){
    $("#education").append(HTMLschoolStart);
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    formattedschoolName = formattedschoolName.replace("#", education.schools[i].url);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschoolDates);

    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedschoolLocation);

    if (education.schools[i].majors.length > 0) {
      for (var j = 0; j < education.schools[i].majors.length; j++) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
        $(".education-entry:last").append(formattedschoolMajor);
      }
    }
  }

  for (var i = 0; i < education.onlineCourses.length; i++){
    if (i === 0) {
      $("#education:last").append(HTMLonlineClasses);
    }

    $("#education").append(HTMLschoolStart);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    formattedonlineTitle = formattedonlineTitle.replace("#", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);

    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedonlineDates);
  }
}

education.display();

$("#mapDiv").append(googleMap);

bio.displayFooter = function() {
  var formattedTwitter = HTMLfooterTwitter.replace("#", bio.contacts.twitterlink);
  console.log(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedLinkedIn = HTMLfooterLinkedIn.replace("#", bio.contacts.linkedin);
  console.log(formattedLinkedIn);
  $("#footerContacts").append(formattedLinkedIn);
  var formattedEmail = HTMLfooterEmail.replace("#", bio.contacts.emaillink);
  console.log(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedGitHub = HTMLfooterGithub.replace("#", bio.contacts.githublink);
  console.log(formattedGitHub);
  $("#footerContacts").append(formattedGitHub);
}

bio.displayFooter();
