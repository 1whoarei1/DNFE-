const draggableElements = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
const scoreElement = document.getElementById('score');

let score = 0;

draggableElements.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', draggable.dataset.keyword);
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedKeyword = e.dataTransfer.getData('text/plain');
        dropzone.textContent = draggedKeyword;
        const correctKeyword = dropzone.dataset.correct;

        if (draggedKeyword == correctKeyword) {
            score++;
            scoreElement.textContent = `Score: ${score}`;
            dropzone.classList.add('correct');
        } else {
            dropzone.classList.add('incorrect');
        }

        
    });
});