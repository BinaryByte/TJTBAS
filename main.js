var TAS = {
  rooms: [],
  inventory: [],
  room: function(name, id, text){
    this.name = name;
    this.id = id;
    this.inventory = [];
    this.accessibleRoomsId = [];
    this.placesName = [];
    TAS.rooms.push(this);
    this.solveItems = [];
    this.displayText = text;
    this.solvedText = "";
    this.solved = true;
  },
  roomReader: function(id){
    for(i = 0; i < TAS.rooms.length; i++){
      if(TAS.rooms[i].id === id){
        console.log("TAS: Room Found!");
        TAS.showRoom(TAS.rooms[i]);
      } else {
        console.warn("TAS: Room Not found!");
      }
    }
  },
  showRoom: function(room){
    document.body.innerHTML = room.displayText + " The room contains " + room.inventory + ".";
    console.log("TAS: Showing room description...");
    TAS.takeItems(room);
    TAS.gotoRoom(room);
  },
  gotoRoom: function(room){
    for (i = 0; i < room.accessibleRoomsId.length; i++){
      console.log("TAS: Finding available rooms...");
      document.body.innerHTML += "<p>Here is a list of available rooms that you can go to:</p>";
      document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"TAS.roomReader(" + room.accessibleRoomsId[i] +")\">" + room.placesName[i] +"</button></p>";
    }
  },
  //Warning! INVENTORY SYSTEM IS NOT COMPLETE. DO NOT USE.
  takeItems: function(room){
    document.body.innerHTML = document.body.innerHTML + "<p>What items would you like to take?</p>";
    for(i = 0; i < room.inventory.length; i++){
      console.log("TAS: Finding inventory items...");
      document.body.innerHTML = document.body.innerHTML + " <p><button onClick = \"TAS.inventoryAdd(" + room + "," + i + "])\">" + room.inventory[i] + "</button></p>";
    }
  },
  inventoryAdd: function(room, roomInventoryItemId){
    console.log("TAS: Attempting to add item id " + roomInventoryItemId + " from " + room)
    room.inventory.splice(room.inventory[roomInventoryItemId])
    TAS.inventory.push("" + room.inventory[roomInventoryItemId] + "");
    console.log("TAS:" + room.inventory[roomInventoryItemId] + " successfully added.");
  }

}
