/* DESCRIPTION
TWolves have been reintroduced to Great Britain. You are a sheep farmer, 
and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
*/

//SOLUTION
function warnTheSheep(queue) {
    const a = queue.reverse();
  
    for (i = 0; i < queue.length; i++) {
      if (queue[i] === "wolf") {
        if (queue[0] === "wolf") {
          return `Pls go away and stop eating my sheep`    
        }
        return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
      }
    }
  }

  console.log("warnTheSheep: ", warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
  console.log("warnTheSheep: ", warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]));