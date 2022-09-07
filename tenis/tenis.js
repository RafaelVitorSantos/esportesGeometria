var star01 = 1
var star02 = 1
var star03 = 1
var star04 = 1
var star05 = 1
function home() {
    window.location.href = "../index.html";
}

function topReturn() {
    window.scrollTo(0, 0);
}


function star1() {
    var menu = document.getElementById('starMenu')
    var rating = document.getElementById('star-rating')
    if (star01 == 1) {
        document.getElementById('star1').style.color = '#FFFF33'
        document.getElementById('star2').style.color = 'lightgray'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star01 = 0
        star02 = 1
        star03 = 1
        star04 = 1
        star05 = 1
        menuStar(menu, rating)
    } else {
        document.getElementById('star1').style.color = 'lightgray'
        document.getElementById('star2').style.color = 'lightgray'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star01 = 1
    }
}

function star2() {
    var menu = document.getElementById('starMenu')
    var rating = document.getElementById('star-rating')
    if (star02 == 1) {
        document.getElementById('star1').style.color = '#FFFF33'
        document.getElementById('star2').style.color = '#FFFF33'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star01 = 1
        star02 = 0
        star03 = 1
        star04 = 1
        star05 = 1
        menuStar(menu, rating)
    } else {
        document.getElementById('star1').style.color = 'lightgray'
        document.getElementById('star2').style.color = 'lightgray'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star02 = 1
    }
}

function star3() {
    var menu = document.getElementById('starMenu')
    var rating = document.getElementById('star-rating')
    if (star03 == 1) {
        document.getElementById('star1').style.color = '#FFFF33'
        document.getElementById('star2').style.color = '#FFFF33'
        document.getElementById('star3').style.color = '#FFFF33'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star01 = 1
        star02 = 1
        star03 = 0
        star04 = 1
        star05 = 1
        menuStar(menu, rating)
    } else {
        document.getElementById('star1').style.color = 'lightgray'
        document.getElementById('star2').style.color = 'lightgray'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star03 = 1
    }
}

function star4() {
    var menu = document.getElementById('starMenu')
    var rating = document.getElementById('star-rating')
    if (star04 == 1) {
        document.getElementById('star1').style.color = '#FFFF33'
        document.getElementById('star2').style.color = '#FFFF33'
        document.getElementById('star3').style.color = '#FFFF33'
        document.getElementById('star4').style.color = '#FFFF33'
        document.getElementById('star5').style.color = 'lightgray'
        star01 = 1
        star02 = 1
        star03 = 1
        star04 = 0
        star05 = 1
        menuStar(menu, rating)
    } else {
        document.getElementById('star1').style.color = 'lightgray'
        document.getElementById('star2').style.color = 'lightgray'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star04 = 1
    }
}

function star5() {
    var menu = document.getElementById('starMenu')
    var rating = document.getElementById('star-rating')
    if (star05 == 1) {
        document.getElementById('star1').style.color = '#FFFF33'
        document.getElementById('star2').style.color = '#FFFF33'
        document.getElementById('star3').style.color = '#FFFF33'
        document.getElementById('star4').style.color = '#FFFF33'
        document.getElementById('star5').style.color = '#FFFF33'
        star01 = 1
        star02 = 1
        star03 = 1
        star04 = 1
        star05 = 0
        menuStar(menu, rating)
    } else {
        document.getElementById('star1').style.color = 'lightgray'
        document.getElementById('star2').style.color = 'lightgray'
        document.getElementById('star3').style.color = 'lightgray'
        document.getElementById('star4').style.color = 'lightgray'
        document.getElementById('star5').style.color = 'lightgray'
        star05 = 1
    }
}

function starMenu() {
    var menu = document.getElementById('starMenu')
    var rating = document.getElementById('star-rating')
    rating.style.display = "grid"
    menu.style.display = 'none'
}

async function menuStar(menu, rating) {
    document.getElementById('star-rating').style.animation = 'Exit 0.5s ease 0s 1 normal forwards'
    await delay(1);
    document.getElementById('star-rating').style.animation = ''
    document.getElementById('starMenu').style.animation = 'Entrance 0.5s ease 0s 1 normal forwards'
    menu.style.display = "block"
    rating.style.display = "none"
}

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}