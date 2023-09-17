// Función para cargar comentarios desde localStorage al cargar la página
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

// Función para guardar un comentario en localStorage
function saveComment(commentData) {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(commentData);
    localStorage.setItem('comments', JSON.stringify(comments));
}

document.addEventListener('DOMContentLoaded', () => {
    // Cargar comentarios almacenados al cargar la página
    loadComments();

    // Manejar el evento de enviar comentario
    document.getElementById('submit-comment').addEventListener('click', () => {
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const commentText = document.querySelector('.comment').value;

        if (name && email && commentText) {
            // Crear un nuevo comentario
            const commentData = { name, email, commentText };
            saveComment(commentData);

            // Crear un nuevo elemento de comentario en la lista
            const commentList = document.getElementById('comment-list');
            const comment = document.createElement('li');
            comment.innerHTML = `<strong>${name}</strong> (${email}): ${commentText}`;
            commentList.appendChild(comment);

            // Limpiar los campos del formulario
            document.querySelector('.name').value = '';
            document.querySelector('.email').value = '';
            document.querySelector('.comment').value = '';
        } else {
            alert('Por favor, completa todos los campos antes de enviar el comentario.');
        }
    });
});

