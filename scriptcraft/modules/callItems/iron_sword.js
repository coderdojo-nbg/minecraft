var items = require("items");

function iron_sword(event) {
    echo(event.player, "A iron sword drops a melon");
    var clickedBlock = event.clickedBlock;
    
    if(clickedBlock === null) {
        echo(event.player, "No fruit if you hit air!")
        return;
    } 
    clickedBlock.world.dropItem(clickedBlock.location, items.melon(1));
    
    
}

module.exports = iron_sword;