// switching between cuisine.
function indian() {
    let ind = document.getElementById("indian");
    let cn = document.getElementById("chinese");
    let jp = document.getElementById("japanese");
    let abt = document.getElementById("abtUs");
    
    if(ind.style.display == "none") {

        cn.style.display = "none";
        jp.style.display = "none";
        abt.style.display = "none";
        ind.style.display = "block";
    
    } else {

        ind.style.display = "none";
        abt.style.display = "block";
    }
}

function chinese() {
    let ind = document.getElementById("indian");
    let cn = document.getElementById("chinese");
    let jp = document.getElementById("japanese");
    let abt = document.getElementById("abtUs");

    if (cn.style.display == "none") {
        cn.style.display = "block";
        jp.style.display = "none";
        abt.style.display = "none";
        ind.style.display = "none";
    } else {

        cn.style.display = "none";
        abt.style.display = "block";
    }
}

function japanese() {
    let ind = document.getElementById("indian");
    let cn = document.getElementById("chinese");
    let jp = document.getElementById("japanese");
    let abt = document.getElementById("abtUs");

    if (jp.style.display == "none") {
        cn.style.display = "none";
        jp.style.display = "block";
        abt.style.display = "none";
        ind.style.display = "none";
    } else {

        jp.style.display = "none";
        abt.style.display = "block";
    }
}

function abt() {
    let ind = document.getElementById("indian");
    let cn = document.getElementById("chinese");
    let jp = document.getElementById("japanese");
    let abt = document.getElementById("abtUs");

    if (abt.style.display == "none") {
        cn.style.display = "none";
        jp.style.display = "none";
        abt.style.display = "block";
        ind.style.display = "none";
    } else {
        abt.style.display = "block";
    }
}

// PalakPaneer
function sPalakPaneer() {
    let txt = document.getElementById("palakPaneerDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.150";
}
function dPalakPaneer() {
    let txt = document.getElementById("palakPaneerDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> butter, spinach, tomato,<br> paneer cheese, onion, masala";
}

// ButterChiken
function sButterChiken() {
    let txt = document.getElementById("butterChikenDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.190";
}
function dButterChiken() {
    let txt = document.getElementById("butterChikenDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> boneless, skinless chicken breasts/skinless chicken thighs,<br>tomato sauce, onion, masala";
}

// FishCurry
function sFishCurry() {
    let txt = document.getElementById("fishCurryDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.90";
}
function dFishCurry() {
    let txt = document.getElementById("fishCurryDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> fish, coriander powder,<br>coconut milk, grated unsweetened coconut, masala";
}

// Pakora
function sPakora() {
    let txt = document.getElementById("pakoraDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.40";
}
function dPakora() {
    let txt = document.getElementById("pakoraDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br>chickpea flour, baking powder, red pepper, chopped vegetables";
}

// DimSums
function sDimSums() {
    let txt = document.getElementById("dimSumsDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.80";
}
function dDimSums() {
    let txt = document.getElementById("dimSumsDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> ground pork, onion,<br>flour, cayenne pepper, masala";
}

// HotAndSourSoup
function sHotAndSourSoup() {
    let txt = document.getElementById("hotAndSourSoupDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.200";
}
function dHotAndSourSoup() {
    let txt = document.getElementById("hotAndSourSoupDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> Onion, Ginger,Garlic,<br>Cabbage, Cornflour, Sauces";
}

// SpringRolls
function sSpringRolls() {
    let txt = document.getElementById("springRollsDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.50";
}
function dSpringRolls() {
    let txt = document.getElementById("springRollsDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> flour, garlic,carrot,<br>spring onion, capsicum, sauces";
}

// Tofu
function sTofu() {
    let txt = document.getElementById("tofuDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.240";
}
function dTofu() {
    let txt = document.getElementById("tofuDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br>instant rice, reduced-fat firm tofu, <br>eggs,green onions, peas and carrots, sauces";
}

// Sushi
function sSushi() {
    let txt = document.getElementById("sushiDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.150";
}
function dSushi() {
    let txt = document.getElementById("sushiDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> fish, white rice, nori seaweed sheets, pickled ginger, crabmeat";
}

// Tamagoyaki
function sTamagoyaki() {
    let txt = document.getElementById("tamagoyakiDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.70";
}
function dTamagoyaki() {
    let txt = document.getElementById("tamagoyakiDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> eggs, green onions,<br>oil, sauces, garlic";
}

// Soba
function sSoba() {
    let txt = document.getElementById("sobaDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.150";
}
function dSoba() {
    let txt = document.getElementById("sobaDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> Soba noodles, sesame oil,<br>Soy sauce, Honey, Miso";
}

// UnagiNoKabayaki
function sUnagiNoKabayaki() {
    let txt = document.getElementById("unagiNoKabayakiDisp");
    txt.style.fontSize="50px";
    txt.innerHTML="PRICE: Rs.150";
}
function dUnagiNoKabayaki() {
    let txt = document.getElementById("unagiNoKabayakiDisp");
    txt.style.fontSize="30px";
    txt.innerHTML= "Ingredients:<br> grilled unagi fillet, mirin,<br>sake, white rice, sauces";
}