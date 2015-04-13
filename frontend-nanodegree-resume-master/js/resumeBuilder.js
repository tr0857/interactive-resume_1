var bio = {
    "name": "Tim Roberts",
    "role": "Local Search Engine Optimazation",
       "contacts": {
        "mobile": "972-746-5910",
        "email": "tim@localfirstseo.com",
        "twitter": "@localfirstseo",
        "github": "localfirstseo",
        "location": "Lewisville, TX, USA"
    },
    "welcomeMessage": "Don't put off untill tomorrow what you can do today. --Benjamin Franklin",
    "skills": [
        "Windows Operating Systems",
        "Windows Networking",
        "Web Hosting",
        "CSS",
        "WordPress Expert",
        "HTML Coding",
        "Google AWords Expert",
        "Local Search Optimazation",
        "Google Plus Expert",
        "Mediaroom"
    ],
    "biopic": "images/me.png",
    }

var education = {
    "schools": 
        {
        "name": "University of Phonix",
        "location": "Corpus Christy, TX, US",
        "dates": "1996-2000",
        "degree": "Information System Specialist",
        "url": "http://www.phoenix.edu/"
        },
    "onlineCourse" : [
      {
        "school": "Udacity",
        "title": "Front End Web Developer NanoDegree",
        "dates": "2015",
        "url": "https://www.udacity.com"
      },
      {
        "school" : "Microsoft",
        "title" : "Windows Networking Essentials",
        "dates" : "2001",
        "url" : "http://www.microsoft.com"
      },
      {
        "school" : "Microsoft",
        "title" : "Mediaroom Essentials",
        "dates" : "2006",
        "url" : "http://www.microsoft.com"
      },
      {
        "school" : "WordPress",
        "title" : "WordPress Ninja",
        "dates" : "2015",
        "url" : "http://lynda.com"
      }
    ],
       };

var work  = {
  "jobs" : [
    {
      "title" : "U-verse Performance Team Market Manager",
      "employer" : "AT&T",
      "years" : "2013 - 2015",
      "location" : "Irving, TX, USA",
      "description" : "Video Quality Index and Broadban Quality Index Market Manager for West Coast"
    },
    {
      "title" : " AT&T Mediaroom Technical Team Lead",
      "employer" : "AT&T",
      "years" : "2010 - 2013",
      "location" : "Irving, TX, USA",
      "description" : "Technical leadership of the Uverse Data team."
    },
    {
      "title" : " MediaRoom Technical Support Specialist",
      "employer" : "AT&T",
      "years" : "2006 - 2008",
      "location" : "Irving TX, USA",
      "description" : "Mediaroom Technical Support.Supporting End to End of Mediaroom" 
    }
  ],
  };

var projects = {
  "projects" : [
      {
        "title" : "SEO Optimization",
        "dates" : "September 2014 - April 2015",
        "description" : "Optimization of Local Search Engine for customer in the Lewisville and Flower Mound Area.",
        "images" : []
      },
      {
        "title" : "New Install clients impact on the Video Quality Index (VQI) ",
        "dates" : "Janruary 2014 -December 2014",
        "description" : "Month over Month Data Analysis of New installs and there impact on the overall VQI score.",
        "images" : []
      },
     {
        "title" : "NVG589 Ground Loop",
        "dates" : "Janruary 2014 -current",
        "description" : "Test of the NVG589",
        "images" : []
      },
      {
        "title" : "LAI, NAI and TAI VQI Project",
        "dates" : "Janruary 2014 -current",
        "description" : "Determining the effect of LAI, NAI and TAI on VQI score",
        "images" : []
      }
    ]
};

// function to display the biographical information in the included JSON

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  document.title = bio.name + "'s resume";
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email)); 
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email)); 
  $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); 
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
  if(bio.skills.length > 0 ) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    for (skill in bio.skills) { 
      formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").prepend(formattedSkill);
      }
  }
};

// function to display the work history information in the included JSON

work.display = function () {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var wEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var wTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var wDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
    var wLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var wDec = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var wOut = wEmp + " " + wTitle;
    $(".work-entry:last").append(wOut);
    $(".work-entry:last").append(wDates);
    $(".work-entry:last").append(wLoc);
    $(".work-entry:last").append(wDec);
  };
};

// function to display the project information in the included JSON

projects.display = function() {
  for ( task in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[task].title);
    $(".project-entry:last").append(formattedTitle);
    var formatttedDates = HTMLprojectDates.replace("%data%", projects.projects[task].dates);
    $(".project-entry:last").append(formatttedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[task].description);
    $(".project-entry:last").append(formattedDesc);
    if (projects.projects[task].images.length > 0) {
      for (image in projects.projects[task].images) {
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[task].images[image]);
        $(".project-entry:last").append(projectImage);
      }
    }
  }
};

// function to display the education information in the included JSON

education.display = function() { 
  if(education.schools.length = 1 ) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
    var nameDegree = formattedName + formattedDegree;
    $(".education-entry").append(nameDegree);
    var formattedDate = HTMLschoolDates.replace("%data%", education.schools.dates);
    $(".education-entry").append(formattedDate);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
    $(".education-entry").append(formattedLocation);
    $(".education-entry").append('<br>')
  };
  if(education.onlineCourse.length > 0) {
    $("#education").append(HTMLonlineClasses);
    var HTMLOnlineStart = '<div class="education-entry"></div>';
    $("#education").append(HTMLOnlineStart);
    for (course in education.onlineCourse) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
      var courseSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(courseSchool);      
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
      $(".education-entry:last").append(formattedDate);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
      $(".education-entry:last").append(formattedUrl);
   };
  }
};

// call the functions to insert the data from the JSON into the index.html 
work.display();

bio.display();

projects.display();

education.display();

// call the Google Map.
$("#mapDiv").append(googleMap);