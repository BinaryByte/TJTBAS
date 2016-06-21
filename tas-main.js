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
    console.log("TAS: Room " + name + " Sucessfully created!");
  },
  roomReader: function(id){
    console.log("Searching for room...");
    for(i = 0; i < TAS.rooms.length; i++){
      if(TAS.rooms[i].id === id){
        console.log("TAS: Room Found!");
        TAS.showRoom(TAS.rooms[i]);
      } else if (TAS.rooms.length === i){
        console.error("TAS: Room Not found!");
      } else {
        console.log("TAS: Not this room...");
      }
    }
  },
  showRoom: function(room){
    console.log("TAS: Attempting to show room...");
    if(room.inventory.length === 0){
      document.body.innerHTML += room.displayText + " The room contains nothing.";
    } else {
    document.body.innerHTML = room.displayText + " The room contains " + room.inventory + ".";
  }
    console.log("TAS: Showing room description...");
    TAS.takeItems(room);
    TAS.gotoRoom(room);
  },
  gotoRoom: function(room){
    for (i = 0; i < room.accessibleRoomsId.length; i++){
      console.log("TAS: Finding available rooms...");
      document.body.innerHTML += "<p>Here is a list of available rooms that you can go to:</p>";
      document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"TAS.roomReader(" + room.accessibleRoomsId[i] +")\">" + room.placesName[i] +" </button></p>";
    }
  },
  takeItems: function(room){
    if(room.inventory.length === 0){
      document.body.innerHTML += "<p>There's no items to collect here.</p>";
    } else {
      document.body.innerHTML = document.body.innerHTML + "<p>What items would you like to take?</p>";
    }
    for(i = 0; i < room.inventory.length; i++){
      console.log("TAS: Finding inventory items...");
      document.body.innerHTML = document.body.innerHTML + " <p><button onClick = \"TAS.inventoryAdd(" + room.id + ", " + i + ")\">" + room.inventory + "</button></p>";
    }
  },
  inventoryAdd: function(id, item){
    for(i = 0; i < TAS.rooms.length; i++){
      if(TAS.rooms[i].id === id){
        console.log("TAS: Room Found!");
        var room = TAS.rooms[i];
        TAS.inventory.push(room.inventory[item]);
        console.log("TAS: Item " + room.inventory[item] + " collected.");
        console.log("TAS: Reloading room...");
        document.body.innerHTML = "";
        room.inventory.splice(room.inventory[item]);
        TAS.roomReader(room.id);
      } else if (TAS.rooms.length <= i){
        console.error("TAS: Room Not found!");
      } else {
        console.log("TAS: Not this room...");
      }
    }
  }
}
