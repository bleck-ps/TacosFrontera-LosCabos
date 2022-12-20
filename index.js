const btacos = document.getElementById('tacos');
const bburrito = document.getElementById('burrito');
const bsides = document.getElementById('sides');
const btopping = document.getElementById('topping');
const bbeer = document.getElementById('beer');
const bwine = document.getElementById('wine');
const bcocktail = document.getElementById('cocktail');
const bbeve = document.getElementById('beve');
const btostay = document.getElementById('tostay');

var mstacos = document.getElementById('stacos');
var msburrito = document.getElementById('sburrito');
var mssides = document.getElementById('ssides');
var mstopping = document.getElementById('stopping');
var msbeer = document.getElementById('sbeer');
var msspirit = document.getElementById('sspirit');
var mscocktail = document.getElementById('scocktail');
var msbeve = document.getElementById('sbeve');
var mstostay = document.getElementById('stostay');

var menu = 0;

btacos.addEventListener('click',function(){
    reset();
    mstacos.style.display = 'flex';
})
bburrito.addEventListener('click',function(){
    reset();
    msburrito.style.display = 'flex';
})
bsides.addEventListener('click',function(){
    reset();
    mssides.style.display = 'flex';
})
btopping.addEventListener('click',function(){
    reset();
    mstopping.style.display = 'flex';
})
bbeer.addEventListener('click',function(){
    reset();
    msbeer.style.display = 'flex';
})
bwine.addEventListener('click',function(){
    reset();
    msspirit.style.display = 'flex';
})
bcocktail.addEventListener('click',function(){
    reset();
    mscocktail.style.display = 'flex';
})
bbeve.addEventListener('click',function(){
    reset();
    msbeve.style.display = 'flex';
})
btostay.addEventListener('click',function(){
    reset();
    mstostay.style.display = 'flex';
})

function reset() {
    mstacos.style.display = 'none';
    msburrito.style.display = 'none';
    mssides.style.display = 'none';
    mstopping.style.display = 'none';
    msbeer.style.display = 'none';
    msspirit.style.display = 'none';
    mscocktail.style.display = 'none';
    msbeve.style.display = 'none';
    mstostay.style.display = 'none';
}