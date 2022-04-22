player = {
    number:0,
    clickpower:1
}
load();
function click(){
    player.number+=player.clickpower;
    document.getElementById("count").innerHTML = player.number;
    console.log("clicked")
}
document.getElementById("click").addEventListener("onclick", click);
function save(){
    window.localStorage["player"] = JSON.stringify(player);
}
function load(){
    player = JSON.parse(window.localStorage["player"]);
}
function export_game(){
    //nothing here...
}
function load_game(){
    //also nothing here...
}