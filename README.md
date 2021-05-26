<h1 align="center">
    🖩 Calculator
</h1>

<p align="center">
This project is a simple calculator implemented with JavasScript
</p>

<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AleNoia/calculator?color=%2304D361"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/AleNoia/calculator"> <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AleNoia/calculator"> <a href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md">
  <img src="https://img.shields.io/badge/App%20Ideas%20-Beginner-%2304D361">
</a>
</p>
 
 ![image](https://user-images.githubusercontent.com/82424777/119163611-f0bcc900-ba31-11eb-9b6d-fbc9f052f3fb.png)

***
# 📌 Table of Contents
* 💡 [Features](#features)
* 🎯 [Purpose](#Purpose)
* 🛠 [Installation](#Installation)
* 📝 [Utilization](#Utilization)
* 🤝 [Contributing](#Contributing)
* ⚙ [Technologies Used](#TechnologiesUsed)
* 👋 [Author](#Author)
* 🧾 [License](#License)
***

# <a name="features"></a>💡 Features

* ➕ Do simple math calculations
* 🗑 Delete the last value
* 🗑 Delete all expression
* 📋 Copy the result

***

# <a name="Purpose"></a>🎯 Purpose

My purpose with this project is learn more about Javascript and how to do a calculator.

During this project I learned specially:

  * How to do a calculator
  * More about how to use mathematical properties in Javascript
  * More about SCSS
  * How to use CSS Grid
  * And so on

***
# <a name="Installation"></a>🛠 Installation

You need to download [git](https://git-scm.com) initially

Run this command to clone the repository:

```git

git clone https://github.com/AleNoia/calculator.git

```

***
# <a name="Utilization"></a>📝 Utilization
 
 It is very simple to use this calculator
 
## To start the calculator

```javascript
// ======================================== [START CALCULATOR]
    this.start = () => {
        this.display.focus();
        this.getClicks();
        this.getEnter();
        this.getDel();
    }
```
### Getting the clicks and applying to a function
```javascript
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
```

### Getting enter to calculate

```javascript
// ==================== [GET ENTER TO CALCULATE]
    this.getEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.calculate();
        })
    }
```

### Getting delete button to delete last value

```javascript
// ==================== [GET DEL TO DELETE LAST VALUE]
this.getDel = () => {
    document.addEventListener('keypress', e => {
        if (e.keyCode === 8) this.del();
    })
}
```
## Calculating

```javascript
// ==================== [CALCULATE]
    this.calculate = () => {
        try {
            let valueDisplay = this.display.value

            // ==================== [CALCULATE]
            expressionResult = new Function("return " + valueDisplay);
            result = expressionResult(); // Result

            this.getLastResult(valueDisplay, result);

            this.display.value = result

        } catch (e) {
            alert("That is not an expression");
            this.display.value = '';
            return;
        }
    }
```


## You can delete the last value


![image](https://user-images.githubusercontent.com/82424777/119158817-0085de80-ba2d-11eb-9dca-75a13ef6a32e.png)

```javascript

// ==================== [DELETE THE LAST CARACTER ON DISPLAY]
this.del = () => this.display.value = this.display.value.slice(0, -1)

```

## Clear display

![image](https://user-images.githubusercontent.com/82424777/119159227-696d5680-ba2d-11eb-8de7-e01b21f7d5bf.png)

```javascript

// ==================== [CLEAR DISPLAY]
this.clear = () => this.display.value = '';

```

## Copy the result

![image](https://user-images.githubusercontent.com/82424777/119159805-ff08e600-ba2d-11eb-874c-7d1bab51f34d.png)

```javascript


// ==================== [COPY]
this.copyResult = () => {
    let copyValue = this.display
    copyValue.select();
    document.execCommand('copy');
}

```

***
# <a name="TechnologiesUsed"></a> ⚙ Technologies used

Technologies that were used in the construction of the project:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://www.w3.org/html/)
- [SCSS](https://sass-lang.com)

***
# <a name="Contributing"></a>🤝 Contributing

1. Fork the project.
2. Create a new branch with your changes: ```git checkout -b my-feature```
3. Save your changes and create a commit message telling you what you did: ```git commit -m" feature: My new feature "```
4. Submit your changes: ```git push origin my-feature```
5. Now just open your pull request in the repository that you forked describing your changes
6. After the merge of your pull request is done, you can delete yout branch

> If you have any questions check [this guide](https://github.com/unform/unform/blob/main/.github/CONTRIBUTING.md) on how to contribute
 
Feel free to contribute 🙂

***
# <a name="Author"></a>👋 Author

### [Igor Noia Silva](https://github.com/AleNoia)

If you want to contact, mail me or send a message on Twitter

[![Gmail Badge](https://img.shields.io/badge/-igornoiasilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:igornoiasilva@gmail.com)](mailto:igornoiasilva@gmail.com)  ![badge](https://img.shields.io/twitter/url?label=%40IgorNoiaSilva&style=social&url=https%3A%2F%2Ftwitter.com%2FIgorNoiaSilva)

***
# <a name="License"></a>🧾 License

Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/calculator/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 👋


