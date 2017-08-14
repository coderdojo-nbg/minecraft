/*
all function with associated functions must be registered in mod callItems.js
as an object prob
*/
var callItems = require("callItems/callItems")


function callConnectedFunc(event) {
  // get if left or right hand was used to prevent calling when mining
  var action = event.getAction().toString();
  
  // get which item was used (might return null)
  var item = event.item;
  
  // check if main hand or off hand was used because 
  // playerInteract will be called for both hands 
  // if main hand has no action associated
  var hand = event.getHand().toString();
 
  // if either item is null or left click or off hand was used
  // return true, so that no function will be called
  var doNothing = event.item === null || action === "LEFT_CLICK_BLOCK" || hand === "OFF_HAND"
  
  // if item was used with right hand, try to call function
  if (!doNothing) {
    //get item name as lower case string
    var itemName = item.type.toString().toLowerCase();
    //remove underscores/dashes for display
    var displayName = itemName.replace(/[_-]/g, " ");
    echo(event.player, "Trying to call function for " + displayName);

    // check if function is associated with item
    if(typeof callItems[itemName] === "function") {
      // call function and pass through event
      callItems[itemName].call(this, event);
    } else {
      echo(event.player, "No such function.")
    }
    
  }
}

events.playerInteract(callConnectedFunc)

