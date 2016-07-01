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
    this.solvedCondition = function () {
      console.log("TAS: There's no solved condition for room " + this.id + ".")
    }
    console.log("TAS: Room " + name + " Sucessfully created!");
  },
  roomReader: function(id){
    document.body.innerHTML = "";
    console.log("Searching for room...");
    //This is var i, because i was declared globally, messing up this
    for(var i = 0; i < TAS.rooms.length; i++){
      if(TAS.rooms[i].id === id){
        TAS.showRoom(TAS.rooms[i]);
      } else {
        console.log("TAS: Not this room...");
      }
    }
  },
  showRoom: function(room){
    console.log("TAS: Attempting to show room...");
    if(room.inventory.length === 0){
      document.body.innerHTML += room.displayText + " The area contains nothing.";
    } else {
    document.body.innerHTML = room.displayText + " The area contains " + room.inventory + ".";
  }
    console.log("TAS: Showing room description...");
    //First it loads the items in the room, and it checks if the solution is done, then it doesthe gotoRoom
    if(room.solved === false){
    TAS.checkSolution(room);
  }
    TAS.takeItems(room);
    TAS.gotoRoom(room);

  },
  gotoRoom: function(room){
    if(room.accessibleRoomsId.length > 0){
    for (i = 0; i < room.accessibleRoomsId.length; i++){
      console.log("TAS: Finding available rooms...");
      document.body.innerHTML += "<p>Here is a list of available areas that you can go to:</p>";
      document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"TAS.roomReader(" + room.accessibleRoomsId[i] +")\">" + room.placesName[i] +" </button></p>";
    }
  } else {
    console.log("No rooms");
  }
  },
  takeItems: function(room){
    if(room.inventory.length === 0){
      document.body.innerHTML += "<p>There's no items to collect here.</p>";
    } else {
      document.body.innerHTML = document.body.innerHTML + "<p>What items would you like to take?</p>";
    }
    for(var i = 0; i < room.inventory.length; i++){
      console.log("TAS: Finding inventory items...");
      document.body.innerHTML = document.body.innerHTML + " <p><button onClick = \"TAS.inventoryAdd(" + room.id + ", " + i + ")\">" + room.inventory + "</button></p>";
    }
  },
  inventoryAdd: function(id, item){
    for(var i = 0; i < TAS.rooms.length; i++){
      console.log("TAS; Searching for " + TAS.id + ".");
      if(TAS.rooms[i].id === id){
        console.log("TAS: Room Found!");
        var room = TAS.rooms[i];
        TAS.inventory.push(room.inventory[item]);
        console.log("TAS: Item " + room.inventory[item] + " collected.");
        console.log("TAS: Reloading room...");
        room.inventory.splice(room.inventory[item]);
        document.body.innerHTML = "";
        TAS.roomReader(room.id);
      } else if (TAS.rooms.length <= i){
        console.error("TAS: Room Not found!");
      } else {
        console.log("TAS: Not this room...");
      }
    }
  },
  checkSolution: function(room){
    console.log("TAS: Checking for solution...");
    if(room.solved === true){
      console.log("Room already solved.");
    } else {
      var solutionNumber = room.solveItems.length;
      var currentNumber = 0;
      for(i = 0; i < room.solveItems.length; i++){
        for(x = 0; x < TAS.inventory.length; x++){
          if(room.solveItems[i] === TAS.inventory[x]){
            console.log("TAS: Solved item found!");
            currentNumber = currentNumber + 1;
            if(currentNumber === solutionNumber){
              document.body.innerHTML += "<p>" + room.solvedText + "</p>";
              room.solvedCondition();
              room.solved = true;
              console.log("Solved!");
            } else {
              console.log("Not solved");
            }
          } else {
            console.log("TAS: Not this item...");
          }
        }
      }
    }
  }
}
