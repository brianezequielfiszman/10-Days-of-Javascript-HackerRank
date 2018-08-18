const res = document.getElementById("res");

function button0() { res.innerHTML += 0; }
function button1() { res.innerHTML += 1; }
function buttonClr() { res.innerHTML = ''; }
function buttonSum() { res.innerHTML += '+'; }
function buttonSub() { res.innerHTML += '-'; }
function buttonMul() { res.innerHTML += '*'; }
function buttonDiv() { res.innerHTML += '/'; }

function buttonEql() {
    const oReg = /[^\+|\-|\*|\/]/;
    const nReg = /\+|\-|\*|\//;
    let o = res.innerText.split(oReg);
    let eFlag =
    nReg.test(o[o.length - 1]) ||
    o.some((o, i) => (i === 0 && nReg.test(o)) || o.length > 1);
    
    if(!eFlag) {
        const n = res.innerText.split(nReg).map(n => parseInt(n, 2));
        o = o.filter(e => nReg.test(e)).map((e, i) => n[i] + e)
        o.push(n[n.length - 1]);
        o = o.toString().replace(/,/g, '');
        
        res.innerText = eval(o).toString(2);
    } else {
        mathError();
    }
}

function mathError() {
    throw "Math Error!";
}
