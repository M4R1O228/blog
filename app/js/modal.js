const modalLinks = document.querySelectorAll('.link-modal');
const body = document.querySelector('body');
const modalCloseIcon = document.querySelectorAll('.modal-window__close');

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
    for (let i = 0; i < modalLinks.length; i++){
        const modalLink = modalLinks[i];
        modalLink.addEventListener('click', (event) => {
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            event.preventDefault();
        });
    }
}

if (modalCloseIcon.length > 0) {
    for (let i = 0; i < modalCloseIcon.length; i++) {
        const element = modalCloseIcon[i];
        element.addEventListener('click', (event) => {
            modalClose(element.closest('.modal-window'));
            event.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector('.modal-window.open');
        console.log(modalActive)
        if (modalActive) {
            modalClose(modalActive);
        }
        document.querySelector('.login__list').classList.remove('active');
        document.querySelector('.login__button').classList.remove('active');
        currentModal.classList.add('open');
        currentModal.addEventListener('click', (event) => {
           if (!event.target.closest('.modal-window__content')) {
               modalClose(event.target.closest('.modal-window'));
           }
        });
    }
}

function modalClose(modalActive, ) {
    if (unlock) {
        modalActive.classList.remove('open');
    }
}


