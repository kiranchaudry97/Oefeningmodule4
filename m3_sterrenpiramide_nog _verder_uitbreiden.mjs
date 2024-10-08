import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



// nummer -> ster //

let hoogte = 1;  
let hoogte1 = 2; 

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let ster = 0; ster < 2 * tellerhoogte + 1; ster++) {
        process.stdout.write("*");
    }

    console.log(""); 

    //2 -> ster //
}

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let ster = 0; ster < 1 * tellerhoogte + 2; ster++) {
        process.stdout.write("*");
    }

    console.log(""); 
}



// 3 -> ster//
for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let ster = 0; ster < 1 * tellerhoogte + 3; ster++) {
        process.stdout.write("*");
    }

    console.log(""); 
}

//4 -> ster//

for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
        
    }

    for (let ster = 0; ster < 1 * tellerhoogte + 4; ster++) {
        process.stdout.write("*");
    }

    console.log(""); 
}





// nummer -> ster //


// ster -> nummer//

let startTop = true;
let startLeft = true;
let hoogte2 = 3;

// True en True //
if (startTop && startLeft) {
  for (let tellerhoogte = 0; tellerhoogte < hoogte2; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte2 - tellerhoogte - 1; breedteteller++) {
      process.stdout.write(" ");
    }

    for (let nummer = 0; nummer < tellerhoogte + 1; nummer++) {
      process.stdout.write("1");
    }

    console.log("");
  }
}

// False en True //
if (!startTop && startLeft) {
  for (let tellerhoogte = hoogte2; tellerhoogte > 0; tellerhoogte--) {
    for (let breedteteller = 0; breedteteller < hoogte2 - tellerhoogte; breedteteller++) {
      process.stdout.write(" ");
    }

    for (let nummer = 0; nummer < tellerhoogte; nummer++) {
      process.stdout.write("2");
    }

    console.log("");
  }
}

// True en False //
startTop = true;
startLeft = false;
if (startTop && !startLeft) {
  for (let tellerhoogte = 0; tellerhoogte < hoogte2; tellerhoogte++) {
    for (let spaties = 0; spaties < hoogte2 - tellerhoogte - 1; spaties++) {
      process.stdout.write(" ");
    }

    for (let nummer = 0; nummer < tellerhoogte + 1; nummer++) {
      process.stdout.write("3");
    }

    console.log("");
  }
}

// False en False//

startTop = false;
startLeft = false;
if (!startTop && !startLeft) {
  for (let tellerhoogte = hoogte2; tellerhoogte > 0; tellerhoogte--) {
    for (let spaties = 0; spaties < hoogte2 - tellerhoogte; spaties++) {
      process.stdout.write(" ");
    }

    for (let nummer = 0; nummer < tellerhoogte; nummer++) {
      process.stdout.write("4");
    }

    console.log("");
  }
}

process.exit();
