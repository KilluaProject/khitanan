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
