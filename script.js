window.addEventListener("load", async () => {
    await sleep(2000);
    document.getElementById("loader").style.opacity = "0";
    await sleep(1000);
    document.getElementById("loader").style.display = "none";
})

const sleep = ms => new Promise(r => setTimeout(r, ms));