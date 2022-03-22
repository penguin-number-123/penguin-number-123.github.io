input = document.getElementById('input');
output = document.getElementById('output');
player = {
    inventory:{}
};
action_words = [["walk to","move to"],["look at", "gaze at", "investigate","observe"]];
input_val = ""
input.addEventListener("keyup",function(event) {
    if(event.keyCode == 13){
        if(input.value &&input.value.replace(/\s/g, "").length){
            actions = input.value.replace(/\bthe\b/,"").replace(/ +/," ").split(" ");
            console.log(actions)
            action = actions[0]
            object = actions[1]
            if(actions.length ==3){
                number = parseInt(actions[2])
            }
            output.insertAdjacentHTML('afterend',`<br /> > You <span style= "color: yellow";>${action}</span> <span style = "color: lime";>${object}</span><br />`);
            input_val = input.value.replace(/ +/," ");
            input.value = "";
            
        }
    }
})
