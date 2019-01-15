(function () {
    'use strict'
    document.addEventListener("DOMContentLoaded", function (e) {
        const explanations = document.querySelector(".explanations");

        if (utilities.dateExpiredP(2050, 0, 1)) {
            const form = document.querySelector('form');
            form.style.visibility = 'visible';
            form.addEventListener('focusin', formUtilities.greenLight);
            form.addEventListener('focusout', formUtilities.checkValidity);
            form.oninput = formUtilities.checkValidity;
            DOMConstruction.writeLines(sentences.after, explanations);
        } else {
            DOMConstruction.writeLines(sentences.after, explanations);
        }
        DOMConstruction.countDown();
    });

    const DOMConstruction = {
        countDown: () => {
            setInterval(() => {
                const leftTime = utilities.computeLeftTime();
                Object.keys(leftTime).forEach(key => {
                    const parent = document.querySelector(`.${key}`);
                    const p = parent.children[1];
                    parent.children[0].remove();
                    const span = document.createElement('span');
                    span.textContent = String(leftTime[key]);
                    parent.insertBefore(span, p);
                })
            }, 1000);
        },

        writeLines: (sentences, refElement) => {
            let counter = 2000;
            sentences.forEach(sentence => {
                setTimeout(() => DOMConstruction.buildNewLine(sentence, refElement), counter);
                counter += sentence.length * 100;
            });
        },

        buildNewLine: (sentence, refElement) => {
            document.querySelector('.explanations span').remove();
            const div = document.createElement('div');
            div.classList.add('line');
            const span = document.createElement('span');
            span.textContent = '_';
            span.classList.add('blinking');
            const p = document.createElement('p');
            div.appendChild(p);
            div.appendChild(span);
            refElement.appendChild(div);
            DOMConstruction.typeWriter(sentence, p);
        },

        typeWriter: (string, element) => {
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
        },
    };

    const utilities = {
        computeLeftTime: () => {
            const OPENDATE = new Date('January 22, 2019 12:30:00');
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
        },

        dateExpiredP: (year, month, day) => {
            const currentDate = new Date();
            const toCheckDate = new Date(year, month, day);
            return currentDate >= toCheckDate;
        },
    };

    const sentences = {
        before: ['Hello World!',
            "Vous êtes bien sur le site du PasteurCodeClub du collège de Raon.",
            "A partir du 1er janvier, vous pourrez demander votre inscription sur ce site.",
            "A très bientôt!",
            "Bonnes vacances à tous!",
        ],
        after: ['Hello World!',
            "C'est parti!",
            "Pour commencer, cliquez sur le lien qui se trouve plus bas sur cette page.",
            "Happy Coding!"
        ]
    };

    const formUtilities = {
        removeLight: (el, color) => {
            el.classList.remove(`${color}Light`);
        },

        addLight: (el, color) => {
            el.classList.add(`${color}Light`);
        },

        greenLight: function (e) {
            const target = e.target;
            const containRedP = target.classList.contains('redLight');
            if (containRedP) {
                formUtilities.removeLight(target, 'red');
                formUtilities.addLight(target, 'green');
            } else {
                formUtilities.addLight(target, 'green');
            }
        },

        checkValidity: function (e) {
            let target = e.target;
            let validity = formUtilities.validP(target);
            if (!validity) {
                formUtilities.removeLight(target, 'green');
                formUtilities.addLight(target, 'red');
            } else {
                formUtilities.removeLight(target, 'red');
                formUtilities.addLight(target, 'green');
            }
        },

        validP: el => el.validity.valid,
    };
}());