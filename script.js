document.getElementById("rsvpForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var rsvpData = {
    name: name,
    email: email
  };

  // Display RSVP data
  var rsvpDiv = document.createElement("div");
  rsvpDiv.innerHTML = "<strong>Name:</strong> " + rsvpData.name + "<br><strong>Email:</strong> " + rsvpData.email;
  document.body.appendChild(rsvpDiv);

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
});

document.getElementById("comments").addEventListener("submit", function(event) {
  event.preventDefault();

  var comment = document.getElementById("comment").value;

  // Display comment
  var commentDiv = document.createElement("div");
  commentDiv.innerHTML = comment;
  document.getElementById("comments").appendChild(commentDiv);

  // Clear comment input
  document.getElementById("comment").value = "";

});


function submitComment() {
    // Get the values from the form inputs
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    // Create a new comment container
    var commentContainer = document.createElement('div');
    commentContainer.classList.add('comment-container');

    // Create paragraph elements for name and comment
    var nameParagraph = document.createElement('p');
    nameParagraph.textContent = name;
    var commentParagraph = document.createElement('p');
    commentParagraph.textContent = comment;

    // Append the paragraphs to the comment container
    commentContainer.appendChild(nameParagraph);
    commentContainer.appendChild(commentParagraph);

    // Append the comment container to the comments section
    var commentsSection = document.getElementById('comments');
    commentsSection.appendChild(commentContainer);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
  }

  // Attach event listener to form submission
  var commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    submitComment(); // Call the submitComment function
  });



