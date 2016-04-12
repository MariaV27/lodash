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


_.each(presidentialCandidatesOfDoom, function(candidate){
    _.each(candidate.lairs, function(lair){
        console.log lair.name;
    });
});

var flattenedLairs = _.flatten(lairs);
var uniqueLairs = _.uniq(flattenedLairs);
var sortedLairs = _.uniqueLairs.sort();

console.log(sortedLairs);
