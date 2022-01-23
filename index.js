const random = Math.ceil(Math.random() * 10);
console.log(random);
let chance = 3;


function clear() {
    document.getElementById('inputText').value = ''
}

document.getElementById('live').innerHTML = 'Your Chance ' + chance;
document.getElementById('myButton').onclick = function findRandom() {
    let myNumber = document.getElementById('inputText').value;
    if (myNumber === 0) {
        document.getElementById('text').innerHTML = 'Enter only 1-10';
    } else if (myNumber < 1 || myNumber > 10) {
        document.getElementById('text').innerHTML = 'Enter only 1-10';
    } else if (myNumber > random) {
        document.getElementById('text').innerHTML = 'A Little Less';
        chance--;
        document.getElementById('live').innerHTML = 'Your Chance ' + chance;
    } else if (myNumber < random) {
        document.getElementById('text').innerHTML = 'Slightly More';
        chance--;
        document.getElementById('live').innerHTML = 'Your Chance ' + chance;
    } else if (myNumber == random) {
        alert('Victory...' );
        document.location.reload()
    } else {
        document.getElementById('text').innerHTML = 'Enter only 1-10';
    }
    clear()
    if (chance === 0) {
        alert('You Lost! Random number is ' + random );
        return
    }

}










