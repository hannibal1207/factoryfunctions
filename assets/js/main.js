function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.clickButtons();
            this.keyEnter();
        },

     /*    keyEnter() {
            this.display.addEventListener('Keyup', (e) => {
                if (e.keyCode === 13) {
                    this.perfomCalculation()
                };
            });
        }, */

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne () {
            this.display.value = this.display.value.slice(0, -1);
        },

        perfomCalculation() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('conta inválida')
                    return;
                };
                this.display.value = String(conta);
            } catch(e) {
                alert('conta invalida');
                return;
            };
        },

        clickButtons() {
            document.addEventListener('click', (event) => {
                const el = event.target

                if(el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText)
                };
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };
                
                if (el.classList.contains('btn-del')) {
                    this.deleteOne()
                };

                if (el.classList.contains('btn-eq')) {
                    this.perfomCalculation()
                }
            });
        },

        btnDisplay(valor) {
            this.display.value += valor
        }


    }
};

const calc = criaCalculadora()
calc.inicia()