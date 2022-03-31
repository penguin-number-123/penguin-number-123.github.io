input = document.getElementById("username")
function uuid(){
    document.getElementById("uuid").innerHTML = console.log(crypto.createHash('sha512').update(input.value).digest('hex'));
}