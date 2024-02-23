const ACTION_ADD = "addMovie"
const ACTION_DIRECTED_BY = "directedBy"
const ACTION_ON_DATE = "onDate"

function defineAction(command) {
    if (command.includes(ACTION_ADD)) {
        return ACTION_ADD
    }
    if (command.includes(ACTION_DIRECTED_BY)) {
        return ACTION_DIRECTED_BY
    }
    if (command.includes(ACTION_ON_DATE)) {
        return ACTION_ON_DATE
    }
}

function process(commandArray) {
    let list = [];
    for (let i = 0; i < commandArray.length; i++) {
        let command = commandArray[i].split(" ");
        let action = defineAction(command);
        if (action === ACTION_ADD) {
            let name = command.slice(1, command.length).join(" ");
            let movie = new Movie(name);
            list.push(movie);
        }
        if (action === ACTION_DIRECTED_BY) {
            let name = command.slice(0, command.indexOf("directedBy")).join(" ").trim();
            console.log(name)
            let existingMovie = list.find(movie => movie.name === name);
            let director = command.slice(command.indexOf("directedBy") + 1).join(" ");
            if (existingMovie) {
                existingMovie.director = director;
            } else {
                let movie = new Movie(name, undefined, director);
                list.push(movie);
            }
        }
        if (action === ACTION_ON_DATE) {
            let name = command.slice(0, command.indexOf("onDate")).join(" ");
            let existingMovie = list.find(movie => movie.name === name);
            let date = command[command.length - 1];
            if (existingMovie) {
                existingMovie.date = date;
            } else {
                let movie = new Movie(name, date);
                list.push(movie);
            }
        }
    }
    list.filter(m => m.director !== undefined && m.name !== undefined && m.date !== undefined)
        .forEach(m => console.log(JSON.stringify(m)));
}


class Movie {
    constructor(name = undefined, date = undefined, director = undefined) {
        this.name = name;
        this.date = date;
        this.director = director;
    }
}

let commands = ['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']

process(commands)