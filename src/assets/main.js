function Calculator() {
    // ======================================== [VARIABLES]
    this.display = document.querySelector('.display');
    this.lastResult = document.querySelector('.lastResult');

    // ======================================== [START CALCULATOR]
    this.start = () => {
        this.display.focus();
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
            if (el.classList.contains('btn-percent')) this.percent();
            if (el.classList.contains('btn-potentiation')) this.potentiation();
            if (el.classList.contains('btn-squareRoot')) this.squareRoot();
            if (el.classList.contains('btn-changeSignal')) this.changeSignal();
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-copy')) this.copyResult();
        })
    }

    // ======================================== [FUNCTIONS TO GETCLICKS()]
    // ==================== [CALCULATE]
    this.calculate = () => {
        try {
            let valueDisplay = this.display.value

            // ==================== [CALCULATE]
            expressionResult = new Function("return " + valueDisplay);
            result = expressionResult(); // Result

            this.getLastResult(valueDisplay, result);
            // this.expressions.push(`${valueDisplay} = ${result}`)

            // const expressionJson = JSON.stringify(this.expressions)
            // localStorage.setItem('expressions', expressionJson)

            this.display.value = result

        } catch (e) {
            alert("That is not an expression");
            this.display.value = '';
            return;
        }
    }

    // ==================== [GET THE LAST RESULT]
    this.getLastResult = (valueDisplay, result) => {
        return this.lastResult.innerHTML = `${valueDisplay} = ${result}`
    }

    // ==================== [GET ENTER TO CALCULATE]
    this.getEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.calculate();
        })
    }

    // ==================== [ADD SOMETHING TO THE DISPLAY]
    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    // ==================== [PERCENT]
    this.percent = () => {
        let valueDisplay = (this.display.value) / 100
        this.display.value = valueDisplay
        this.display.focus()
    }

    // ==================== [POTENTIATION]
    this.potentiation = () => {
        this.display.focus()
        this.display.value += '**'
    }

    // ==================== [SQUARE ROOT]
    this.squareRoot = () => {
        let squareRoot = Math.sqrt(this.display.value)
        this.lastResult.innerHTML = `√${this.display.value} = ${squareRoot}`
        this.display.value = squareRoot
    }

    // ==================== [CHANGE SIGNAL]
    this.changeSignal = () => {
        let valueDisplay = -1 * (this.display.value)
        this.display.value = valueDisplay
        this.display.focus()
    }

    // ==================== [CLEAR DISPLAY]
    this.clear = () => this.display.value = '';

    // ==================== [DELETE THE LAST CARACTER ON DISPLAY]
    this.del = () => this.display.value = this.display.value.slice(0, -1)

    // ==================== [GET DEL TO DELETE LAST VALUE]
    this.getDel = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 8) this.del();
        })
    }

    // ==================== [COPY]
    this.copyResult = () => {
        let copyValue = this.display
        copyValue.select();
        document.execCommand('copy');
    }

    // // ======================================== [HISTORY]

    // function createCard(){
    //     const card = document.createElement('div');
    //     card.classList.add('card')
    //     return card
    // }

    // function createHistory(expression){
    //     const card = createCard()
    //     card.innerHTML = expression
    //     this.historyContainer.appendChild(card)
    //     saveHistory()
    // }

    // function saveHistory() {
    //     this.expressions = []
    //     for (let express of listExpression) {
    //         // let historyContainer = document.querySelector('.historyContainer');
    //         // let expression = document.createTextNode(express);
    //         // card.appendChild(expression)
    //         // historyContainer.appendChild(card)
    //         // console.log(express)
    //     }
    //     const expressions = localStorage.getItem('expressions');
    //     const listExpression = JSON.parse(expressions)
    // }
}

const calculator = new Calculator();
calculator.start();
