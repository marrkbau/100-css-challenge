const a = document.querySelector('.content');
a.onclick = () => {
    if(a.getAttribute("status") === "0" || a.getAttribute("status") === "init")
        a.setAttribute("status", "1");
    else
        a.setAttribute("status", "0");
}
