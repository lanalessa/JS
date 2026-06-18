const formulario = document.getElementById('formularioReserva');
const mensagem = document.getElementById('mensagem');

// Máscara para celular
const inputCelular = document.getElementById('celular');
inputCelular.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    }
    e.target.value = value;
});

// Validação de campos
function validarNome(nome) {
    return nome.trim().length >= 3;
}

function validarQuantidade(quantidade) {
    const num = parseInt(quantidade);
    return num > 0 && num <= 50;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCelular(celular) {
    const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return regex.test(celular);
}

function limparErros() {
    document.querySelectorAll('.erro').forEach(el => el.classList.remove('ativo'));
    document.querySelectorAll('input').forEach(el => el.classList.remove('erro-input'));
}

function exibirErro(fieldId, mensagemErro) {
    const field = document.getElementById(fieldId);
    const erroElement = document.getElementById(`erro${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)}`);
    field.classList.add('erro-input');
    erroElement.textContent = mensagemErro;
    erroElement.classList.add('ativo');
}

function validarFormulario() {
    limparErros();
    let isValid = true;

    const nome = document.getElementById('nome').value;
    if (!validarNome(nome)) {
        exibirErro('nome', 'Nome deve ter pelo menos 3 caracteres');
        isValid = false;
    }

    const quantidade = document.getElementById('quantidade').value;
    if (!validarQuantidade(quantidade)) {
        exibirErro('quantidade', 'Quantidade deve ser entre 1 e 50 pessoas');
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!validarEmail(email)) {
        exibirErro('email', 'E-mail inválido');
        isValid = false;
    }

    const celular = document.getElementById('celular').value;
    if (!validarCelular(celular)) {
        exibirErro('celular', 'Celular deve estar no formato (XX) XXXXX-XXXX');
        isValid = false;
    }

    return isValid;
}

function exibirMensagem(tipo, texto) {
    mensagem.className = `mensagem ${tipo}`;
    mensagem.textContent = texto;
    mensagem.style.display = 'block';
    setTimeout(() => {
        mensagem.style.display = 'none';
    }, 4000);
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validarFormulario()) {
        const dados = {
            nome: document.getElementById('nome').value,
            quantidade: document.getElementById('quantidade').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            data: document.getElementById('data').value || 'Não especificada'
        };

        // Salvar no localStorage (opcional)
        let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        reservas.push({
            ...dados,
            dataRegistro: new Date().toLocaleString('pt-BR')
        });
        localStorage.setItem('reservas', JSON.stringify(reservas));

        console.log('Reserva realizada:', dados);
        exibirMensagem('sucesso', `Obrigado ${dados.nome}! Sua reserva foi realizada com sucesso. Confirmaremos por e-mail.`);
        
        formulario.reset();
        inputCelular.value = '';
    }
});

// Validação em tempo real
const campos = ['nome', 'quantidade', 'email', 'celular'];
campos.forEach(campo => {
    const element = document.getElementById(campo);
    if (element) {
        element.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                const validadores = {
                    nome: () => validarNome(this.value),
                    quantidade: () => validarQuantidade(this.value),
                    email: () => validarEmail(this.value),
                    celular: () => validarCelular(this.value)
                };

                if (!validadores[campo]()) {
                    const erroMessages = {
                        nome: 'Nome deve ter pelo menos 3 caracteres',
                        quantidade: 'Quantidade deve ser entre 1 e 50',
                        email: 'E-mail inválido',
                        celular: 'Formato: (XX) XXXXX-XXXX'
                    };
                    exibirErro(campo, erroMessages[campo]);
                }
            }
        });
    }
});
