'use strict'

document.addEventListener("DOMContentLoaded", function (e) {
    const explanations = document.querySelector(".explanations");
    const sentences = ['Hello World!',
        "Vous êtes bien sur le site du PasteurCodeClub du collège de Raon.",
        "A partir du 1er janvier, vous pourrez demander votre inscription sur ce site.",
        "A très bientôt!",
        "Bonnes vacances à tous!",
    ];

    const buildNewLine = sentence => {
        document.querySelector('.explanations span').remove();
        const div = document.createElement('div');
        div.classList.add('line');
        const span = document.createElement('span');
        span.textContent = '_';
        span.classList.add('blinking');
        const p = document.createElement('p');
        div.appendChild(p);
        div.appendChild(span);
        explanations.appendChild(div);
        typeWriter(sentence, p);
    };
    const writeLines = () => {
        let counter = 2000;
        sentences.forEach(sentence => {
            setTimeout(() => buildNewLine(sentence), counter);
            counter += sentence.length * 100;
        });
    };
    const countDown = () => {
        setInterval(() => {
            const leftTime = computeLeftTime();
            Object.keys(leftTime).forEach(key => {
                const parent = document.querySelector(`.${key}`);
                const p = parent.children[1];
                parent.children[0].remove();
                const span = document.createElement('span');
                span.textContent = String(leftTime[key]);
                parent.insertBefore(span, p);
            })
        }, 1000);
    };

    if (dateExpired(2019, 1, 1)) {
        const form = document.querySelector('form');
        form.style.visibility = 'visible';
    }
    countDown();
    writeLines();

})

const computeLeftTime = () => {
    const OPENDATE = new Date('January 7, 2019 12:35:00');
    const dateNow = new Date();
    let secondsLast = Math.floor((OPENDATE - dateNow) / 1000);
    const days = Math.floor(secondsLast / 60 / 60 / 24);
    secondsLast -= days * 24 * 60 * 60;
    const hours = Math.floor(secondsLast / 60 / 60);
    secondsLast -= hours * 60 * 60;
    const minutes = Math.floor(secondsLast / 60);
    secondsLast -= minutes * 60;
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: secondsLast,
    };
};

const dateExpired = (year, month, day) => {
    const currentDate = new Date(year, month, day);
    const toCheckDate = new Date();
    return currentDate >= toCheckDate;
    //const currentDate = new Date();
    //const currentYear = currentDate.getFullYear();
    //const currentMonth = currentDate.getMonth() + 1;
    //const currentDay = currentDate.getUTCDate();
    //return currentYear >= +year && currentMonth >= +month && currentDay >= +day;
};

const typeWriter = (string, element) => {
    const chars = string.split('');
    let counter = 100;
    element.textContent = "\>";
    chars.forEach(char => {
        setTimeout(() => {
            let text = element.textContent;
            element.textContent = `${text}${char}`;
        }, counter);
        counter += 100;
    })
};