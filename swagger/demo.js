var TheMovieDatabase = require('./javascript-client');
TheMovieDatabase.ApiClient.instance.basePath = 'http://localhost:8080';
var api = new TheMovieDatabase.DefaultApi();

api.getMovies((error, movies) => {
    if (error) {
        throw error;
    }

    console.log(movies);
})



var movie = {
    "id": 771028554,
    "title": "127 Hours",
    "year": 2010,
    "mpaaRating": "R",
    "ratings": {
        "criticsScore": 93,
        "audienceScore": 85
    },
    "criticsConsensus": "As gut-wrenching as it is inspirational, 127 Hours unites one of Danny Boyle's most beautifully exuberant directorial efforts with a terrific performance from James Franco.",
    "synopsis": "James Franco stars in director Danny Boyle's inspiring survival drama based on the incredible true story of Aron Ralston, who became trapped alone in a Utah canyon for days after slipping on a loose rock, and resorted to extraordinary measures in order to make it out of his dire predicament alive. An experienced hiker and climber, Ralston (Franco) is very much in his element when he parks his truck by a mountain near Moab, UT, hops on his bike, and peddles to the middle of nowhere. Later, when Ralston encounters a pair of young female hikers who have gotten lost while searching for a local landmark, he jovially shows them a sight that most casual hikers miss before bidding them farewell and continuing on his way. Drifting through the canyons alone, deep in thought, however, the explorer who presumed he was ready for anything quickly discovers just how fast things can spin out of control when a rock gives way as he shimmies down a crevice, and pins his hand to the unforgiving wall of stone. Over the course of the next 127 hours, Ralston tries everything he can think of to free himself, flashing back to small but memorable events in his life -- as well as forward to the future that he might enjoy should he manage to wiggle free -- as his body begins the slow process of shutting down. Eventually realizing that the only way out is to leave part of himself behind, the exhausted, delirious adventurer draws his cheap made-in-China multi-tool, and does what it takes to survive. ~ Jason Buchanan, Rovi",
    "genres": ["Drama"],
    "posters": {
        "thumbnail": "http://content6.flixster.com/movie/11/15/34/11153440_mob.jpg",
        "profile": "http://content6.flixster.com/movie/11/15/34/11153440_pro.jpg",
        "detailed": "http://content6.flixster.com/movie/11/15/34/11153440_det.jpg",
        "original": "http://content6.flixster.com/movie/11/15/34/11153440_ori.jpg"
    },
    "abridgedCast": [{
        "id": 162653202,
        "name": "James Franco",
        "characters": ["Aron Ralston"]
    }, {
        "id": 347990463,
        "name": "Amber Tamblyn",
        "characters": ["Megan"]
    }, {
        "id": 414200709,
        "name": "Kate Mara",
        "characters": ["Kristi"]
    }, {
        "id": 770681921,
        "name": "Clemence Poesy",
        "characters": ["Rana"]
    }, {
        "id": 364624768,
        "name": "Kate Burton",
        "characters": ["Aron's Mom"]
    }],
    "abridgedDirectors": ["Danny Boyle"]
};


// movie = {};

api.addMovie(movie, (error) => {
    if (error) {
        throw error;
    }
})