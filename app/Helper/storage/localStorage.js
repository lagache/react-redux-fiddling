import * as _ from 'underscore';

export function storeScore(newScore) {
    let scoresTab = [], scores = localStorage.scores;
    if(typeof(Storage) !== "undefined") {
        if(scores) {
            scoresTab = scores.split(',');
        }
        
        scoresTab.push(newScore.toString());
        scoresTab.sort();
        scoresTab.reverse();

        localStorage.scores = scoresTab.join();

        console.log("new score stored locally");
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}

export function retrieveScores() {
    let scores = localStorage.scores;
    if(typeof(Storage) !== "undefined") {
        if(scores) {
            return scores.split(',');
        }
        return [];
        
        console.log("retrieve scores from local storage");
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}