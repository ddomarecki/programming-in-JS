class Statistics {
    constructor() {
        this.gameResults = [];
        // this.gameResults = [{win: true, bid: 2}, {win: true, bid: 12}];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            // win: win,
            // bid: bid
            win,
            bid
        }
        this.gameResults.push(gameResult)
    }
    
    showGameStatistics() {
        // return [liczbaGier, liczbaWygranych,, liczbaPorazek]
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        // console.log(games, wins, losses);
        return [games, wins, losses];
    }

    // showGameStatistics() {
    //     let games = this.gameResults.length;
    //     let wins = this.gameResults.filter(result => result.win).length;
    //     let losses = this.gameResults.filter(result => !result.win).length
    //     // console.log(games, wins, losses);
    //     return [games, wins, losses]
    //    }
}

