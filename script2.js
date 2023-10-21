function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comment-list');

    comments.forEach(commentData => {
        const { name, email, commentText } = commentData;
        const comment = document.createElement('li');
        comment.innerHTML = `<strong>${name}</strong> (${email}): ${commentText}`;
        commentList.appendChild(comment);
    });
}


function saveComment(commentData) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(commentData);
    localStorage.setItem('comments', JSON.stringify(comments));
}

document.addEventListener('DOMContentLoaded', () => {

    loadComments();

    
    document.getElementById('submit-comment').addEventListener('click', () => {
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const commentText = document.querySelector('.comment').value;

        if (name && email && commentText) {
            
            const commentData = { name, email, commentText };
            saveComment(commentData);

            
            const commentList = document.getElementById('comment-list');
            const comment = document.createElement('li');
            comment.innerHTML = `<strong>${name}</strong> (${email}): ${commentText}`;
            commentList.appendChild(comment);

            
            document.querySelector('.name').value = '';
            document.querySelector('.email').value = '';
            document.querySelector('.comment').value = '';
        } else {
            alert('Por favor, completa todos los campos antes de enviar el comentario.');
        }
    });
});

