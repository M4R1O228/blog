const modalLinks = document.querySelectorAll('.link-modal');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

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

const modalCloseIcon = document.querySelectorAll('.modal-window__close');
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
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add('open');
        currentModal.addEventListener('click', (event) => {
           if (!event.target.closest('.modal-window__content')) {
               modalClose(event.target.closest('.modal-window'));
           }
        });
    }
}

function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.header').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const element = lockPadding[i];
            element.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight  = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
        unlock = true
    }, timeout);
}

function bodyUnlock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const element = lockPadding[i];
                element.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}


