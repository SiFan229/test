var one = document.querySelector('.one');
var two = document.querySelector('.two');
one.addEventListener('click',fn,false);
function fn() {
    alert('one');
}
two.addEventListener('click',fn1,false);
function fn1() {
    alert('two');
}
