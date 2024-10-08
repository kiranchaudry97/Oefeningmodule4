import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let hoogte = 1;  
let hoogte1 = 2; 

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let nummer = 0; nummer < 2 * tellerhoogte + 1; nummer++) {
        process.stdout.write("1");
    }

    console.log(""); 

    //2//
}

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let nummer = 0; nummer < 1 * tellerhoogte + 2; nummer++) {
        process.stdout.write("2");
    }

    console.log(""); 
}



//3//
for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let nummer = 0; nummer < 1 * tellerhoogte + 3; nummer++) {
        process.stdout.write("3");
    }

    console.log(""); 
}

//4//

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let nummer = 0; nummer < 1 * tellerhoogte + 4; nummer++) {
        process.stdout.write("4");
    }

    console.log(""); 
}

process.exit()