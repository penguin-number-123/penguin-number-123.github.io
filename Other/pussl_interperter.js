t = `Scene{
    prompt{
        place:"Interview Room";
        text:"Welcome, Penguin. You have been selected into Penguin Hyperion Labs's interview. We are seeking for individials that are able to solve problems swiftly. Your trial begins now."
    }
    room main{
        prompt{
            place:"A hotel room"
        }
        sub sub1{
            puzzle "puzzle1" = {
               on_word(["enter","type","punch in","input"]){
                   text:"A screen with a keypad lies on a door. It accepts a three digit code."
                   code:{
                       if(arg[1]=="123"){
                           complete
                       }
                   }
                   completed:"The keypad makes a click and the door swings open"

               }    
            }
            interactive "door"
            objects = {
                puzzle1,
                clock:"The time of the clock says 11:00 AM."
            }
        }
        
        
    }
}
init`
output = document.getElementById("output")

rooms = []
prompts = {}

console.log(t)
lines = t.split("\n")
level = []
for(let i = 0; i<lines.length; i++){
    if(!lines[i].replace(" ","").startsWith("#")){
        if(lines[i].includes("Scene")){
            level.push("scene")
        }
        if(lines[i].includes("room")){
            level.push("room")
            room_obj = {}
            room_obj[lines[i].split(" ").match(/(["'])(?:(?=(\\?))\2.)*?\1/)] = [];
            rooms.push(room_obj) // room data
        }
        if(lines[i].includes("prompt")){
            while(!lines[i].includes("}")){
                if(["scene","room","sub"].includes(level[-1])){
                    type = (["place","prompt","text","description"].includes(lines[i].split(":")[0]))?lines[i].split(":")[0]:"";
                    if(!type){break;}
                    text = lines[i].match(/(["'])(?:(?=(\\?))\2.)*?\1/)
                    prompt_obj = {}
                    prompt_obj[type] = text
                    prompts[level[-1]] = prompt_obj // prompt data
                }
                i++
            }
        }
        if(lines[i].includes("init")){
            //scene prompt
            for(i in [...prompts["scene"]]){
                output.insertAdjacentHTML("afterend",i);
                setTimeout(function(){},10);
            }
        }
        if(lines[i].includes("}")){ 
            level.pop() //move up one level
        }
    }
    //remaining is comment
}