let main = document.querySelector("main");

let joke1 ="what has ear but cant hear? A cornfield.",
    joke2 = "What is fast, loud and crunchy? A rocket chip!",
    joke3 = "What did the Dalmation say after lunch? That hit the spot!";

let template = "<h1>My jokes</h1><u1><li>" + joke1 +"</li><li>" + joke2
                + "</li><li>" + joke3 + "</li><u1>";
main.innerHTML = template;

let ptag = document.createElement("P");
ptag.innerHTML = " Thats all folks!";
document.body.appendChild(ptag);
