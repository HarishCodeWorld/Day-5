//question 1
// for the given JSON iterate over all for loops
//for-in loop
var resume = {
    "name": "HARISH K",
    "label": "Software engineer",
    "email": "harish@gmail.com",
    "phone":"+91-9999999999",
    "SUMMARY": ["I am seeking a role in a company where I can contribute my ideas and be mentored towards a successful career."],
    "LOCATION": {
      "address": "23,Chennai.Tamilnadu",
      "postalCode": "666666",
      "city": "Chennai",
      "District":"Chennai",
      "State":"Tamilnadu",
    },
  "PROFILE SNAPSHOT ": {
    "A goal-oriented and dedicated in":["Full stack developement" ]
    },
  "EDUCATION": {
    "institution": "Vit university",
    "college":"Vit university",
    "Degree": "MTECH",
    "Duration": "2016-2021",
    "cgpa": "7.2",
    },
  "SKILLS": {
    "name": "Full stack development",
    "keywords":["MERN stack development,"]
  },
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
 },
};
for(var i in resume){
    console.log(i,resume[i]);
}
//2nd loop
//for loop iteration
var resume = [{
  "name": "HARISH K",
  "label": "Software engineer",
  "email": "harish@gmail.com",
  "phone":"+91-9999999999",
  "SUMMARY": ["I am seeking a role in a company where I can contribute my ideas and be mentored towards a successful career."],
  "LOCATION": {
    "address": "23,Chennai.Tamilnadu",
    "postalCode": "666666",
    "city": "Chennai",
    "District":"Chennai",
    "State":"Tamilnadu",
},
"PROFILE SNAPSHOT ": {
    "A goal-oriented and dedicated in":["Full stack developement" ]
},
"EDUCATION": {
  "institution": "Vit university",
  "college":"Vit university",
  "Degree": "MTECH",
  "Duration": "2016-2021",
  "cgpa": "7.2",
},
"SKILLS": {
    "name": "Full stack development",
    "keywords":[
      "MERN stack development,"
    ]
  },
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    },
}];
for(var i = 0; i<resume.length; i++){
  console.log(resume[i]);
}

// 3.for of -loop iteration

const num = [10,20,30,40,50];

for(var newnum of num){
  console.log(newnum);
}


//question 2
//2.create your own resume for JSON format
var resume = {
    "name": "HARISH K",
    "label": "Software engineer",
    "email": "harish@gmail.com",
    "phone":"+91-9999999999",
    "SUMMARY": ["I am seeking a role in a company where I can contribute my ideas and be mentored towards a successful career."],
    "LOCATION": {
      "address": "23,Chennai.Tamilnadu",
      "postalCode": "666666",
      "city": "Chennai",
      "District":"Chennai",
      "State":"Tamilnadu",
       },
  "PROFILE SNAPSHOT ": {
    "A goal-oriented and dedicated in":["Full stack developement" ]
    },
  "EDUCATION": {
    "institution": "Vit university",
    "college":"Vit university",
    "Degree": "MTECH",
    "Duration": "2016-2021",
    "cgpa": "7.2",
    },
  "SKILLS": {
    "name": "Full stack development",
    "keywords":[
      "MERN stack development,"
    ]
  },
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    },
};
console.log(resume);

