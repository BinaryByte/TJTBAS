var TJTBAS = {
  rooms: [],
  inventory: [],
  room: function(name, id, text){
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
  },
  roomReader: function(id){
    for(i = 0; i < this.rooms.length; i++){
      if(this.rooms[i].id === roomId){
        console.log("TJTBAS: Room Found!");
        this.recentRoom = rooms[i];
        this.showRoom(rooms[i]);
      } else {
        console.warn("TJTBAS: Room Not found!");
      }
    }
  },
  showRoom: function(room){
    document.body.innerHTML = this.room.displayText + " The room contains " + this.room.inventory + ".";
    this.gotoRoom(room);
    console.log("TJTBAS: Showing room description...");
    this.takeItems(room);
  },
  gotoRoom: function(rooms){
    for (i = 0; i < this.rooms.accessibleRoomsId.length; i++){
      console.log("TJTBAS: Finding available rooms...");
      document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"TJTBAS.roomReader(" + rooms.accessibleRoomsId[i] +")\">" + rooms.placesName[i] +"</button></p>";
    }
  },
  takeItems: function(room){
    document.body.innerHTML = document.body.innerHTML + "<p>What items would you like to take?</p>";
    for(i = 0; i < room.inventory.length; i++){
      console.log("TJTBAS: Finding inventory items...");
      document.body.innerHTML = document.body.innerHTML + " <p><button onClick = \"TJTBAS.inventoryAdd(room1.inventory[" + i + "])\">" + this.room.inventory[i] + "</button></p>";
    }
  },
  inventoryAdd: function(roomInventoryItem){
    this.inventory.push("" + roomInventoryItem + "");
    console.log("TJTBAS:" + roomInventoryItem + " successfully added.");
  }

}
