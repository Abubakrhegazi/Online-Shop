const promos = ["EC10", "EC15", "EC20"];
let digits = 1;
function checkPromo() {
    let bttn = document.getElementsByClassName('promo-input')[0];
    let promo = bttn.value.trim();

    let flag = false;
    let dis = 0;
    for (let i = 0; i < promos.length; i++) {
        if (promo == promos[i]) {
            let Sdis = promos[i].substring(promos[i].length - 2);
            dis = parseInt(Sdis);
            flag = true;
            digits = 2;
            break;

        }
    }

    if (flag) {
        document.getElementById('check').innerHTML = "-$" + dis;
    }
    else {
        document.getElementById('check').innerHTML = "false";
    }
}


function add() {
    let itquant = document.getElementsByClassName('item-quantity');
    for (let i = 0; i < itquant.length; i++) {
        let st = itquant[i].innerHTML;
        let no = parseInt(st);
        itquant[i].innerHTML = no + 1;
    }
    let mst = document.getElementById('money-left');
    let mno = parseInt(mst.innerHTML);
    mst.innerHTML = mno - 1;


    if (mno == 1) {
        document.getElementById('free-ship-div').innerHTML = ('Congrats you now have free shipping!');
        let discount = document.getElementById('check').textContent;
        Idis = parseInt(discount.substring(discount.length - digits));
        let diss = document.getElementById('check');
        d = Idis + 2;
        diss.innerHTML = "-$" + d;
    }
}

function sub() {
    let itquant = document.getElementsByClassName('item-quantity');
    for (let i = 0; i < itquant.length; i++) {
        let st = itquant[i].innerHTML;
        let no = parseInt(st);
        if (no > 1) {
            itquant[i].innerHTML = no - 1;
        }
    }

    let noOfItems = document.getElementsByClassName('item-quantity')[0];

    if (noOfItems == "9") {
        document.getElementById('free-ship-div').outerHTML = `<div id="free-ship-div">You're <p id="money-left">9 </p> items away from FREE SHIPPING!</div>`;
    }
    // else {
    //     let mst = document.getElementById('money-left');
    //     let mno = parseInt(mst.innerHTML);
    //     mst.innerHTML = mno + 1;
    // }

}
