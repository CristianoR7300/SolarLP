const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')   


function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    // document.body.classList.toggle('no-scroll')
}

function goToItem(itemId) {
    const element = document.getElementById(itemId);
    element.scrollIntoView({ behavior: "smooth" });
    toggleMobiLeModal();
}

const toggleMobiLeModal = () => {
    const element = document.getElementById('menu');
    if (element.className.includes('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
};


btn.addEventListener('click',navToggle)