//Prince SK ['Silhouette'] DID!
var yourItems = [];

//FIRST ITEM
var cybutter_state = false;

document.getElementById("cybutter").addEventListener("click", function() {
    if(cybutter_state) {
        document.getElementById("cybutter").style.transition = "height 0.25s";
        document.getElementById("cybutter").style.height = "170px";
        document.getElementById("cybutter_num").style.display = "none";
        //document.getElementById("cybutter_done").style.display = "none";

        cybutter_state = false;
    }

    else {
        document.getElementById("cybutter").style.transition = "height 0.25s";
        document.getElementById("cybutter").style.height = "80px";
        document.getElementById("cybutter_num").style.display = "inline-block";
        //document.getElementById("cybutter_done").style.display = "none";

        cybutter_state = true;
    }
});

document.getElementById("cybutter_num").addEventListener("input", function() {
   if(document.getElementById("cybutter_num").value < 1) {
        document.getElementById("cybutter_done").style.display = "none";
    }

    else {
        document.getElementById("cybutter_done").style.display = "inline-block";
    }
});

document.getElementById("cybutter_done").addEventListener("click", function() {
    var cybutter_list = document.getElementById("cybutter_name").innerHTML + "(x" + document.getElementById("cybutter_num").value + ")" + " for " + document.getElementById("cybutter_price").innerHTML;
    yourItems.push(cybutter_list);
    document.getElementById("cybutter_panel").style.display = "none";

    console.log(document.getElementById("cybutter_name").innerHTML + "(x" + document.getElementById("cybutter_num").value + ")" + " for " + document.getElementById("cybutter_price").innerHTML);
    console.log(yourItems);
});
//FIRST ITEM



//SECOND ITEM
var cyshades_state = false;

document.getElementById("cyshades").addEventListener("click", function() {
    if(cyshades_state) {
        document.getElementById("cyshades").style.transition = "height 0.25s";
        document.getElementById("cyshades").style.height = "170px";
        document.getElementById("cyshades_num").style.display = "none";
        //document.getElementById("cyshades_done").style.display = "none";

        cyshades_state = false;
    }

    else {
        document.getElementById("cyshades").style.transition = "height 0.25s";
        document.getElementById("cyshades").style.height = "80px";
        document.getElementById("cyshades_num").style.display = "inline-block";
        //document.getElementById("cyshades_done").style.display = "none";

        cyshades_state = true;
    }
});

document.getElementById("cyshades_num").addEventListener("input", function() {
   if(document.getElementById("cyshades_num").value < 1) {
        document.getElementById("cyshades_done").style.display = "none";
    }

    else {
        document.getElementById("cyshades_done").style.display = "inline-block";
    }
});

document.getElementById("cyshades_done").addEventListener("click", function() {
    var cyshades_list = document.getElementById("cyshades_name").innerHTML + "(x" + document.getElementById("cyshades_num").value + ")" + " for " + document.getElementById("cyshades_price").innerHTML;
    yourItems.push(cyshades_list);
    document.getElementById("cyshades_panel").style.display = "none";

    console.log(document.getElementById("cyshades_name").innerHTML + "(x" + document.getElementById("cyshades_num").value + ")" + " for " + document.getElementById("cyshades_price").innerHTML);
    console.log(yourItems);
});
//SECOND ITEM



//THIRD ITEM
var cysilver_state = false;

document.getElementById("cysilver").addEventListener("click", function() {
    if(cysilver_state) {
        document.getElementById("cysilver").style.transition = "height 0.25s";
        document.getElementById("cysilver").style.height = "170px";
        document.getElementById("cysilver_num").style.display = "none";
        //document.getElementById("cysilver_done").style.display = "none";

        cysilver_state = false;
    }

    else {
        document.getElementById("cysilver").style.transition = "height 0.25s";
        document.getElementById("cysilver").style.height = "80px";
        document.getElementById("cysilver_num").style.display = "inline-block";
        //document.getElementById("cysilver_done").style.display = "none";

        cysilver_state = true;
    }
});

document.getElementById("cysilver_num").addEventListener("input", function() {
   if(document.getElementById("cysilver_num").value < 1) {
        document.getElementById("cysilver_done").style.display = "none";
    }

    else {
        document.getElementById("cysilver_done").style.display = "inline-block";
    }
});

document.getElementById("cysilver_done").addEventListener("click", function() {
    var cysilver_list = document.getElementById("cysilver_name").innerHTML + "(x" + document.getElementById("cysilver_num").value + ")" + " for " + document.getElementById("cysilver_price").innerHTML;
    yourItems.push(cysilver_list);
    document.getElementById("cysilver_panel").style.display = "none";

    console.log(document.getElementById("cysilver_name").innerHTML + "(x" + document.getElementById("cysilver_num").value + ")" + " for " + document.getElementById("cysilver_price").innerHTML);
    console.log(yourItems);
});
//THIRD ITEM



//FOURTH ITEM
var cyowl_state = false;

document.getElementById("cyowl").addEventListener("click", function() {
    if(cyowl_state) {
        document.getElementById("cyowl").style.transition = "height 0.25s";
        document.getElementById("cyowl").style.height = "170px";
        document.getElementById("cyowl_num").style.display = "none";
        //document.getElementById("cyowl_done").style.display = "none";

        cyowl_state = false;
    }

    else {
        document.getElementById("cyowl").style.transition = "height 0.25s";
        document.getElementById("cyowl").style.height = "80px";
        document.getElementById("cyowl_num").style.display = "inline-block";
        //document.getElementById("cyowl_done").style.display = "none";

        cyowl_state = true;
    }
});

document.getElementById("cyowl_num").addEventListener("input", function() {
   if(document.getElementById("cyowl_num").value < 1) {
        document.getElementById("cyowl_done").style.display = "none";
    }

    else {
        document.getElementById("cyowl_done").style.display = "inline-block";
    }
});

document.getElementById("cyowl_done").addEventListener("click", function() {
    var cyowl_list = document.getElementById("cyowl_name").innerHTML + "(x" + document.getElementById("cyowl_num").value + ")" + " for " + document.getElementById("cyowl_price").innerHTML;
    yourItems.push(cyowl_list);
    document.getElementById("cyowl_panel").style.display = "none";

    console.log(document.getElementById("cyowl_name").innerHTML + "(x" + document.getElementById("cyowl_num").value + ")" + " for " + document.getElementById("cyowl_price").innerHTML);
    console.log(yourItems);
});
//FOURTH ITEM



//NEXT
document.getElementById("next").addEventListener("click", function() {
    if(yourItems.length > 0) {
        document.getElementById("main").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("head").style.display = "none";
        document.getElementById("form").style.display = "block";
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        document.getElementById("items").value = yourItems;
    }
});

var next_state = false;

document.getElementById("next").addEventListener("mouseenter", function() {
    if(yourItems.length < 1) {
        if(next_state) {
            document.getElementById("next").style.transition = "margin-left 0.25s";
            document.getElementById("next").style.marginLeft = "10px";
    
            next_state = false;
        }
    
        else {
            document.getElementById("next").style.transition = "margin-left 0.25s";
            document.getElementById("next").style.marginLeft = "100px";
    
            next_state = true;
        }
    }
});
//NEXT

function formsub() {
    document.getElementById("items").disabled = false;
}