// Create the array of buttons.
let btns = Array.from(document.querySelectorAll("#btns > button")).reverse();

// Swap the buttons so I can exchange their values in a clockwise fashion :V
[btns[3], btns[5], btns[2], btns[1]] = [btns[5], btns[3], btns[1], btns[2]];
[btns[3], btns[0]] = [btns[0], btns[3]];

// Remove the #btn5
btns.splice(4, 1);

// Function with reduce.
const rotateClockwise = () => 
    btns.reduce((prev, val) => {
        [prev.innerHTML, val.innerHTML] = [val.innerHTML, prev.innerHTML];
        return val;
    });

