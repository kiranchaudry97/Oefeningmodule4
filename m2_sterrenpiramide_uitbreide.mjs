import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let startTop = true;
let startLeft = true;
let hoogte = 3;

// True en True //
if (startTop && startLeft) {
  for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte - 1; breedteteller++) {
      process.stdout.write(" ");
    }

    for (let ster = 0; ster < tellerhoogte + 1; ster++) {
      process.stdout.write("*");
    }

    console.log("");
  }
}

// False en True //
if (!startTop && startLeft) {
  for (let tellerhoogte = hoogte; tellerhoogte > 0; tellerhoogte--) {
    for (let breedteteller = 0; breedteteller < hoogte - tellerhoogte; breedteteller++) {
      process.stdout.write(" ");
    }

    for (let ster = 0; ster < tellerhoogte; ster++) {
      process.stdout.write("*");
    }

    console.log("");
  }
}

// True en False //
startTop = true;
startLeft = false;
if (startTop && !startLeft) {
  for (let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte++) {
    for (let spaties = 0; spaties < hoogte - tellerhoogte - 1; spaties++) {
      process.stdout.write(" ");
    }

    for (let ster = 0; ster < tellerhoogte + 1; ster++) {
      process.stdout.write("*");
    }

    console.log("");
  }
}

// False en False//

startTop = false;
startLeft = false;
if (!startTop && !startLeft) {
  for (let tellerhoogte = hoogte; tellerhoogte > 0; tellerhoogte--) {
    for (let spaties = 0; spaties < hoogte - tellerhoogte; spaties++) {
      process.stdout.write(" ");
    }

    for (let ster = 0; ster < tellerhoogte; ster++) {
      process.stdout.write("*");
    }

    console.log("");
  }
}

process.exit();
