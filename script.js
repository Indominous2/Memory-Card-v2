// home page part
let btn = document.querySelectorAll(".btn");
let btn1 = document.querySelectorAll(".btn1");
let btn2 = document.querySelectorAll(".btn2");
let playBtn = document.querySelector(".playBtn");
let container = document.querySelector(".container");

// Important Variables
let themeSelection;
let playerSelection;
let gridSize;
let buttonClassArr = ["btn1", "btn2", "btn3"];
let btnNameArr = [btn, btn1, btn2];

// HOME PAGE PART
let themeMusic = new Audio("./sounds/theme.mp3");


function btnClassSwitch(name, saveName) {
    name.forEach(item => {
        item.addEventListener("click", () => {

            for (let i = 0; i < name.length; i++) {
                name[i].classList.remove("dark");
                if (name[i] == item) {
                    name[i].classList.add("dark");
                    localStorage.setItem(saveName, i)
                    playerSelection = name[i].innerText;
                }
            }

        })
    })
}
for (let i = 0; i < buttonClassArr.length; i++) {
    btnClassSwitch(btnNameArr[i], buttonClassArr[i])
}


function refresh() {
    document.addEventListener("DOMContentLoaded", () => {
        let one = JSON.parse(localStorage.getItem("btn1"));
        let two = JSON.parse(localStorage.getItem("btn2"));
        let three = JSON.parse(localStorage.getItem("btn3"));
        btn[one].classList.add("dark");
        btn1[two].classList.add("dark");
        btn2[three].classList.add("dark");
    })
}
refresh();

window.addEventListener("load", () => {})

// Working Part

//  Global Variables
class grid {
    constructor() {
        this.body = document.querySelector("body");
        this.count = 0;
        playBtn.addEventListener("click", () => {
            container.style.display = "none"
        })
        this.insertNumber = 0;
        this.insertNumber6 = 0;
        this.iconsArr = [
            "./svg/bear.png",
            "./svg/black-and-white.png",
            "./svg/diamond1.png",
            "./svg/long-hair.png",
            "./svg/moon.png",
            "./svg/calendar.png",
            "./svg/photography.png",
            "./svg/blood.png",
            "./svg/bear.png",
            "./svg/black-and-white.png",
            "./svg/diamond1.png",
            "./svg/long-hair.png",
            "./svg/moon.png",
            "./svg/calendar.png",
            "./svg/photography.png",
            "./svg/blood.png",
        ];
        this.iconsArr6 = [
            "./svg/bear.png",
            "./svg/black-and-white.png",
            "./svg/diamond1.png",
            "./svg/long-hair.png",
            "./svg/moon.png",
            "./svg/blood.png",
            "./svg/folder.png",
            "./svg/sun.png",
            "./svg/white-paper.png",
            "./svg/bear1.png",
            "./svg/crown.png",
            "./svg/heart.png",
            "./svg/lens.png",
            "./svg/night.png",
            "./svg/folder.png",
            "./svg/big-data.png",
            "./svg/mail-inbox-app.png",
            "./svg/color-moon.png",
            "./svg/bear.png",
            "./svg/black-and-white.png",
            "./svg/diamond1.png",
            "./svg/long-hair.png",
            "./svg/moon.png",
            "./svg/blood.png",
            "./svg/crown1.png",
            "./svg/crown.png",
            "./svg/heart.png",
            "./svg/lens.png",
            "./svg/mail-inbox-app.png",
            "./svg/sun.png",
            "./svg/white-paper.png",
            "./svg/bear1.png",
            "./svg/night.png",
            "./svg/big-data.png",
            "./svg/color-moon.png",
            "./svg/crown1.png"

        ];
        this.boxesArr = [];
        this.shuffledArr = this.shuffle(this.iconsArr);
        this.shuffledArr6 = this.shuffle(this.iconsArr6);
        this.childBox = [];
        this.numArr = [];
        this.numArr6 = [];

        for (let i = 0; i < 16; i++) {
            this.numArr.push(++this.insertNumber);
            if (this.insertNumber == 8) {
                this.insertNumber = 0;
            }
        }

        for (let i = 0; i < 36; i++) {
            this.numArr6.push(++this.insertNumber);
            if (this.insertNumber == 18) {
                this.insertNumber = 0;
            }
        }


        this.shuffledNumArray = this.shuffle(this.numArr);
        this.shuffledNumArray6 = this.shuffle(this.numArr6);
        this.chosenBoxArr = [];
        this.counter = 0; // for score display
        this.playerCountArr = [1, 2, 3, 4];
        this.playerArr = [];
        this.chance = 1;
        this.selectedStuff = [];
        this.cardFlip = new Audio("./sounds/card-flip.mp3");
        this.cardFlipBack = new Audio("./sounds/card-back-over.mp3");
        this.gameFinishedCount = 0;
        this.scoreDivArr = [];
        // this.restartBtn1 = document.querySelector(".restart");
        this.newGameBtn1 = document.querySelector(".newGame");
        this.headCont = document.querySelector(".inline-head");
        this.ifPlay = false;
        this.restartCounter = 0;
        this.ifReset = false;
        this.once = "";
        this.newGameClicked = false;
        this.ifResetClicked = false;

    }


    shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array;
    }

    makingGrid() { // game Loop
        this.ifPlay = true;
        this.thisArr = [this.one, this.two, this.three];

        for (let i = 0; i < this.thisArr.length; i++) {
            this.thisArr[i] = JSON.parse(localStorage.getItem(buttonClassArr[i]))
        }

        this.animate()
        setTimeout(() => {
            this.grid = document.createElement("div");
            this.grid.classList.add("gridCont");
            this.body.appendChild(this.grid);
            // this.headBtnLogic()
            this.makingBoxes();
            this.clickIcons();
            this.gamePlay();
        })
        this.headContainer()

    }



    gameLoop() {

        playBtn.addEventListener("click", () => {
            setTimeout(() => {
                this.ifResetClicked = false;
                // this.newGameClicked = false;
                this.newGameBtn1.style.pointerEvents = "auto";
                this.restartCounter = 0;
                document.body.appendChild(this.headCont)
                document.body.appendChild(this.newGameBtn1)
                this.headCont.classList.add('headerBox');
                // document.body.appendChild(this.restartBtn1)
                // this.headCont.appendChild(this.restartBtn1)
                this.headCont.appendChild(this.newGameBtn1)
                themeMusic.play();
                themeMusic.currentTime = 0;
                themeMusic.addEventListener("ended", () => {
                    setTimeout(() => {
                        themeMusic.currentTime = 0;
                        themeMusic.play();
                    }, 2000);
                })
                themeMusic.volume = 0.5;

            }, 1000);

            if (this.ifReset == false) {
                this.makingGrid();
            }
            // second and the other times

            // if (this.newGameClicked == true) {
            //     this.makingGrid()
            //     this.checkRestart();
            // }

        }, { once: true })
    }

    // this.grid.remove();
    /* 
    this.playerArr.forEach(item => {
        item.remove();
    })  
    
    */
    checkRestart() {
        this.restartBtn1.addEventListener("click", () => {
            if (this.ifResetClicked == true) {
                if (this.newGameClicked == true) {

                }
            }
        }, { once: true })
    }
    headContainer() {

        this.newGameBtn1.addEventListener("click", () => {
            this.newGame();
            this.headCont.remove()
            this.newGameBtn1.remove();
            this.newGameClicked = true;

        }, { once: true })

        // this.restartBtn1.addEventListener("click", () => {
        //     // alert("clicked resetBtn")
        //     this.ifResetClicked = true;
        //     this.restart();
        // }, { once: true })
    }
    animate() {
        this.body.classList.add("animate")
        setTimeout(() => {
            this.body.style.background = "#FCFCFC"
        }, 1000)
    }

    makingBoxes() {
        if (this.thisArr[2] === 0) {
            for (let i = 0; i < 16; i++) {
                this.boxMakingHelp("4");
            }
        } else if (this.thisArr[2] === 1) {
            for (let i = 0; i < 36; i++) {
                this.boxMakingHelp("6")
            }
        }
    }





    boxMakingHelp(cr) {
        this.boxes = document.createElement("div");
        if (this.thisArr[0] === 1) {
            let shuffledArr = this.replacingIcons();
            this.boxes.style.backgroundImage = `url(${shuffledArr[this.count++]})`;
        } else if (this.thisArr[0] === 0) {
            this.boxes.innerText = this.gettingNumbersArray()[this.count++];
            this.boxes.style.fontSize = "0";
        }

        // this is the must part for all the grids
        this.boxesArr.push(this.boxes)
        this.boxes.classList.add("gridBoxes");
        this.grid.style.gridTemplateColumns = `repeat(${cr}, 1fr)`;
        this.grid.style.gridTemplateRows = `repeat(${cr}, 1fr)`;
        this.grid.appendChild(this.boxes);
        this.coveringChild = document.createElement("div");
        this.boxes.appendChild(this.coveringChild);
        this.coveringChild.classList.add("child");
        this.childBox.push(this.coveringChild);

    }


    replacingIcons() {
        let shuffled = this.shuffledArr;
        return this.ifStatement(shuffled, this.shuffledArr6)
    }



    ifStatement(varName, arrName2) {
        if (this.thisArr[2] === 1) {
            varName = arrName2;
        }
        return varName
    }

    gettingNumbersArray() {
        let randomNumArray = this.shuffledNumArray;
        return this.ifStatement(randomNumArray, this.shuffledNumArray6)
    }



    clickIcons() {

        this.childBox.forEach(item => {
            item.style.pointerEvents = "auto";
            item.classList.remove("move");

            item.addEventListener("click", () => {
                item.classList.add("move");
                this.cardFlip.play();
                item.classList.remove("moveNegative");
                item.style.pointerEvents = "none";
                setTimeout(() => {
                    this.chosenBoxArr.push(item);
                    item.style.opacity = 0;
                    item.style.display = "none";
                    item.parentElement.style.pointerEvents = "none";


                    if (this.thisArr[0] === 0) {
                        // this.boxesArr[this.childBox.indexOf(item)].innerHTML += Number(this.gettingNumbersArray()[this.childBox.indexOf(item)]);
                        this.boxesArr[this.childBox.indexOf(item)].style.fontSize = "2.5rem";
                        this.boxesArr[this.childBox.indexOf(item)].classList.add("flex")
                            // this.boxesArr[this.childBox.indexOf(item)].firstChild.style.display = "none";
                        this.boxesArr[this.childBox.indexOf(item)].style.background = "#BCCEDC";
                    }

                    this.gameLogic(item);
                    if (this.chosenBoxArr.length % 2 == 0) {


                        setTimeout(() => {
                            this.playerArr.forEach(pl => {
                                pl.classList.remove("currentChance");
                                pl.firstChild.style.color = "#31485A";

                            })
                            if (this.chance == this.playerArr.length) {
                                this.chance = 0;
                            }
                            this.playerArr[this.chance].classList.add("currentChance");
                            this.playerArr[this.chance].firstChild.style.color = "white";
                            ++this.chance;
                        }, 1250);
                    }
                }, 350);



            })

        })
    }

    gamePlay() {

        let playerCont = document.querySelector(".playerCont");

        // make only one array for all of the if statement and then if it is length is even 
        // then you have to make that array element coloured and and that player chance is that



        this.playerCountArr.forEach(item => {
            if (this.thisArr[1] + 1 === item) {
                if (item === 1) {
                    item = 2;
                }

                for (let i = 0; i < item; i++) {
                    var playerDiv = document.createElement("div");
                    this.scoreDiv = document.createElement("div");
                    this.playerArr.push(playerDiv);
                    this.scoreDiv.innerText = this.counter;
                    this.scoreDiv.classList.add("scoreDiv");
                    playerDiv.classList.add("content")
                    playerDiv.classList.add("playerDiv");
                    playerCont.appendChild(playerDiv);
                    playerDiv.appendChild(this.scoreDiv);
                    if (item === 4) {
                        playerDiv.classList.add("plDivwidth");
                    }

                    this.playerArr[0].classList.add("currentChance")
                    this.playerArr[0].firstChild.style.color = "white";
                }


            }

        })

    }

    gameLogic(chosenBox) {
        if (this.chosenBoxArr.length % 2 == 0) {
            this.childBox.forEach(item => {
                item.style.pointerEvents = "none";
            })

            if (this.thisArr[0] === 0) {
                if (this.boxesArr[this.childBox.indexOf(chosenBox)].innerText === this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])].innerText) {
                    this.playerArr[this.chance - 1].firstChild.innerText++;
                    this.chance--;
                    this.childBox.forEach(item => {
                        item.style.pointerEvents = "auto";
                    })
                    this.boxesArr[this.childBox.indexOf(chosenBox)].style.userSelect = "none";
                    this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])].style.userSelect = "none";
                    if (this.chance == 0) {
                        for (let i = 0; i < 2; i++) {
                            this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.background = "#FDA213";
                        }
                    }
                    this.selectedStuff.push(this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])], this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 1])]);
                    this.checkIfWin()

                    if (this.thisArr[1] === 0) {
                        this.computer();
                    }

                } else {

                    this.gameLogicHelp(800)
                    if (this.thisArr[1] === 0) {
                        this.computer();
                    }
                }

                if (this.thisArr[1] !== 0) {
                    setTimeout(() => {
                        this.childBox.forEach(item => {
                            item.style.pointerEvents = "auto";
                        })
                    }, 1000);
                } else {
                    setTimeout(() => {
                        this.childBox.forEach(item => {
                            item.style.pointerEvents = "auto";
                        })
                    }, 3000);
                }

            } else if (this.thisArr[0] === 1) {

                if (window.getComputedStyle(this.boxesArr[this.childBox.indexOf(chosenBox)]).background === window.getComputedStyle(this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])]).background) {
                    this.playerArr[this.chance - 1].firstChild.innerText++;
                    this.chance--;
                    this.childBox.forEach(item => {
                        item.style.pointerEvents = "auto";
                    })

                    this.boxesArr[this.childBox.indexOf(chosenBox)].style.userSelect = "none";

                    this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])].style.userSelect = "none";
                    this.selectedStuff.push(this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])], this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 1])])
                    this.checkIfWin()

                    if (this.thisArr[1] === 0) {
                        this.computer();
                    }
                } else {
                    this.gameLogicHelp(800)
                    if (this.thisArr[1] === 0) {
                        this.computer();
                    }
                }
            }
            if (this.thisArr[1] !== 0) {
                setTimeout(() => {
                    this.childBox.forEach(item => {
                        item.style.pointerEvents = "auto";
                    })
                }, 1000);
            } else {
                setTimeout(() => {
                    this.childBox.forEach(item => {
                        item.style.pointerEvents = "auto";
                    })
                }, 3000);
            }
        }
        return;

    }

    gameLogicHelp(time) {
        this.childBox.forEach(item => {
            item.style.pointerEvents = "none";
        })

        setTimeout(() => {
            for (let i = 0; i < 2; i++) {

                this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.add("moveNegative");
                this.cardFlipBack.play();
                this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.pointerEvents = "auto";

                this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.fontSize = "0";
                this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.remove("flex");

                this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.display = "block";
                this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)].style.pointerEvents = "none";

            }

            setTimeout(() => {

                if (this.thisArr[0] === 1) {
                    for (let i = 0; i < 2; i++) {
                        this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.opacity = "1";
                    }
                } else if (this.thisArr[0] === 0) {
                    for (let i = 0; i < 2; i++) {
                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.opacity = "1";
                    }

                }




            }, 300)

        }, time);
    }

    getRandomNumber(array, ...compareNum) {
        let uniqueNumber;
        do {
            uniqueNumber = Math.floor(Math.random() * array.length);
        } while (compareNum == uniqueNumber);
        return uniqueNumber;
    }

    computer() {
        if (this.chance !== 1) return;
        if (this.chosenBoxArr.length % 2 == 0) {
            this.childBox.forEach(item => {
                item.style.pointerEvents = "none";
            })
            this.childCompArr = this.childBox.filter(item => !this.selectedStuff.includes(item));
            // two unique numbers
            this.random = this.getRandomNumber(this.childCompArr);
            this.random2 = this.getRandomNumber(this.childCompArr, this.random);

            setTimeout(() => {
                // logic here 

                // and then that two unique numbers will pushed on to the chosenBoxArr;

                this.chosenBoxArr.push(this.childCompArr[this.random], this.childCompArr[this.random2]);

                for (let i = 0; i < 2; i++) {
                    this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.fontSize = "2.5rem";
                    this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.add("flex");
                    this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.opacity = "0";
                    this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.display = "none";
                    this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.remove("moveNegative");
                    this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.add("move");
                    this.cardFlip.play();
                }

                if (this.thisArr[0] === 0) {

                    if (this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 1])].textContent === this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])].textContent) {
                        --this.chance;
                        this.playerArr[this.chance].firstChild.innerText++;

                        this.selectedStuff.push(this.childCompArr[this.random], this.childCompArr[this.random2]);
                        this.childCompArr.splice(this.childCompArr.indexOf(this.childCompArr[this.random]), 1);
                        this.childCompArr.splice(this.childCompArr.indexOf(this.childCompArr[this.random2]), 1);
                        this.chosenBoxArr.splice(this.chosenBoxArr.length - 2, 1);
                        this.chosenBoxArr.splice(this.chosenBoxArr.length - 1, 1);

                        if (this.thisArr[2] === 0) {
                            if (this.selectedStuff.length !== 16) {
                                this.computer();
                            }
                        } else if (this.thisArr[2] === 1) {
                            if (this.selectedStuff.length !== 36) {
                                this.computer();
                            }
                        }
                        this.checkIfWin()

                        console.log(this.chosenBoxArr)
                    } else {

                        this.compHelp();

                    }


                } else if (this.thisArr[0] === 1) {
                    if (window.getComputedStyle(this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 1])]).background === window.getComputedStyle(this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - 2])]).background) {
                        --this.chance;
                        this.playerArr[this.chance].firstChild.innerText++;
                        this.selectedStuff.push(this.childCompArr[this.random], this.childCompArr[this.random2]);
                        this.childCompArr.splice(this.childCompArr.indexOf(this.childCompArr[this.random]), 1);
                        this.childCompArr.splice(this.childCompArr.indexOf(this.childCompArr[this.random2]), 1);
                        this.chosenBoxArr.splice(this.chosenBoxArr.length - 2, 1);
                        this.chosenBoxArr.splice(this.chosenBoxArr.length - 1, 1);
                        this.childBox.forEach(item => {
                            item.style.pointerEvents = "none";
                        })
                        if (this.thisArr[2] === 0) {
                            if (this.selectedStuff.length !== 16) {
                                this.computer();
                            }
                        } else if (this.thisArr[2] === 1) {
                            if (this.selectedStuff.length !== 36) {
                                this.computer();
                            }
                        }

                        this.checkIfWin();

                    } else {

                        this.compHelp()
                    }

                }
                setTimeout(() => {
                    this.childBox.forEach(item => {
                        item.style.pointerEvents = "auto";
                    })

                    if (this.chance == this.playerArr.length) {
                        this.chance = 0;
                    }

                    this.playerArr[this.chance].classList.add("currentChance");
                    this.playerArr[this.chance].firstChild.style.color = "white";

                    this.chance++;
                }, 1000);
            }, 2000)
        }
        return;

    }


    compHelp() {
        setTimeout(() => {
            for (let i = 0; i < 2; i++) {
                this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.add("moveNegative");
                this.cardFlipBack.play()
                this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.remove("move");
            }

            setTimeout(() => {

                if (this.thisArr[0] === 1) {
                    for (let i = 0; i < 2; i++) {
                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.display = "block";
                        this.childBox[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.remove("moveNegative");

                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.opacity = "1";
                    }
                } else if (this.thisArr[0] === 0) {

                    for (let i = 0; i < 2; i++) {
                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.opacity = "1";
                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].lastChild.style.display = "block";
                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].style.fontSize = "0";
                        this.boxesArr[this.childBox.indexOf(this.chosenBoxArr[this.chosenBoxArr.length - (i + 1)])].classList.remove("flex");
                    }

                }
                this.childBox.forEach(item => {
                    item.style.pointerEvents = "auto";
                })
                this.playerArr[this.chance - 1].classList.add("currentChance");
                this.playerArr[this.chance].classList.remove("currentChance");
                this.playerArr[this.chance].firstChild.style.color = "#31485A";
            }, 300);

        }, 800);

    };

    checkIfWin() {
        if (this.thisArr[2] === 0) {
            if (this.selectedStuff.length == 16) {
                this.makeDecideBox();
                this.newGameBtn.addEventListener("click", () => {
                    this.newGame(this.decideContainer);
                    this.decideContainer.style.display = "none";
                    // this.restartBtn1.style.pointerEvents = "auto";
                    this.newGameBtn1.style.pointerEvents = "auto";
                })
                this.restartBtn.addEventListener("click", () => {
                    this.restart(this.decideContainer);
                    this.decideContainer.style.display = "none";
                    // this.restartBtn1.style.pointerEvents = "auto";
                    this.newGameBtn1.style.pointerEvents = "auto";
                })
            }
        } else if (this.thisArr[2] === 1) {

            if (this.selectedStuff.length == 36) {
                this.makeDecideBox();
                this.newGameBtn.addEventListener("click", () => {
                    this.newGame();
                    this.decideContainer.style.display = "none";
                    this.headCont.classList.remove("headerBox");
                    // this.restartBtn1.style.pointerEvents = "auto";
                    this.newGameBtn1.style.pointerEvents = "auto";
                })
                this.restartBtn.addEventListener("click", () => {
                    this.restart()
                    this.decideContainer.style.display = "none";
                    // this.restartBtn1.style.pointerEvents = "auto";
                    this.newGameBtn1.style.pointerEvents = "auto";
                })
            }
        }

    }


    newGame() {

        document.body.style.background = "#162938";

        container.style.display = "block";
        this.grid.style.display = "none";

        this.grid.remove();
        new grid().gameLoop();
        return this.resetFunctionality();
    }

    restart() {

        new grid().makingGrid();
        setTimeout(() => {
            themeMusic.play();
        }, 500);

        this.grid.style.display = "none";

        this.grid.remove()
        this.playerArr.forEach(item => {
            item.remove();
        })
        console.log(this.grid)
        console.log(this.restartCounter);

    }



    resetFunctionality() {
        this.playerArr.forEach(item => {
            item.style.display = "none";
        })
        this.boxesArr.forEach(item => {
            item.style.display = "none";
        })
        themeMusic.pause();
        this.thisArr = [];
        this.boxesArr = [];
        this.childCompArr = [];
        this.count = 0;
        this.chance = 1;
        this.counter = 0;
        this.scoreDivArr = [];
        this.childBox = [];
        this.playerArr = [];
        this.playerContentBoxesArr = [];
        this.chosenBoxArr = [];
        this.selectedStuff = [];
        for (let i = 0; i < 3; i++) {
            btnClassSwitch(btnNameArr[i], buttonClassArr[i]);
        }
        // let shuffled;

        // if (this.thisArr[0] === 0) {

        //     if (this.thisArr[2] === 0) {
        //         shuffled = shuffle(this.shuffledNumArray);
        //     } else {
        //         shuffled = shuffle(this.shuffledNumArray6);
        //     }

        // } else {
        //     if (this.thisArr[2] === 1) {
        //         shuffled = shuffle(this.shuffledArr);
        //     } else {
        //         shuffled = shuffle(this.shuffledArr6);
        //     }
        // }

    }

    makeDecideBox() {
        let counter = 0;
        this.decideContainer = document.createElement("div");
        this.decideContainer.classList.add("decideCont");
        document.body.style.background = "rgba(0, 0, 0, 0.6)";
        this.grid.style.opacity = "0.4";
        document.body.append(this.decideContainer);
        this.playerCountArr.forEach(item => {
            if (this.thisArr[1] + 1 === item) {
                if (item == 1) {
                    item = 2;
                }
                let head = document.createElement("p");
                let someInfo = document.createElement("p");
                head.textContent = "Game Over!!"
                head.classList.add("head");
                someInfo.classList.add("someInfo");
                someInfo.textContent = "Game Over! Here's how you got on...";
                this.decideContainer.appendChild(head);
                this.decideContainer.appendChild(someInfo);
                this.restartBtn = document.createElement("button");
                this.restartBtn.textContent = "Restart";
                this.restartBtn.classList.add("restartBtn");
                this.newGameBtn = document.createElement("button");
                this.newGameBtn.textContent = "Setup New Game";
                this.newGameBtn.classList.add("resetBtn");
                this.playerContentBoxesArr = [];
                for (let i = 0; i < item; i++) {
                    this.playerContentBoxes = document.createElement("div");
                    let decideBoxes = document.createElement("div");
                    decideBoxes.classList.add("decideBox");
                    decideBoxes.appendChild(this.playerContentBoxes);
                    this.playerContentBoxes.textContent = "Player " + (i + 1);
                    decideBoxes.innerHTML += `<div class="scoreDecider"><span class="decideScore">${this.playerArr[i].firstChild.innerText}</span> Pairs</div>`;
                    this.scoreDivArr.push(decideBoxes);
                    this.playerArr[i].style.opacity = "0.5";
                }

                this.sortedDivArr = this.scoreDivArr.sort((a, b) => {
                    return b.lastChild.firstChild.textContent - a.lastChild.firstChild.textContent;
                })
                console.log(this.sortedDivArr)
                this.sortedDivArr.forEach(item => {
                    this.decideContainer.appendChild(item);
                    this.sortedDivArr[0].style.background = "#162938";
                })
                this.sortedDivArr[0].firstChild.textContent += " (winner)";
                for (let i = 1; i < this.sortedDivArr.length; i++) {
                    if (this.sortedDivArr[i].lastChild.firstChild.textContent === this.sortedDivArr[0].lastChild.firstChild.textContent) {
                        this.sortedDivArr[i].style.background = "#162938";
                        this.sortedDivArr[i].firstChild.textContent += " (winner)";
                    }
                }

                this.decideContainer.appendChild(this.restartBtn);
                this.decideContainer.appendChild(this.newGameBtn);
                // this.restartBtn1.style.pointerEvents = "none";
                this.newGameBtn1.style.pointerEvents = "none";

            }
        })
    }



    restartFunctionality() {
        this.makingGrid();
    }

}

let newGrid = new grid().gameLoop()