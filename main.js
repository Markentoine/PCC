'use strict'

document.addEventListener("DOMContentLoaded", function (e) {
    const explanations = document.querySelector(".explanations");
    const sentences = ['Hello World!',
        "Vous êtes bien sur le site du PasteurCodeClub.",
        "Dans quelques jours, vous pourrez demander votre inscription sur ce site.",
        "A bientôt..."
    ];
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
    }
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
        let counter = 3000;
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
    countDown();
    writeLines();

})

function computeLeftTime() {
    const OPENDATE = new Date('January 7, 2019 13:35:00');
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
}
