document.getElementById("password-input").addEventListener("keyup",(e)=>{
    let value = 0;
    if([...document.getElementById("password-input").value.matchAll(/[0-9]/g)].length){
        value+=25
        console.log("0-9")
    }
    if([...document.getElementById("password-input").value.matchAll(/[a-z]/g)].length){
        value+=25
        console.log("az")
    }
    if([...document.getElementById("password-input").value.matchAll(/[A-Z]/g)].length){
        value+=25
        console.log("a-z")
    }
    if([...document.getElementById("password-input").value.matchAll( /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)].length){
        value+=12.5
        console.log("special")
    }
    if(document.getElementById("password-input").value.length){
        value+=12.5
        console.log("special")
    }
    Array.from(document.getElementsByClassName("password-bar")).forEach((bar)=>{
        bar.style = `--width:${value}%`
    })
})//Bruh1!