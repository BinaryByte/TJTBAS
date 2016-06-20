var rooms = [];
var inventory = [];
function room(name,id, text){
  this.name = name;
  this.id = id;
  this.inventory = [];
  this.accessibleRoomsId = [];
  this.placesName = [];
  rooms.push(this);
  this.solveItems = [];
  this.displayText = text;
  this.solvedText = "";
  this.solved = true;
}
function roomReader (roomId){
  for(i = 0; i < rooms.length; i++){
    if(rooms[i].id === roomId){
      console.log("TJTBAS: Room Found!");
      recentRoom = rooms[i];
      showRoom(rooms[i]);
    } else {
      console.warn("TJTBAS: Room Not found!");
    }
  }
}
function showRoom(room){
  document.body.innerHTML = room.displayText + " The room contains " + room.inventory + ".";
  gotoRoom(room);
  console.log("TJTBAS: Showing room description...");
  takeItems(room);
}
function gotoRoom(rooms){
  for (i = 0; i < rooms.accessibleRoomsId.length; i++){
    console.log("TJTBAS: Finding available rooms...");
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"roomReader(" + rooms.accessibleRoomsId[i] +")\">" + rooms.placesName[i] +"</button></p>";
  }
}
function takeItems(room){
  document.body.innerHTML = document.body.innerHTML + "<p>What items would you like to take?</p>";
  for(i = 0; i < room.inventory.length; i++){
    console.log("TJTBAS: Finding inventory items...");
    document.body.innerHTML = document.body.innerHTML + " <p><button onClick = \"inventoryAdd(room1.inventory[" + i + "])\">" + room.inventory[i] + "</button></p>";
  }
}
function inventoryAdd(roomInventoryItem){
  inventory.push("" + roomInventoryItem + "");
  console.log("TJTBAS:" + roomInventoryItem + " successfully added.");
}
