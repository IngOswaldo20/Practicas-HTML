const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keydown', event => {
    if (event.code === 'Enter' && input.value.trim() !== '') {
        const text = input.value.trim();
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.textContent = text;
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

        input.value = '';
    }
});

ul.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentNode;
        ul.removeChild(li);
    } else if (event.target.tagName === 'SPAN') {
        const li = event.target.parentNode;
        li.classList.toggle('done');
    }
});
