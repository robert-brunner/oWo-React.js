export const Rope = () => {
    var rope = document.querySelector('.rope');

// Update the rope's height and position on mouse move
document.addEventListener('mousemove', function(e) {
  var y = e.clientY;
  var windowHeight = window.innerHeight;
  var ropeHeight = Math.abs(y - windowHeight / 2);

  rope.style.height = ropeHeight + 'px';
  rope.style.top = (windowHeight / 2 + Math.min(y, windowHeight / 2)) + 'px';
});

// Reset the rope's height on mouse leave
document.addEventListener('mouseleave', function() {
  rope.style.height = '2px'; // Set the initial height here
});

// Bounce effect on mouse hover
rope.addEventListener('mouseover', function() {
    rope.style.height = '10px'; // Adjust the height of the bounce
  });
  
  rope.addEventListener('mouseout', function() {
    var y = e.clientY;
    var windowHeight = window.innerHeight;
    var ropeHeight = Math.abs(y - windowHeight / 2);
  
    rope.style.height = ropeHeight + 'px';
    rope.style.top = (windowHeight / 2 + Math.min(y, windowHeight / 2)) + 'px';
  });
  

}

{/* <div class="rope"></div> */}


// .rope {
//     position: absolute;
//     height: 2px;
//     background-color: #000000; /* adjust color as desired */
//     transition: height 0.3s ease;
//   }
  