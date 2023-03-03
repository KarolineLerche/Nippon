



// CAROUSEL VEGETAR // 
// Variable:
const vegetar1 = document.getElementById("vegetar1");
const vegetar2 = document.getElementById("vegetar2");
const vegetar3 = document.getElementById("vegetar3");
const hoejrePil1 = document.getElementById("hoejrePil1");
const venstrePil1 = document.getElementById("venstrePil1");


// Arrayet:
const carousel1 = [vegetar1, vegetar2, vegetar3];

carousel1[0].style.display = "block";
carousel1[1].style.display = "none";
carousel1[2].style.display = "none";

// Knapper:
hoejrePil1.addEventListener("click", naesteBillede1);
venstrePil1.addEventListener("click", forrigeBillede1);

// Funktioner:
function naesteBillede1(){
    carousel1[0].style.display = "none"; // Skjul den viste
    carousel1.push(carousel1[0]); // Put den første ind til sidst
    carousel1.shift(); // Fjern den første og flyt alle en ned
    carousel1[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede1(){
    carousel1[0].style.display = "none";
    carousel1.unshift(carousel1[2]);
    carousel1.pop();
    carousel1[0].style.display = "block";
}





// CAROUSEL FAMILIE // 
// Variable:
const familie1 = document.getElementById("familie1");
const familie2 = document.getElementById("familie2");
const familie3 = document.getElementById("familie3");
const hoejrePil2 = document.getElementById("hoejrePil2");
const venstrePil2 = document.getElementById("venstrePil2");

// Arrayet:
const carousel2 = [familie1, familie2, familie3];

carousel2[0].style.display = "block";
carousel2[1].style.display = "none";
carousel2[2].style.display = "none";

// Knapper:
hoejrePil2.addEventListener("click", naesteBillede2);
venstrePil2.addEventListener("click", forrigeBillede2);

// Funktioner:
function naesteBillede2(){
    carousel2[0].style.display = "none"; // Skjul den viste
    carousel2.push(carousel2[0]); // Put den første ind til sidst
    carousel2.shift(); // Fjern den første og flyt alle en ned
    carousel2[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede2(){
    carousel2[0].style.display = "none";
    carousel2.unshift(carousel2[2]);
    carousel2.pop();
    carousel2[0].style.display = "block";
}





// CAROUSEL BYG-SELV // 
// Variable:
const bygSelv1 = document.getElementById("bygSelv1");
const bygSelv2 = document.getElementById("bygSelv2");
const bygSelv3 = document.getElementById("bygSelv3");
const hoejrePil3 = document.getElementById("hoejrePil3");
const venstrePil3 = document.getElementById("venstrePil3");

// Arrayet:
const carousel3 = [bygSelv1, bygSelv2, bygSelv3];

carousel3[0].style.display = "block";
carousel3[1].style.display = "none";
carousel3[2].style.display = "none";

// Knapper:
hoejrePil3.addEventListener("click", naesteBillede3);
venstrePil3.addEventListener("click", forrigeBillede3);

// Funktioner:
function naesteBillede3(){
    carousel3[0].style.display = "none"; // Skjul den viste
    carousel3.push(carousel3[0]); // Put den første ind til sidst
    carousel3.shift(); // Fjern den første og flyt alle en ned
    carousel3[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede3(){
    carousel3[0].style.display = "none";
    carousel3.unshift(carousel3[2]);
    carousel3.pop();
    carousel3[0].style.display = "block";
}