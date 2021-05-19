function Calculator(){
    // ======================================== [GET DISPLAY]
    this.display = document.querySelector('.display');

    // ======================================== [START CALCULATOR]
    this.start = () =>{
        this.getClicks();
        this.getEnter();
    }

    // ======================================== [GET ENTER TO CALCULATE]
    this.getEnter = () =>{
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.calculate();
        })
    }

    // ======================================== [GET THE CLICKS AND APPLIES A FUNCTION]
    this.getClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-calculate')) this.calculate();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
        })
    }
    
    // ======================================== [FUNCTIONS TO GETCLICKS()]

    // ==================== [CALCULATE]
    this.calculate = () => {
        try {
            expression = new Function("return " + this.display.value);
            result = expression();
            this.display.value = result
            
        } catch (e) {
            alert("That is not an expression")
            return;
        }
    }

    // ==================== [ADD SOMETHING TO THE DISPLAY]
    this.addNumDisplay = el => {
        this.display.value += el.innerText 
        this.display.focus()
    }

    // ==================== [CLEAR DISPLAY]
    this.clear = () => this.display.value = '';

    // ==================== [DELETE THE LAST CARACTER ON DISPLAY]
    this.del = () => this.display.value = this.display.value.slice(0, -1)
}

const calculator = new Calculator();
calculator.start();