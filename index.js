function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() { 
        alert('I was clicked!');
    } );

}

// addingEventListener function grabs the input tag by its ID('input') and then adds an event listener to it
//input.addEventListener takes a 'click' event and an anonymous callback function
//the  callback function triggers an aler that says 'iwas clicked!' when clicked