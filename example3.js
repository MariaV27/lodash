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



for(var i = 0; i < presidentialCandidatesOfDoom.length; i++){
    for(var j = 0; j = < presidentialCandidatesOfDoom[i].lairs.length; j++){
        console.log(presidentialCandidatesOfDoom[i].lairs[j].name);
    }
}

//var lairs = _.map(presidentialCandidatesOfDoom, function(candidate){
  //  return _.map(candidaye.lairs, function(lair){
    //    return lair.name;
    //});
//});

//console.log(lairs);
//Washington
//Washington
//New York
//Washington