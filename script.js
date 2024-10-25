let items = document.querySelectorAll('.item');
let button = document.getElementById('feedback-btn');
let container = document.querySelector('.container');

// Add event listener to each item
items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => {
            i.classList.remove('selected');
        });
        item.classList.add('selected');
    });
});

button.addEventListener('click', () => {
    const selected = document.querySelector('.item.selected');

    if (selected) {
        container.innerHTML = '';

        const h4 = document.createElement('h4');
        const span = document.createElement('span');
        const p = document.createElement('p');

        h4.textContent = "Thank you for your feedback!!";
        span.textContent = `Feedback: ${selected.querySelector('h5').textContent}`;
        p.textContent = "We'll use your feedback to improve our customer support.";

        container.appendChild(h4);
        container.appendChild(span);
        container.appendChild(p);
        playSound();
    } else {
        alert('You have not selected any feedback!');
    }
});

function playSound() {
    const audio = new Audio('tada.mp3');
    audio.play();
}