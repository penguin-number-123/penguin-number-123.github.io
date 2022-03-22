t = ""
output = document.getElementById("output")


try {
    t = fs.readFileSync('./game.pussl', 'utf8')
  console.log(t)
} catch (err) {
  console.error(err)
}
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