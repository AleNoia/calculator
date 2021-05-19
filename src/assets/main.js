function Calculator(){
    // ======================================== [VARIABLES]
    this.display = document.querySelector('.display');
    this.lastResult = document.querySelector('.lastResult');

    // ======================================== [START CALCULATOR]
    this.start = () =>{
        this.getClicks();
        this.getEnter();
        this.getDel();
    }

    // ======================================== [GET THE CLICKS AND APPLIES A FUNCTION]
    this.getClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-calculate')) this.calculate();
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-changeSignal')) this.changeSignal(el);
            if (el.classList.contains('btn-percent')) this.percent();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
        })
    }
    
    // ======================================== [FUNCTIONS TO GETCLICKS()]
    // ==================== [CALCULATE]
    this.calculate = () => {
        try {
            let valueDisplay = this.display.value
            expressionResult = new Function("return " + valueDisplay);
            result = expressionResult();
            this.lastResult.innerHTML = `${valueDisplay} = ${result}` 
            this.display.value = result
            
        } catch (e) {
            alert("That is not an expression")
            return;
        }
    }
    
    // ==================== [GET ENTER TO CALCULATE]
    this.getEnter = () =>{
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.calculate();
        })
    }

    // ==================== [ADD SOMETHING TO THE DISPLAY]
    this.addNumDisplay = el => {
        this.display.value += el.innerText 
        this.display.focus()
    }

    // ==================== [CHANGE SIGNAL]
    this.changeSignal = () => {
        let valueDisplay = -1*(this.display.value)
        this.display.value = valueDisplay
        this.display.focus()
    }

    // ==================== [PERCENT]
    this.percent = () => {
        let valueDisplay = (this.display.value)/100
        this.display.value = valueDisplay
        this.display.focus()
    }

    // ==================== [CLEAR DISPLAY]
    this.clear = () => this.display.value = '';

    // ==================== [DELETE THE LAST CARACTER ON DISPLAY]
    this.del = () => this.display.value = this.display.value.slice(0, -1)

    // ==================== [GET DEL TO DELETE LAST VALUE]
    this.getDel = () =>{
        document.addEventListener('keypress', e => {
            if(e.keyCode === 8) this.del();
        })
    }
}

const calculator = new Calculator();
calculator.start();