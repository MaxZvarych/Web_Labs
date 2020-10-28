let popup = document.getElementById('popup'),
    popupToggle=document.getElementById('submit_btn'),
    popupClose=document.querySelector('.close-popup');

    popupToggle.onclick = function() {
        let filmname = document.getElementById("typedfilmname").value,
            foundyear= document.getElementById("typedrewardyear").value,
            foundduration = document.getElementById("typedduration").value,
            foundresponses = document.getElementById("typed_num_of_responces").value;
        if( filmname=="" || foundyear >=2021 || foundyear<= 1895 
        || foundduration <=3 || foundduration>=600 || foundresponses <0 ) {
        popup.style.display= "block";
        }
        else {
            popup.style.display= "none"
            clearInputs();
        }
    }

    function clearInputs () {
        document.getElementById("typedfilmname").value= "";
        document.getElementById("typedrewardyear").value= "";
        document.getElementById("typedduration").value= "";
        document.getElementById("typed_num_of_responces").value= "";

    }

    popupClose.onclick = function () {
        popup.style.display= "none";
    }

    window.onclick= function (event) {
        if(event.target==popup){
            popup.style.display="none";
        }
    }