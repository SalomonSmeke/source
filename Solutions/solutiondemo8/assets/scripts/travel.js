//overall app logic and loader...
function travelNotes() {
  "use strict";

  //manage input field and new note output
  function createNote() {
    //object for wrapper html for note
    var $note = $('<p class="note">');
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val()+'<button>remove</button>');
    //hide new note to setup fadeIn...
    $note.hide();
    //add removal function all ugly and stuff. but it works great.
    $note.children('button').on("click", function(e){
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
    //append note text to note-output
    $(".note-output").append($note);
    //fadeIn hidden new note
    $note.fadeIn("slow");
    $note_text.val("");
    }
  }

  //manage input field and new note output
  function clearNotes() {
    //define input field
    var $note_text = $(".note-input input");
    //conditional check for input field
    if ($note_text.val() !== "") {
    //set content for note
    $note.html($note_text.val());
    //hide new note to setup fadeIn...
    $note.hide();
    //append note text to note-output
    $(".note-output").remove();
    //fadeIn hidden new note
    $note_text.val("");
    }
  }

  //handle user event for `add` button click
  $(".note-input button").on("click", function(e) {
    createNote();
  });

  //Removed unused button

  //handle user event for keyboard press
  $(".note-input input").on("keypress", function(e){
    //check code for keyboard press
    if (e.keyCode === 13) {
      createNote();
    }
  });

};

$(document).ready(travelNotes);
