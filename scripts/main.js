(function () {
    'use strict'

    document.addEventListener("DOMContentLoaded", function (e) {
        const main = document.querySelector('main');
        main.innerHTML = Handlebars.templates.landing();

        const explanations = document.querySelector(".explanations");
        const currentDate = new Date();
        const nextSession = utilities.nextSessionDate(currentDate);
        const title = document.getElementById('title');
        const sessionAnnoucement = document.getElementById('session');

        // Explanations content according to date

        if (utilities.dateExpiredP(sessionsDates.signinBegin) && currentDate <= sessionsDates.signinEnd) {
            window.history.pushState({}, '', window.location.origin + '/' + "inscription");
            const content = Handlebars.templates["inscriptionForm"]();
            document.querySelector('main').innerHTML = content;
            const form = document.querySelector('form');
            //form.style.visibility = 'visible';
            form.addEventListener('focusin', formUtilities.greenLight);
            form.addEventListener('focusout', formUtilities.checkValidity);
            form.oninput = formUtilities.checkValidity;
            DOMConstruction.writeLines(sentences.before, explanations);
        } else if (currentDate > utilities.currentSessionBegin(currentDate) && currentDate < utilities.currentSessionEnd(currentDate)) {
            title.textContent = 'PASTEURCODECLUB#ON AIR';
            title.style.color = 'red';
            sessionAnnoucement.textContent = "La séance actuelle se termine dans:";
            DOMConstruction.countDown(utilities.currentSessionEnd(currentDate));
            DOMConstruction.writeLines(sentences.during, explanations);
        } else {
            title.style.color = 'chartreuse';
            DOMConstruction.countDown(nextSession);
            DOMConstruction.writeLines(sentences.after, explanations);
        }


        window.onpopstate = () => {
            const path = window.location.pathname;
            main.innerHTML = routes[path]();
            if (/index/.test(path) || (path === '/')) {
                const rotateCube = document.getElementById('rotateCube');
                rotateCube.appendChild(renderer.domElement);
                render();
                DOMConstruction.writeLines(sentences.after, document.querySelector('.explanations'));
            }
        };

        // event listeners
        document.addEventListener('click', events.revealCode);
        document.addEventListener('click', events.navTo);

    });

    const events = {
        revealCode: function (e) {
            const target = e.target;
            if (target.className === 'reveal') {
                e.stopPropagation();
                let codeStatus = target.nextElementSibling.style.display;
                target.nextElementSibling.style.display = codeStatus === 'block' ? 'none' : 'block';
            }
        },

        navTo: function (e) {
            const target = e.target;
            if (e.target.className === 'nav') {
                e.preventDefault();
                const path = target.id;
                window.history.pushState({}, '', window.location.origin + '/' + path);
                const content = Handlebars.templates[path]();
                document.querySelector('main').innerHTML = content;
            }
        },
    };

    const DOMConstruction = {
        countDown: expectedDate => {
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
            const currentSpan = document.querySelector('.explanations span')
            if (currentSpan) currentSpan.remove();
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
            let counter = 75;
            element.textContent = "\>\>";
            chars.forEach(char => {
                setTimeout(() => {
                    let text = element.textContent;
                    element.textContent = `${text}${char}`;
                }, counter);
                counter += 75;
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

        nextSessionDate: (now, time = 'hourBegin') => {
            const nextDate = `${utilities.nextSessionDay(now)}, ${sessionsDates.year()} ${sessionsDates[time]}`;
            return new Date(nextDate);
        },

        nextSessionDay: now => {
            return sessionsDates.sessions.find(d => {
                const beginningDate = `${d}, ${sessionsDates.year()} ${sessionsDates.hourBegin}`;
                return new Date(beginningDate) > now;
            });
        },
        currentSessionEnd: now => {
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), sessionsDates.hourEndObj.hours, sessionsDates.hourEndObj.minutes, sessionsDates.hourEndObj.seconds);
        },

        currentSessionBegin: now => {
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), sessionsDates.hourBeginObj.hours, sessionsDates.hourBeginObj.minutes, sessionsDates.hourBeginObj.seconds);
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
        signinBegin: new Date('October 4, 2019'),
        signinEnd: new Date('October 17, 2019'),
        year: () => new Date().getFullYear(),
        hourBegin: '12:30:00',
        hourEnd: '13:15:00',
        hourBeginObj: {
            hours: 12,
            minutes: 30,
            seconds: 0,
        },
        hourEndObj: {
            hours: 13,
            minutes: 15,
            seconds: 0,
        },
        sessions: ['November 2', 'November 9', 'November 16', 'November 23', 'November 30'],
        signIn: '14 Octobre',
    }

    const sentences = {
        before: ['Hello World!',
            "Bienvenue au PasteurCodeClub du collège de Raon.",
            `A partir du ${sessionsDates.signIn}, vous pourrez demander votre inscription au club.`,
            "A très bientôt!",
        ],
        after: ['Hello World!',
            "Vous pouvez retrouver ici tout ce que nous avons vu ensemble!",
            "Happy Coding! ;-)"
        ],
        during: ['Bienvenue à cette nouvelle session!',
            'Continuons notre exploration!',
            'Happy Coding!'
        ],
    };

    const routes = {
        '/': Handlebars.templates.landing,
        '/index.html': Handlebars.templates.landing,
        '/balle': Handlebars.templates.balle,
        '/cube': Handlebars.templates.cube,
        '/donut': Handlebars.templates.donut,
        '/surface': Handlebars.templates.surface,
        '/tube': Handlebars.templates.tube,
        '/commencer': Handlebars.templates.commencer,
        '/avatarEtape1': Handlebars.templates.avatarEtape1,
        '/avatarEtape2': Handlebars.templates.avatarEtape2,
        '/avatarEtape3': Handlebars.templates.avatarEtape3,
    };

}());

/*
 var fut = new THREE.CylinderGeometry(10, 10, 100);
  var couronne = new THREE.CylinderGeometry(1, 30, 150);

  var material = new THREE.MeshPhongMaterial({
    color: 'brown',
    shininess: 20,
    specular: 'lightgrey',
    side: THREE.DoubleSide,
    flatShading: true
  });

var green = new THREE.MeshPhongMaterial({
    color: 'green',
    shininess: 20,
    specular: 'lightgrey',
    side: THREE.DoubleSide,
    flatShading: true
});

var compteurArbres = 0;
var compteurLignes = 0;
var coordX = -250;
var coordZ = -250;

while (compteurLignes < 10) {
    while (compteurArbres < 10) {
        var newArbre = new THREE.Mesh(fut, material);
        var feuillage = new THREE.Mesh(couronne, green);
        feuillage.position.set(0, 100, 0);
        newArbre.add(feuillage);

        scene.add(newArbre);
        newArbre.position.set(coordX, 10, coordZ);
        coordX += 100;
        compteurArbres++;
    }
    compteurArbres = 0;
    coordX = -250;
    coordZ += 100;
    compteurLignes++;
}
*/