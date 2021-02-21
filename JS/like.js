on = false;

function like() {

    if(on == false){
        on = true;
        document.getElementById('1').src='../IMG/icon/yes-like.png';
    }
    else
    {
        document.getElementById('1').src='../IMG/icon/no-like.png';
        on = false;
    }
}