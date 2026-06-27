"use strict";
//Interface segregation
class SimplePrinter {
    print(printText) {
        console.log(printText);
    }
}
class Player {
    play(audio) {
        console.log(audio);
    }
    playVideo(video) {
        console.log(video);
    }
}
class Fish {
    walk(animal) {
        console.log(`this ${animal} can walk`);
    }
}
