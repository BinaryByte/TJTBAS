# TJTBAS

What is TJTBAS? It stands for Tyly's Java-Script Table Based Adventure System. This is a collection of Java-Script code that will allow you to create a series of rooms that TJTBAS will interpret, and run on your HTML Page. To get TJTBAS working, simply download the zip file, extract the contents to your server/webpage and use the following code to implement TJTBAS and it's systems:
``` html
<script src = "tas-main.js"></script>
```
# How to use TJTBAS
First, create an html file, and add everything you need to. Link using this code:
``` html
<script src = "tas-main.js"></script>
```
The code won't work as soon as the document loads, so you'll have to create a function which holds the starting code.
Once that's done, let's create our first room. First of all, everything having to do with TJTBAS is stored under the TAS object. In order to create our room, we're going to have to create a new variable:
```html
<script>
function start(){
var room1 = new TAS.room("Name your room here.", 1, "Your room Id is the one in the middle, and it is what is used to identify your room. This is the description of the room.");
}
</script>
<body>
  <button onClick = "start()">Click here to start</button>
</body>
```
We've created our first room! It has a name, an id, and a description. We can now simply load the room using the following command:
``` javascript
TAS.roomReader(1);
```
In between the brackets, put your room id, and TJTBAS will load the room, and show the description.

And that's how you create a basic room. For more tutorials, the TJTBAS wiki should have more information.
