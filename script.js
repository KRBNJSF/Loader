window.addEventListener("load", async () => {
    await sleep(2000);
    document.getElementById("loader").style.opacity = "0";
    await sleep(1000);
    document.getElementById("loader").style.display = "none";
})

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

let item = document.getElementsByClassName("item");
setCookie("value", 0, 60);

const addToClick = (clicks) => {
    clicks = getCookie("value");
    clicks = parseInt(clicks + 1);
    console.log(clicks);
    return parseInt(clicks);
}

let cookies = document.cookie = "name=user; test=0";
console.log(cookies);


item.onclick = addToClick(0);

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
    let value = getCookie("value");
    let name = getCookie("name");
    if (value != "") {
        /*alert("Welcome again " + name + ": " + value);*/
    } else {
        value = prompt("Enter value:", "");
        if (value != "" && value != null) {
            setCookie("username", value, 365);
        }
    }
}