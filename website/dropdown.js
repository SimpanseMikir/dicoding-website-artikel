document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');   
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

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

                options.forEach(opt => {
                    opt.classList.remove('active');
                });

                option.classList.add('active');
            });
        });
    });
});