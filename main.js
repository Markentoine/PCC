(function () {
    'use strict'
    document.addEventListener("DOMContentLoaded", function (e) {
        const explanations = document.querySelector(".explanations");
        const currentDate = new Date();
        const nextSession = utilities.nextSessionDate(currentDate);

        // Explanations content according to date
        
        if (utilities.dateExpiredP(sessionsDates.signinBegin) && currentDate <= sessionsDates.signinEnd) {
            const form = document.querySelector('form');
            form.style.visibility = 'visible';
            form.addEventListener('focusin', formUtilities.greenLight);
            form.addEventListener('focusout', formUtilities.checkValidity);
            form.oninput = formUtilities.checkValidity;
            DOMConstruction.writeLines(sentences.before, explanations);
        } else if (currentDate >= nextSession && currentDate <= utilities.nextSessionDate(currentDate, 'hourEndString')) {
            const sessionAnnoucement = document.getElementById('session');
            const title = document.getElementById('title');
            title.textContent = 'PASTEURCODECLUB#ON AIR';
            sessionAnnoucement.textContent = "La séance actuelle se termine dans:";
            DOMConstruction.countDown(utilities.currentSessionEnd(currentDate));
            DOMConstruction.writeLines(sentences.during, explanations);
        } else {
            DOMConstruction.countDown(nextSession);
            DOMConstruction.writeLines(sentences.after, explanations);
        }
    });

    const DOMConstruction = {
        countDown: (expectedDate) => {
            setInterval(() => {
                const leftTime = utilities.computeLeftTime(expectedDate);
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
        computeLeftTime: (expectedDate) => {
            const dateNow = new Date();
            let secondsLast = ~~((expectedDate - dateNow) / 1000);
            const days = ~~(secondsLast / 60 / 60 / 24);
            secondsLast -= days * 24 * 60 * 60;
            const hours = ~~(secondsLast / 60 / 60);
            secondsLast -= hours * 60 * 60;
            const minutes = ~~(secondsLast / 60);
            secondsLast -= minutes * 60;
            return {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: secondsLast,
            };
        },

        nextSessionDate: (now, time = 'hourBegin') => new Date(`${utilities.nextSessionDay(now)}, ${sessionsDates.year()} ${sessionsDates[time]}`),

        nextSessionDay: (now) => {
            return sessionsDates.sessions.find(d => new Date(`${d}, ${sessionsDates.year()} ${sessionsDates.hourBegin}`) > now);
        },
        currentSessionEnd: (now) => {
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), sessionsDates.hourEndObj.hours, sessionsDates.hourEndObj.minutes, sessionsDates.hourEndObj.seconds);
        },


        dateExpiredP: date => new Date() >= date,
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

    const sessionsDates = {
        signinBegin: new Date('January 1, 2019'),
        signinEnd: new Date('January 14, 2019'),
        year: () => new Date().getFullYear(),
        hourBegin: '12:30:00',
        hourEndString: '13:15:00',
        hourEndObj: {
            hours: 13,
            minutes: 15,
            seconds: 0
        },
        sessions: ['January 22', 'January 29', 'February 5', 'Frebruary 26', 'March 5', 'March 12', 'March 19', 'March 26'],
        signIn: '1er Janvier',
    }

    const sentences = {
        before: ['Hello World!',
            "Vous êtes bien sur le site du PasteurCodeClub du collège de Raon.",
            `A partir du ${sessionsDates.signIn}, vous pourrez demander votre inscription sur ce site.`,
            "A très bientôt!",
        ],
        after: ['Hello World!',
            "Ici, une dizaine d'élèves du collège apprennent à coder en javascript...",
            "Happy Coding!"
        ],
        during: ['Bienvenue à cette nouvelle session!',
            'Continuons notre exploration!',
            'Happy Coding!'
        ],
    };

}());