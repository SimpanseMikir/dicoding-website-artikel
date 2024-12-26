const dropdown = document.querySelector('.dropdown');

dropdowns.foreach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');   
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector(.selected);
});
    select.addEventListener('click', () => {
        select.classList.toggle('open');
        caret.classList.toggle('open');
        menu.classList.toggle('open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('open');
            caret.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('open');
            caret.classList.remove('open');
            menu.classList.remove('open');
       option.forEach(option => {
        option.classList.remove('active');
        });
        option.classlist.add('active');
        });
        });
    });