const input = require('readline-sync');
const fs = require('fs');

const FILE_PATH = './inventory.json';

// 1. Load your inventory safely (handles blank/empty files)
let inven = [];
if (fs.existsSync(FILE_PATH)) {
    const fileContent = fs.readFileSync(FILE_PATH, 'utf8').trim();
    if (fileContent.length > 0) {
        inven = JSON.parse(fileContent);
    }
}

let itom = ""; 
let quant; 
let iter; 

while (itom.toUpperCase() !== "END") {
    itom = input.question("add item to list? (input 'END' to stop) ");
    console.log(itom);
    if (itom.toUpperCase() == "END") {
        console.log("ending... data storing")
        break;
    } else {
         
    quant = input.questionInt("Quantity? (use negitive numbers to substract) "); 
    iter = inven.findIndex(item => item.includes(itom)); 
    
    if (iter == -1) { 
        inven.push(`${itom} ${quant}`); 
    } else { 
        let parts = inven[iter].split(" ");
        let oldQuant = Number(parts[parts.length - 1]);
        inven[iter] = `${itom} ${oldQuant + quant}`;

       
    } 
   
}

    console.log(inven);
    
    
} 

// 2. Save your inventory back to the file
fs.writeFileSync(FILE_PATH, JSON.stringify(inven, null, 2), 'utf8');


console.log(`this is your completed inventory:`);
for (const ite of inven) {
    console.log(ite);
}
console.log("have a lovely day!");