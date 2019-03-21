(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['avatarEtape1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"lessons avatar1\">\n    <h1>UN AVATAR, C'EST QUOI?</h1>\n    <p>Dans les jeux, on fait la différence entre le joueur, la personne réelle et son avatar qui le représente dans le jeu.</p>\n    <h1>1-ERE-ETAPE-:-CONSTRUCTION</h1>\n    <p>Comme nous avons appris à créer des formes simples, nous allons donc maintenant nous en servir pour former l'avatar.</p>\n    <p>Nous n'allons évidemment pas créer un avatar ressemblant à un être humain. Cet avatar sera simple.</p>\n    <p>Il pourrait ressembler à ça par exemple ---></p>\n    <div class=\"screenshot\">\n        <img src=\"../assets/screenshots/avatar.jpg\" alt=\"avatar\" id=\"avatar\">\n    </div>\n    <p>Ce modèle est formé de 7 parties, des cylindres (tubes) et une sphère (balle).</p>\n    <p>Certains éléments peuvent être répétés comme les bras et les jambes.</p>\n    <p>Il ne faut pas bien entendu oublier de positionner les éléments les uns par rapport aux autres.</p>\n    <p>A vous de créer votre avatar.</p>\n    <button class=\"reveal\">VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var formeCorps = new THREE.CylinderGeometry(40, 15, 100);</p>\n        <p>var formeTete = new THREE.SphereGeometry(30, 100);</p>\n        <p>var formeBras = new THREE.CylinderGeometry(10, 10, 110);</p>\n        <p>var formeBassin = new THREE.CylinderGeometry(15, 40, 30);</p>\n        <p>var formeJambe = new THREE.CylinderGeometry(15, 10, 110);</p>\n        <p>var peau = new THREE.MeshNormalMaterial(flat);</p>\n        <p>var corps = new THREE.Mesh(formeCorps, peau);</p>\n        <p>var tete = new THREE.Mesh(formeTete, peau);</p>\n        <p>var brasDroit = new THREE.Mesh(formeBras, peau);</p>\n        <p>var brasGauche = new THREE.Mesh(formeBras, peau);</p>\n        <p>var bassin = new THREE.Mesh(formeBassin, peau);</p>\n        <p>var jambeDroite = new THREE.Mesh(formeJambe, peau);</p>\n        <p>var jambeGauche = new THREE.Mesh(formeJambe, peau);</p>\n        \n        <p>scene.add(corps);</p>\n        <p>scene.add(tete);</p>\n        <p>scene.add(brasDroit);</p>\n        <p>scene.add(brasGauche);</p>\n        <p>scene.add(bassin);</p>\n        <p>scene.add(jambeDroite);</p>\n        <p>scene.add(jambeGauche);</p>\n        \n        <p>tete.position.set(0, 80, 0);</p>\n        <p>brasDroit.position.set(-40, -5, 0);</p>\n        <p>brasGauche.position.set(40, -5, 0);</p>\n        <p>bassin.position.set(0, -50, 0);</p>\n        <p>jambeDroite.position.set(-25, -120, 0);</p>\n        <p>jambeGauche.position.set(25, -120, 0);</p>\n    </div>\n</div>";
},"useData":true});
templates['avatarEtape2'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"lessons assembler\">\n    <h1>ASSEMBLER-VOTRE-AVATAR</h1>\n    <p>Après la phase de construction, votre avatar est constitué de plusieurs formes (4, 7 ou davantage).</p>\n    <p>Mais que va-t-il se passer si on veut déplacer cet avatar?</p>\n    <p>Car si nous voulons créer un jeu, il faudra bien que nous puissions déplacer notre avatar!</p>\n    <p>Va-t-on devoir ordonner à chaque pièce de se déplacer?!</p>\n    <p>Avouez que ce serait un peu pénible!!!</p>\n    <p>Heureusement, il existe une solution bien plus efficace</p>\n    <p>Au lieu d'ajouter chaque nouvelle forme de notre avatar à la scène (scene.add()), nous allons les ajouter à la partie centrale de l'avatar, son corps.</p>\n    <button class=\"reveal\">VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>scene.add(corps);</p>\n        <p>corps.add(tete);</p>\n        <p>corps.add(brasDroit);</p>\n        <p>corps.add(brasGauche);</p>\n        <p>corps.add(bassin);</p>\n        <p>corps.add(jambeDroite);</p>\n        <p>corps.add(jambeGauche);</p>\n    </div>\n    <p>Vous observez que dans ce code, le corps est ajouté à la scène pour qu'on le voit apparaître.</p>\n    <p>Et vous voyez aussi que toutes les autres parties de notre avatar sont rattachées à ce corps.</p>\n    <p>Désormais, nous sommes capables de faire bouger l'avatar en ordonnant au corps de bouger.</p>\n    <p>Toutes ses parties suivront...</p>\n    <p>Pratique!!!</p>\n    <p>A la prochaine étape, nous allons pouvoir le déplacer! A tout de suite!</p>\n</div>";
},"useData":true});
templates['avatarEtape3'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"lessons bouger\">\n    <h1>BOUGER</h1>\n    <p>Nous entrons maintenant dans la partie vraiment intéressante!!</p>\n    <p>A la fin de cette leçon, vous allez savoir déplacer votre avatar à l'aide du clavier de votre ordinateur!</p>\n    <p>Un nouveau super-pouvoir à ajouter à ceux que vous avez appris jusque là!</p>\n    <br>\n    <p>ECOUTER</p>\n    <p>Il nous faut tout d'abord faire écouter le programme qui va exécuter les ordres donnés par les touches du clavier.</p>\n    <p>Si on appuie sur la flèche droite, il faut que le programme écoute si cette touche a été abaissée.</p>\n    <p>Comment faire?</p>\n    <p>On va simplement dire au programme où écouter puis on va lui dire que quand il aura entendu quelque chose, qu'il exécute l'ordre donné.</p>\n    <button class=\"reveal\">VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>document.addEventListener('keydown', bougeAvatar);</p>\n    </div>\n    <p>On lui a dit d'écouter (listen) dans tout le document n'importe quelle touche abaissée (keydown) et d'exécuter l'ordre \"bougeAvatar\"</p>\n    <p>Vous voyez combien il est important de connaître l'anglais en programmation! Ca nous aide beaucoup à comprendre ce qu'on fait.</p>\n    <p>Cela étant, le programme ne sait pas ce que veut dire \"bougeAvatar\"; il va falloir lui expliquer.</p>\n    <p>Quand on désire expliquer une action à un programme, on lui décrire ces ordres dans ce qu'on appelle une \"fonction\" (function)</p>\n    <p>Voici la fonction qui explique au programme quoi faire:</p>\n    <button class=\"reveal\">VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>function bougeAvatar(event) {</p>\n        <p>var code = event.code;</p>\n        <p>if (code === 'ArrowLeft') corps.position.x -= 5;</p>\n        <p>renderer.render(scene, camera);</p>\n        <p>}</p>\n    </div>\n    <p>Une fonction s'écrit ainsi:</p>\n    <button class=\"reveal\">DEFINIR UNE FONCTION</button>\n    <div class=\"code\">\n        <p>function nomDeLaFonction() {}</p>\n    </div>\n    <p>Les ordres sont expliqués entre les accolades.</p>\n    <p>Vous vous rappelez que nous souhaitons déplacer à gauche notre avatar lorsque la flèche gauche est appuyée.</p>\n    <p>L'ordre sera donc:</p>\n    <button class=\"reveal\">DEPLACER A GAUCHE</button>\n    <div class=\"code\">\n        <p>var code = event.code;</p>\n        <p>if (code === 'ArrowLeft\" corps.position = corps.position + 5;</p>\n    </div>\n    <p>EXPLICATIONS</p>\n    <p>Comme le programme écoute toutes les touches abaissées, appuyées (event keydown),</p>\n    <p>on veut savoir d'abord quelle touche a été appuyée,</p>\n    <p>quel est le code de la touche qui a créé un \"event\", un événement: event.code</p>\n    <p>Une fois que la réponse nous a été donnée, on la stocke dans une boîte, une variable (var) pour la retrouver ensuite.</p>\n    <p>Si cette touche est bien la flèche gauche (ArrowLeft) alors on augmente la position de l'avatar de 5 unités.</p>\n    <p>A chaque fois que la flèche gauche sera appuyée, le programma exécute l'ordre : déplacer l'avatar de 5 unités à gauche!</p>\n    <p>Youppiiii!!! C'est exactement ce qu'on souhaitait!</p>\n    <p>Vous savez quoi? Je suis sûr que vous pouvez écrire tout seul le code pour déplacer l'avatar</p>\n    <ul>\n        <li>>>> à droite (ArrowRight)</li>\n        <li>>>> en haut (ArrowUp)</li>\n        <li>>>> en bas (ArrowDown)</li>\n    </ul>\n    <p>A vous de jouer!</p>\n    <button class=\"reveal\">VOIR LA SOLUTION</button>\n    <div class=\"code\">\n        <p>function bougeAvatar(e) {</p>\n        <p>var code = e.code;</p>\n        <p>if (code === 'ArrowLeft') corps.position.x -= 5;</p>\n        <p>if (code === 'ArrowRight') corps.position.x += 5;</p>\n        <p>if (code === 'ArrowUp') corps.position.z -= 5;</p>\n        <p>if (code === 'ArrowDown') corps.position.z += 5;</p>\n        <p>renderer.render(scene, camera);</p>\n        <p>}</p>\n    </div>\n    <p>Pas mal ce nouveau super-pouvoir, non?</p>\n    <img src=\"../assets/screenshots/moveAvatar.gif\" alt=\"avatar moving\" id=\"moveAvatar\">\n\n\n\n</div>";
},"useData":true});
templates['balle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sphere lessons\">\n    <h1>DESSINONS-UNE-BALLE</h1>\n    <p>Pour créer des balles, des sphères, nous avons besoin:</p>\n    <ul>\n        <li>>>D'une recette que nous allons aller dénicher dans un livre de recettes appelé THREE. On\n            peut aussi dire que c'est un livre de formules magiques.</li>\n        <li>>>D'une surface pour la recouvrir.</li>\n    </ul>\n    <p>C'est parti! Dans la partie code vous pouvez recopier (sans copier-coller!!!) ces lignes:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeBalle = new THREE.SphereGeometry(150);</p>\n        <p>var surface = new THREE.MeshNormalMaterial(flat);</p>\n        <p>var maPremiereBalle = new THREE.Mesh(recetteDeBalle, surface);</p>\n        <p>scene.add(maPremiereBalle);</p>\n    </div>\n    <p>Ces lignes doivent vous apparaitre comme des formules de sorcellerie: c'est un peu ça coder! ;)</p>\n    <p>Voila ce que vous devriez voir apparaitre (cliquez sur 'HIDE CODE')</p>\n    <div class=\"screenshot\" id=\"premiereBalle\">\n        <img src=\"./assets/screenshots/premiereBalle.jpg\" alt=\"\">\n    </div>\n    <p>Cette balle est simple. Vous voyez qu'elle est faite de rectangles et qu'elle n'est donc pas\n        vraiment belle car elle n'est pas lisse.</p>\n    <p>Essayez maintenant de remplacer le nombre 150 par 50. Que se passe-t-il?</p>\n    <p>Remplacez-le encore par d'autres nombres! Coder c'est essayer!</p>\n    <p>On peut rendre cette balle plus lisse en ajoutant quelques nombres (des paramètres).</p>\n    <p>Modifier votre code ainsi:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeBalle = new THREE.SphereGeometry(150, 30, 20);</p>\n    </div>\n    <p>C'est mieux, non?</p>\n    <div class=\"screenshot\" id=\"ballePlusLisse\">\n        <img src=\"./assets/screenshots/ballepluslisse.jpg\" alt=\"\">\n    </div>\n</div>";
},"useData":true});
templates['codeFormes'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"lessons conclusion\">\n    <h1>VOUS-ETES-MAINTENANT-EN-FORMES!</h1>\n    <p>Finalement, voici les lignes de  code pour toutes les formes vues:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeBalle = new THREE.SphereGeometry(150, 30, 20);</p>\n        <p>var surface = new THREE.MeshNormalMaterial(flat);</p>\n        <p>var maPremiereBalle = new THREE.Mesh(recetteDeBalle, surface);</p>\n        <p>scene.add(maPremiereBalle);</p>\n        <br>\n        <p>var recetteDeBoite = new THREE.CubeGeometry(100, 100, 100);</p>\n        <p>var maPremiereBoite = new THREE.Mesh(recetteDeBoite, surface);</p>\n        <p>scene.add(maPremiereBoite);</p>\n        <p>maPremiereBoite.position.set(300, 0, 0);</p>\n        <p>maPremiereBoite.rotation.set(0.5, 6, 0);</p>\n        <br>\n        <p>var recetteDeTube = new THREE.CylinderGeometry(30, 30, 100);</p>\n        <p>var monPremierTube = new THREE.Mesh(recetteDeTube, surface);</p>\n        <p>scene.add(monPremierTube);</p>\n        <p>monPremierTube.position.set(-300, 0, 0);</p>\n        <br>\n        <p>var recetteDeDisque = new THREE.CylinderGeometry(50, 50, 1);</p>\n        <p>var monPremierDisque = new THREE.Mesh(recetteDeDisque, surface);</p>\n        <p>scene.add(monPremierDisque);</p>\n        <p>monPremierDisque.position.set(0, 200, 0);</p>\n        <br>\n        <p>var recetteDeCone = new THREE.CylinderGeometry(1, 50, 40);</p>\n        <p>var monPremierCone = new THREE.Mesh(recetteDeCone, surface);</p>\n        <p>scene.add(monPremierCone);</p>\n        <p>monPremierCone.position.set(0, -200, 0);</p>\n        <br>\n        <p>var recetteDePyramide = new THREE.CylinderGeometry(1, 50, 20, 4);</p>\n        <p>var maPremierePyramide = new THREE.Mesh(recetteDePyramide, surface);</p>\n        <p>scene.add(maPremierePyramide);</p>\n        <p>maPremierePyramide.position.set(-170, 150, 50);</p>\n        <p>maPremierePyramide.rotation.set(1, 0, 0);</p>\n        <br>\n        <p>var recetteDePlan = new THREE.PlaneGeometry(1000, 1000);</p>\n        <p>var monPremierPlan = new THREE.Mesh(recetteDePlan, surface);</p>\n        <p>scene.add(monPremierPlan);</p>\n        <p>monPremierPlan.position.set(0, -300, 0);</p>\n        <p>monPremierPlan.rotation.set(-1, 0, 0);</p>\n        <br>\n        <p>var recetteDeDonut = new THREE.TorusGeometry(40, 10, 120, 100);</p>\n        <p>var monPremierDonut = new THREE.Mesh(recetteDeDonut, surface);</p>\n        <p>scene.add(monPremierDonut);</p>\n        <p>monPremierDonut.position.set(200, 150, 0);</p>\n    </div>\n</div>";
},"useData":true});
templates['commencer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"setup lessons\">\n    <h1>COMMENCER-A-CODER</h1>\n    <p>Quand vous aurez cliqué sur \"EDITEURDECODE\" en haut à droite de cette page, voici\n        l'interface dans laquelle\n        vous coderez.</p>\n    <p>(voir image ci-dessous)</p>\n    <p>Ne vous inquiétez pas si vous ne comprenez pas ce qui est écrit.</p>\n    <p>Ecrivez simplement votre code au fur et à mesure après la ligne 21.</p>\n    <div class=\"screenshot\" id=\"setup\">\n        <img src=\"./assets/screenshots/genralsetup.jpg\" alt=\"coding interface\">\n    </div>\n</div>";
},"useData":true});
templates['cube'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cube lessons\">\n    <h1>APPRENONS-MAINTENANT-A-DESSINER-DES-CUBES!</h1>\n    <p>Cette fois encore, nous allons ouvrir notre bibliothèque THREE et y chercher la formule pour\n        créer des boîtes.</p>\n    <p>La voici! Vous pouvez la rajouter à votre code:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeBoite = new THREE.CubeGeometry(100, 100, 100);</p>\n        <p>var maPremiereBoite = new THREE.Mesh(recetteDeBoite, surface);</p>\n        <p>scene.add(maPremiereBoite);</p>\n    </div>\n    <p>Alors? Que se passe-t-il? Vous ne voyez pas votre boîte?</p>\n    <p>Normal! Elle est cachée par votre balle!</p>\n    <p>Déplaçons un peu cette boîte pour l'apercevoir:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>maPremiereBoite.position.set(300, 0, 0);</p>\n    </div>\n    <p>Et voilà:</p>\n    <div class=\"screenshot\" id=\"boiteDecalee\">\n        <img src=\"./assets/screenshots/sphereBoite.jpg\" alt=\"boite decalee\">\n    </div>\n    <p>Mais ça pourrait être mieux...En ajoutant ça:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>maPremiereBoite.rotation.set(0.5, 0, 0);</p>\n    </div>\n    <div class=\"screenshot\" id=\"boitePenchee\">\n        <img src=\"./assets/screenshots/sphreBoitePenchee.jpg\" alt=\"\">\n    </div>\n    <p>Notre boîte est bien visible.</p>\n    <ul>Vous avez donc appris\n        <li>>> A créer une boite</li>\n        <li>>> A déplacer un objet</li>\n        <li>>>A faire tourner une objet sur lui-même</li>\n    </ul>\n    <p>On continue?</p>\n    <p>Modifiez les chiffres dans les parenthèses et observez l'effet.</p>\n    <p>Comprenez-vous à quoi correspondent ces chiffres?</p>\n    <p> Amusez-vous!</p>\n</div>";
},"useData":true});
templates['donut'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"donuts lessons\">\n    <h1>HMMMMMM-DES-DONUTS!</h1>\n    <p>Il nous reste à apprendre une dernière recette de forme simple: le donut!!!</p>\n    <p>Le donut a un nom plus savant: le tore.</p>\n    <p>C'est pourquoi la recette sera cette fois: TorusGeometry.</p>\n    <p>Ajoutons cette dernière forme à notre ensemble de formes simples.</p>\n    <p>A votre tour de reproduire ce résultat:</p>\n    <div class=\"screenshot\">\n        <img src=\"./assets/screenshots/donut.jpg\" alt=\"\">\n    </div>\n    <p>--! NE REGARDEZ PAS LA SOLUTION AVANT D'AVOIR VRAIMENT EXPERIMENTE VOS SOLUTIONS !--</p>\n    <p>INDICE: pour arrondir votre donut, ajoutez des paramètres (ces chiffres entre parenthèses)</p>\n    <p>Vérifiez que vos lignes de code ressemblent bien à celles-là:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeDonut = new THREE.TorusGeometry(40, 10, 120, 100);</p>\n        <p>var monPremierDonut = new THREE.Mesh(recetteDeDonut, surface);</p>\n        <p>scene.add(monPremierDonut);</p>\n        <p>monPremierDonut.position.set(200, 150, 0);</p>\n    </div>\n</div>";
},"useData":true});
templates['inscriptionForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"\" name=\"signIn\" method='POST' netlify-honeypot=\"bot-field\" data-netlify=\"true\" novalidate>\n    <input name=\"bot-field\" /></label>\n    <div class=\"infos\">\n        <input type=\"text\" placeholder=\"NOM\" id=\"lastName\" name=\"lastName\" pattern=\"[A-Za-z]+\" required autofocus>\n        <input type=\"text\" placeholder=\"PRENOM\" id=\"firstName\" name=\"firstName\" pattern=\"[A-Za-z]+\" required>\n        <select name=\"division\" id=\"division\">\n            <option value=\"5B\">5B</option>\n            <option value=\"4D\">4D</option>\n            <option value=\"4E\">4E</option>\n        </select>\n    </div>\n    <div class=\"captcha\" data-netlify-recaptcha=\"true\"></div>\n    <div class=\"mail\"><input id=\"email\" type=\"email\" placeholder=\"exemple@mail.com\"></div>\n    <input type=\"submit\" value=\"Je voudrais m'inscrire\">\n</form>";
},"useData":true});
templates['landing'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"presentation\">\n    <div class=\"explanations\">\n        <span class=\"blinking\">_</span>\n    </div>\n    <div id=\"rotateCube\"></div>\n</div>\n\n<nav class=\"navigation\">\n    <h1>COMMENCER</h1>\n    <ul>\n        <li><button class=\"nav\" id=\"commencer\">C'EST PARTI</button></li>\n    </ul>\n    <h1>APPRENDRE-LES-FORMES-SIMPLES</h1>\n    <ul>\n        <li><button id=\"balle\" class=\"nav\">BALLE</button></li>\n        <li><button id=\"cube\" class=\"nav\">CUBE</button></li>\n        <li><button id=\"tube\" class=\"nav\">TUBE</button></li>\n        <li><button id=\"surface\" class=\"nav\">SURFACE</button></li>\n        <li><button id=\"donut\" class=\"nav\">DONUT</button></li>\n        <li><button id=\"codeFormes\" class=\"nav\">TOUT</button></li>\n    </ul>\n    <h1>CREER-UN-AVATAR</h1>\n    <ul>\n        <li><button id=\"avatarEtape1\" class=\"nav\">CREER</button></li>\n        <li><button id=\"avatarEtape2\" class=\"nav\">ASSEMBLER</button></li>\n        <li><button id=\"avatarEtape3\" class=\"nav\">BOUGER</button></li>\n    </ul>\n</nav>";
},"useData":true});
templates['surface'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"planes lessons\">\n    <h1>CONSTRUIRE-DES-PLANS</h1>\n    <p>Les plans sont bien utiles puisqu'ils vons nous permettre de créer des terrains, des murs\n        ou des portes dans nos jeux.</p>\n    <p>Nouvelle formule magique à ajouter à notre répertoire: PlaneGeometry</p>\n    <p>Utilisez cette formule magique et tenter de créer un terrain plat...</p>\n    <p>Et comme d'habiture, testez vous-même, c'est le meilleur moyen d'apprendre!</p>\n    <p>Avec certains réglages de position et de rotation, vous devriez pouvoir vous approcher de\n        l'image ci-dessous</p>\n    <p>--! NE REGARDEZ PAS LA SOLUTION AVANT D'AVOIR VRAIMENT EXPERIMENTE VOS SOLUTIONS !--</p>\n    <div class=\"screenshot\">\n        <img src=\"./assets/screenshots/plan.jpg\" alt=\"\">\n    </div>\n    <p>Les quelques lignes de programme pour obtenir ce résultat:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDePlan = new THREE.PlaneGeometry(1000, 1000);</p>\n        <p>var monPremierPlan = new THREE.Mesh(recetteDePlan, surface);</p>\n        <p>scene.add(monPremierPlan);</p>\n        <p>monPremierPlan.position.set(0, -300, 0);</p>\n        <p>monPremierPlan.rotation.set(-1, 0, 0);</p>\n    </div>\n    <br>\n</div>";
},"useData":true});
templates['tube'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tubes lessons\">\n    <h1>DES-TUBES-DE-TOUTES-LES-FORMES</h1>\n    <p>Construisons maintenant des tubes</p>\n    <p>Je vous donne la recette:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeTube = new THREE.CylinderGeometry(30, 30, 100);</p>\n    </div>\n    <p>En vous inspirant de ce que nous avons déjà vu, à vous de créer: monPremierTube!</p>\n    <p>Allez sorciers! Essayez de le faire apparaître à l'écran!</p>\n    <p>Abracadabra!!!</p>\n    <p>Petit conseil: N'oubliez pas qu'il peut se cacher dans la balle...</p>\n    <p>Vous devriez voir quelque chose comme ça:</p>\n    <div class=\"screenshot\">\n        <img src=\"./assets/screenshots/sphereBoiteTube.jpg\" alt=\"\">\n    </div>\n    <p>Besoin d'aide?</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeTube = new THREE.CylinderGeometry(30, 30, 100);</p>\n        <p>var monPremierTube = new THREE.Mesh(recetteDeTube, surface);</p>\n        <p>scene.add(monPremierTube);</p>\n        <p>monPremierTube.position.set(-300, 0, 0);</p>\n    </div>\n\n    <p>Un peu d'entrainement. En créant deux autres formes à l'aide de la recette de tubes, reproduisez\n        ce que vous voyez ci-dessous</p>\n    <p>--! NE REGARDEZ PAS LA SOLUTION AVANT D'AVOIR VRAIMENT EXPERIMENTE VOS SOLUTIONS !--</p>\n    <div class=\"screenshot\">\n        <img src=\"./assets/screenshots/troisTubes.jpg\" id=\"troisTubes\" alt=\"\">\n    </div>\n    <p>Vous avez réussi? Bravo!</p>\n    <p>Solution:</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDeDisque = new THREE.CylinderGeometry(50, 50, 1);</p>\n        <p>var monPremierDisque = new THREE.Mesh(recetteDeDisque, surface);</p>\n        <p>scene.add(monPremierDisque);</p>\n        <p>monPremierDisque.position.set(0, 200, 0);</p>\n        <br>\n        <p>var recetteDeCone = new THREE.CylinderGeometry(1, 50, 40);</p>\n        <p>var recetteDeCone = new THREE.CylinderGeometry(1, 50, 40);</p>\n        <p>var recetteDeCone = new THREE.CylinderGeometry(1, 50, 40);</p>\n        <p>monPremierCone.position.set(0, -200, 0);</p>\n    </div>\n\n    <p>Dans la recette du tube, vous avez remarqué les trois chiffres entre parenthèses? Changez-les et\n        devinez ce que chacun d'entre eux change.</p>\n    <p>Vous pouvez en ajouter un 4e! Que se passe-t-il alors?</p>\n    <p>A l'aide de ce quatrième chiffre, votre but est désormais de construire une pyramide!</p>\n    <p>A vous de jouer!</p>\n    <p>Voilà quel devrait être le résultat final:</p>\n    <div class=\"screenshot\">\n        <img src=\"./assets/screenshots/pyramide.jpg\" id=\"pyramide\" alt=\"pyramide\">\n    </div>\n    <p>Placez cette pyramide à l'endroit où je l'ai mise en jouant avec les paramètres de position et\n        de rotation.</p>\n    <p>--! NE REGARDEZ PAS LA SOLUTION AVANT D'AVOIR VRAIMENT EXPERIMENTE VOS SOLUTIONS !--</p>\n    <button class='reveal'>VOIR LE CODE</button>\n    <div class=\"code\">\n        <p>var recetteDePyramide = new THREE.CylinderGeometry(1, 50, 20, 4);</p>\n        <p>var maPremierePyramide = new THREE.Mesh(recetteDePyramide, surface);</p>\n        <p>scene.add(maPremierePyramide);</p>\n        <p>maPremierePyramide.position.set(-170, 150, 50);</p>\n        <p>maPremierePyramide.rotation.set(1, 0, 0);</p>\n    </div>\n</div>";
},"useData":true});
})();