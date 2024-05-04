const promos = ["EC10", "EC15", "EC20"];

function checkPromo() {
    let bttn = document.getElementsByClassName('promo-input')[0];
    let promo = bttn.value.trim();

    let flag = false;
    let dis = 0;
    for (let i = 0; i < promos.length; i++) {
        if(promo == promos[i]){
            let Sdis = promos[i].substring(promos[i].length - 2);
            dis = parseInt(Sdis);
            flag = true;
            break;

        }
    }

    if(flag){
        document.getElementById('check').innerHTML = "-$" + dis;
    }
    else{
        document.getElementById('check').innerHTML = "false";
    }
}