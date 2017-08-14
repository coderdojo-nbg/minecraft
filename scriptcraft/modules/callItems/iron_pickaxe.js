var fireworks = require("fireworks");

function iron_pickaxe(event) {
    echo(event.player, "A iron spade causes firework");
    var clickedBlock = event.clickedBlock;
    
    if(clickedBlock === null) {
        echo(event.player, "No firework you hit air!")
        return;
    } 
    fireworks.firework(clickedBlock.location)
    
    
}

module.exports = iron_pickaxe;