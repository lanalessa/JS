const sliders = Array.from(document.querySelectorAll('.carrossel, .carrossel2')).map(container => ({
    container,
    images: Array.from(container.querySelectorAll('img')),
    index: 0
}));

function mostrarImagens(slider) {
    slider.images.forEach(img => img.classList.remove('ativa'));
    if (slider.images.length > 0) {
        slider.images[slider.index].classList.add('ativa');
    }
}

function ajustarSlider(slider, delta) {
    if (!slider || slider.images.length === 0) return;
    slider.index = (slider.index + delta + slider.images.length) % slider.images.length;
    mostrarImagens(slider);
}

function proximo(sliderIndex = 0) {
    ajustarSlider(sliders[sliderIndex], 1);
}

function voltar(sliderIndex = 0) {
    ajustarSlider(sliders[sliderIndex], -1);
}

document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('click', () => {
        const sliderIndex = Number(button.dataset.slider);
        const delta = button.classList.contains('next') ? 1 : -1;
        ajustarSlider(sliders[sliderIndex], delta);
    });
});

function avancarAutomaticamente(slider) {
    ajustarSlider(slider, 1);
}

sliders.forEach(slider => {
    slider.images.forEach((img, index) => {
        if (img.classList.contains('ativa')) {
            slider.index = index;
        }
    });
    mostrarImagens(slider);
    setInterval(() => avancarAutomaticamente(slider), 2000);
});


// ***************************
const carouselImages = [
    {
        src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hambúrguer artesanal com pão fresquinho e queijo derretido.'
    },
    {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Nossos lanches são preparados com ingredientes selecionados.'
    },
    {
        src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
        caption: 'Um ambiente acolhedor para celebrar em família.'
    }
];

let carouselIndex = 0;
const carouselImage = document.getElementById('carouselImage');
const carouselCaption = document.getElementById('carouselCaption');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

function updateCarousel() {
    const item = carouselImages[carouselIndex];
    carouselImage.src = item.src;
    carouselCaption.textContent = item.caption;
}

// Funções de navegação
function func() {
    // Redireciona para a página de cadastro
    window.location.href = 'cadastro.html';
}

function sobre() {
    // Abre um modal ou exibe informações sobre o app
    alert('Bem-vindo ao Grill Master!\n\nAqui você encontra os melhores hambúrgueres artesanais da região, preparados com ingredientes selecionados e muito cuidado.\n\nGaranta sua reserva agora mesmo e desfrute de uma experiência gastronômica inesquecível!');
}