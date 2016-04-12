var presidentialCandidatesOfDoom = [
    {
        "name": "Bern",
        "lairs": [{"name":"Washington"}, {"name": "Vermont"}, {"name": "Brooklyn"}]
    },
    {
        "name": "Hillary",
        "lairs": [{"name":"Washington"}, {"name": "New York"}, {"name": "Arkansas"}]
    },
    {
        "name": "Trump",
        "lairs": [{"name":"New York"}]
    },
    {
        "name": "Cruz",
        "lairs": [{"name": "Washington"}, {"name": "New York"}]
    }
]

//for(var i = 0; i < presidentialCandidatesOfDoom.length; i++){
  //  console.log(presidentialCandidatesOfDoom[i].lairs[0].name);
//}

console.log(_.map(studentsofDoom, 'lairs[0].name'));

//Washington
//Washington
//New York
//Washington