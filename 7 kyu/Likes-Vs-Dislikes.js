/* DESCRIPTION */
/* YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. 
The same is true for the other way round. */

/* SOLUTION */
function likeOrDislike(buttons) {

    state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing';
      } else (
        state = buttons[i])
    }
  
    return state;
  }
  
  console.log(likeOrDislike(['Dislike'])); //Dislike
  console.log(likeOrDislike(['Like', 'Like'])); //Nothing
  console.log(likeOrDislike(['Dislike', 'Like'])); //like
  console.log(likeOrDislike(['Like', 'Dislike', 'Dislike']));//Nothing