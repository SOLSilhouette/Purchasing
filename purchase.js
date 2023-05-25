//Prince SK ['Silhouette'] DID!
var yourItems = [];
var total_cost = 0;

//FIRST ITEM
var cybutter_state = false;

document.querySelector("#cybutter").addEventListener("click", function() {
    if(cybutter_state) {
        document.querySelector("#cybutter").style.transition = "height 0.25s";
        document.querySelector("#cybutter").style.height = "170px";
        document.querySelector("#cybutter_num").style.display = "none";
        document.querySelector("#cybutter_done").style.borderRadius = "10px";

        cybutter_state = false;
    }

    else {
        document.querySelector("#cybutter").style.transition = "height 0.25s";
        document.querySelector("#cybutter").style.height = "80px";
        document.querySelector("#cybutter_num").style.display = "inline-block";
        document.querySelector("#cybutter_done").style.borderRadius = "0 10px 10px 0";

        cybutter_state = true;
    }
});

document.querySelector("#cybutter_num").addEventListener("input", function() {
   if (document.querySelector("#cybutter_num").value < 1) {
        document.querySelector("#cybutter_num").style.borderRadius = "10px";
        document.querySelector("#cybutter_done").style.display = "none";
    }

    else {
        document.querySelector("#cybutter_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#cybutter_done").style.display = "inline-block";
    }
});

document.querySelector("#cybutter_done").addEventListener("click", function() {
    var cybutter_list = "[" + document.querySelector("#cybutter_name").innerHTML + "(x" + document.querySelector("#cybutter_num").value + ")" + " for " + document.querySelector("#cybutter_price").innerHTML + "]";
    yourItems.push(cybutter_list);
    var cybutter_price = document.querySelector("#cybutter_price").innerHTML.slice(3,-1);
    var cybutter_priceNum = Number(cybutter_price).toFixed(2) * document.querySelector("#cybutter_num").value;
    total_cost += cybutter_priceNum;
    document.querySelector("#cybutter_panel").style.display = "none";

    console.log(cybutter_list);
    console.log(yourItems.join("\n"));
    console.log(cybutter_priceNum.toFixed(2));
    console.log("Total Cost = GH¢" + total_cost.toFixed(2));
});
//FIRST ITEM



//SECOND ITEM
var cyshades_state = false;

document.querySelector("#cyshades").addEventListener("click", function() {
    if(cyshades_state) {
        document.querySelector("#cyshades").style.transition = "height 0.25s";
        document.querySelector("#cyshades").style.height = "170px";
        document.querySelector("#cyshades_num").style.display = "none";
        document.querySelector("#cyshades_done").style.borderRadius = "10px";

        cyshades_state = false;
    }

    else {
        document.querySelector("#cyshades").style.transition = "height 0.25s";
        document.querySelector("#cyshades").style.height = "80px";
        document.querySelector("#cyshades_num").style.display = "inline-block";
        document.querySelector("#cyshades_done").style.borderRadius = "0 10px 10px 0";

        cyshades_state = true;
    }
});

document.querySelector("#cyshades_num").addEventListener("input", function() {
   if (document.querySelector("#cyshades_num").value < 1) {
        document.querySelector("#cyshades_num").style.borderRadius = "10px";
        document.querySelector("#cyshades_done").style.display = "none";
    }

    else {
        document.querySelector("#cyshades_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#cyshades_done").style.display = "inline-block";
    }
});

document.querySelector("#cyshades_done").addEventListener("click", function() {
    var cyshades_list = "[" + document.querySelector("#cyshades_name").innerHTML + "(x" + document.querySelector("#cyshades_num").value + ")" + " for " + document.querySelector("#cyshades_price").innerHTML + "]";
    yourItems.push(cyshades_list);
    var cyshades_price = document.querySelector("#cyshades_price").innerHTML.slice(3,-1);
    var cyshades_priceNum = Number(cyshades_price).toFixed(2) * document.querySelector("#cyshades_num").value;
    total_cost += cyshades_priceNum;
    document.querySelector("#cyshades_panel").style.display = "none";

    console.log(cyshades_list);
    console.log(yourItems.join("\n"));
    console.log(cyshades_priceNum.toFixed(2));
    console.log("Total Cost = GH¢" + total_cost.toFixed(2));
});
//SECOND ITEM



//THIRD ITEM
var cysilver_state = false;

document.querySelector("#cysilver").addEventListener("click", function() {
    if(cysilver_state) {
        document.querySelector("#cysilver").style.transition = "height 0.25s";
        document.querySelector("#cysilver").style.height = "170px";
        document.querySelector("#cysilver_num").style.display = "none";
        document.querySelector("#cysilver_done").style.borderRadius = "10px";

        cysilver_state = false;
    }

    else {
        document.querySelector("#cysilver").style.transition = "height 0.25s";
        document.querySelector("#cysilver").style.height = "80px";
        document.querySelector("#cysilver_num").style.display = "inline-block";
        document.querySelector("#cysilver_done").style.borderRadius = "0 10px 10px 0";

        cysilver_state = true;
    }
});

document.querySelector("#cysilver_num").addEventListener("input", function() {
   if (document.querySelector("#cysilver_num").value < 1) {
        document.querySelector("#cysilver_num").style.borderRadius = "10px";
        document.querySelector("#cysilver_done").style.display = "none";
    }

    else {
        document.querySelector("#cysilver_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#cysilver_done").style.display = "inline-block";
    }
});

document.querySelector("#cysilver_done").addEventListener("click", function() {
    var cysilver_list = "[" + document.querySelector("#cysilver_name").innerHTML + "(x" + document.querySelector("#cysilver_num").value + ")" + " for " + document.querySelector("#cysilver_price").innerHTML + "]";
    yourItems.push(cysilver_list);
    var cysilver_price = document.querySelector("#cysilver_price").innerHTML.slice(3,-1);
    var cysilver_priceNum = Number(cysilver_price).toFixed(2) * document.querySelector("#cysilver_num").value;
    total_cost += cysilver_priceNum;
    document.querySelector("#cysilver_panel").style.display = "none";

    console.log(cysilver_list);
    console.log(yourItems.join("\n"));
    console.log(cysilver_priceNum.toFixed(2));
    console.log("Total Cost = GH¢" + total_cost.toFixed(2));
});
//THIRD ITEM



//FOURTH ITEM
var cyowl_state = false;

document.querySelector("#cyowl").addEventListener("click", function() {
    if(cyowl_state) {
        document.querySelector("#cyowl").style.transition = "height 0.25s";
        document.querySelector("#cyowl").style.height = "170px";
        document.querySelector("#cyowl_num").style.display = "none";
        document.querySelector("#cyowl_done").style.borderRadius = "10px";

        cyowl_state = false;
    }

    else {
        document.querySelector("#cyowl").style.transition = "height 0.25s";
        document.querySelector("#cyowl").style.height = "80px";
        document.querySelector("#cyowl_num").style.display = "inline-block";
        document.querySelector("#cyowl_done").style.borderRadius = "0 10px 10px 0";

        cyowl_state = true;
    }
});

document.querySelector("#cyowl_num").addEventListener("input", function() {
   if (document.querySelector("#cyowl_num").value < 1) {
        document.querySelector("#cyowl_num").style.borderRadius = "10px";
        document.querySelector("#cyowl_done").style.display = "none";
    }

    else {
        document.querySelector("#cyowl_num").style.borderRadius = "10px 0 0 10px";
        document.querySelector("#cyowl_done").style.display = "inline-block";
    }
});

document.querySelector("#cyowl_done").addEventListener("click", function() {
    var cyowl_list = "[" + document.querySelector("#cyowl_name").innerHTML + "(x" + document.querySelector("#cyowl_num").value + ")" + " for " + document.querySelector("#cyowl_price").innerHTML + "]";
    yourItems.push(cyowl_list);
    var cyowl_price = document.querySelector("#cyowl_price").innerHTML.slice(3,-1);
    var cyowl_priceNum = Number(cyowl_price).toFixed(2) * document.querySelector("#cyowl_num").value;
    total_cost += cyowl_priceNum;
    document.querySelector("#cyowl_panel").style.display = "none";

    console.log(cyowl_list);
    console.log(yourItems.join("\n"));
    console.log(cyowl_priceNum.toFixed(2));
    console.log("Total Cost = GH¢" + total_cost.toFixed(2));
});
//FOURTH ITEM



//NEXT
document.querySelector("#next").addEventListener("click", function() {
    if(yourItems.length > 0) {
        document.querySelector("#main").style.display = "none";
        document.querySelector("#next").style.display = "none";
        document.querySelector("#head").style.display = "none";
        document.querySelector("#form").style.display = "block";
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        document.querySelector("#items").innerHTML = yourItems.join("<br><br>");
        document.querySelector("#input_items").value = yourItems.join("\n\n");
        document.querySelector("#total_cost").value = "GH¢" + total_cost.toFixed(2);
    }

    else {
        alert("You haven't selected anything.");
    }
});
//NEXT

function formsub() {
    if (document.querySelector("#site").checked == true) {
        alert("You'll pay upon delivery");
    }

    else if (document.querySelector("#momo").checked == true) {
        var momo_num = prompt("Send the money to this MTN number: 0123456789 \n Type the number in the box below, COPY IT and confirm to continue.");
        
        while(momo_num != "0123456789") {
            momo_num = prompt("Send the money to this MTN number: 0123456789 \n Type the number in the box below, COPY IT and confirm to continue. \n Make sure it's the same number in the box before continuing.");
        }
    }

    document.querySelector("#total_cost").disabled = false;
    document.querySelector("#form").style.display = "none";
    
    setTimeout(() => {
        document.querySelector("#refresh").style.display = "block";
    }, 5000);
}