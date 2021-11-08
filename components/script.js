function navbar() {
    return ` <nav>
    <li><a href="./index.html">Menu</a></li>
    <li><a href="./login.html">login</a></li>
    <li><a href="#">Sign Up</a></li>
</nav>`
}

function getdata(url) {
    let res = await fetch(url);
    let data await res.json();
}


export { navbar };