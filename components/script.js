function navbar() {
    return ` <nav>
    <li><a href="./index.html">Menu</a></li>
    <li><a href="./login.html">login</a></li>
    <li><a href="./signup.html">signup</a></li>
</nav>`
}

async function getdata(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}


export { navbar, getdata };