document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var nameInput = document.getElementById('nameInput');
    var commentInput = document.getElementById('commentInput');
    var commentList = document.getElementById('commentList');
  
    var comment = document.createElement('div');
    comment.className = 'comment';
    comment.innerHTML = '<h4>' + nameInput.value + '</h4><p>' + commentInput.value + '</p>';
  
    commentList.appendChild(comment);
  
    nameInput.value = '';
    commentInput.value = '';
  });
  