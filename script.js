function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

    const arrow = element.querySelector('.arrow');
    arrow.classList.toggle('up');
}
