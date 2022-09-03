function criaCalculadora() {
  return {
    display: document.querySelector('.input'),

    inicia() {
      this.btnClick();
      this.keyPress();
    },

    keyPress(){
      document.addEventListener('keydown', e =>{
        if(e.key === 'Enter'){
          this.contResult();
        }
        if(e.key === 'Backspace'){
          this.delLastElement();
        }
      })
    },

    btnClick(){
      document.addEventListener('click', (e)=> {
        const el = e.target;
        if(el.classList.contains('btn-num')){
          this.btnNumToDisplay(el);
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.delLastElement();
        }

        if(el.classList.contains('btn-eq')){
          this.contResult();
        }
      })
    },

    btnNumToDisplay(el){
      this.display.value += el.innerText;
    },

    clearDisplay(){
      this.display.value = '';
    },

    delLastElement(){
      this.display.value =this.display.value.slice(0, -1);
    },

    contResult(){
      const conta = this.display.value;

      try{
        this.display.value = eval(conta);

        if(!conta){
          alert('Conta inválida')
          return;
        }

      } catch {
        alert('Conta inválida');
        return;
      }
    }
  }
}

const calculadora = criaCalculadora();
calculadora.inicia();