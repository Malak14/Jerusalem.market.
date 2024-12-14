var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};



var container2 = document.getElementById('container2')
var slider2 = document.getElementById('slider2');
var slides2 = document.getElementsByClassName('slide2').length;
var buttons2 = document.getElementsByClassName('btn2');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container2.offsetWidth;
    setParams(container2Width);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight2() {
    if (currentPosition != 0) {
        slider2.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft2() {
    if (currentPosition != slidesCount) {
        slider2.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};


var container3 = document.getElementById('container3')
var slider3 = document.getElementById('slider3');
var slides3 = document.getElementsByClassName('slide3').length;
var buttons3 = document.getElementsByClassName('btn3');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container3.offsetWidth;
    setParams(container2Width);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight3() {
    if (currentPosition != 0) {
        slider3.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft3() {
    if (currentPosition != slidesCount) {
        slider3.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};


var container4 = document.getElementById('container4')
var slider4 = document.getElementById('slider4');
var slides4 = document.getElementsByClassName('slide4').length;
var buttons4 = document.getElementsByClassName('btn4');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container4.offsetWidth;
    setParams(container2Width);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight4() {
    if (currentPosition != 0) {
        slider4.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft4() {
    if (currentPosition != slidesCount) {
        slider4.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};



var container5 = document.getElementById('container5')
var slider5 = document.getElementById('slider5');
var slides5 = document.getElementsByClassName('slide5').length;
var buttons5 = document.getElementsByClassName('btn5');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container4.offsetWidth;
    setParams(container2Width);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight5() {
    if (currentPosition != 0) {
        slider5.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft5() {
    if (currentPosition != slidesCount) {
        slider5.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

var container6 = document.getElementById('container6')
var slider6 = document.getElementById('slider6');
var slides6 = document.getElementsByClassName('slide6').length;
var buttons6 = document.getElementsByClassName('btn6');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container4.offsetWidth;
    setParams(container2Width);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight6() {
    if (currentPosition != 0) {
        slider6.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft6() {
    if (currentPosition != slidesCount) {
        slider6.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

var container7 = document.getElementById('container7')
var slider7 = document.getElementById('slider7');
var slides7 = document.getElementsByClassName('slide7').length;
var buttons7 = document.getElementsByClassName('btn7');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container4.offsetWidth;
    setParams(container2Width);
}

function setParams(w) {
    if (w < 551) {
        slidesPerpage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
    buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight7() {
    if (currentPosition != 0) {
        slider7.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft7() {
    if (currentPosition != slidesCount) {
        slider7.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 /slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};



