# Demo front-end website test

<b>Samenvatting<b/>

In deze demo een demonstratie van hoe een front-end test kan worden opgezet. Kleine javascript tests geschreven voor een eenvoudige website. De test omgeving is ingericht met het oog op continuous delivery. De volgende tools zijn gebruikt voor het opzetten van de omgeving en tests.

- Github
- Travis CI https://saucelabs.com
- Node	https://nodejs.org/en/
- Webdriverio (Browser automation) http://webdriver.io/
- Saucelabs (automated testing cloud for web and mobile apps.) https://saucelabs.com
- Mocha (Javascript test framework) https://mochajs.org/

De demo laat zien hoe de verschillende tools met elkaar kunnen samenwerken voor de opzet van een goede testomgeving. Een testomgeving waar tests in parallel en op verschillende browsers kunnen worden uitgevoerd, rekening wordt gehouden met continuous delivery,  en de test in javascript kunnen worden geschreven. Om de test scripts overzichtelijk en schaalbaar te houden is in dit project ook te zien hoe het page object pattern kan worden gebruikt. Lees verder en analyseer de comments voor meer uitleg. 

<b>De testomgeving<b/>

Travis heeft verschillende hooks die inhaken op verschillende github commands. Bijvoorbeeld wanneer er een push wordt uitgevoerd naar een github repository.Travis kan aan deze push een actie aan koppelen. In dit project start travis na een push command een virtual machine. Deze virtual machine zet vervolgens het verdere test proces in gang. (Voor het instellen van hooks moet je wel eerst je travis met github repository synchroniseren. Dit kan eenvoudig gedaan worden op je travis account.)

Met het bestand travis.yml kan je travis vertellen welke scripts het moet uitvoeren en hoe de virtual machine moet worden ingericht. In dit project wordt daar onder andere node geïnstalleerd en geïnitialiseerd. Daarna wordt er een tunnel connectie opgezet met Sauce Labs met behulp van een username en accesskey van sauce labs. De documentatie voor het opzetten van die connectie staat hier: https://docs.travis-ci.com/user/sauce-connect/. Deze tunnel is nodig om Sauce Labs toegang te verlenen aan lokaal draaiende websites. 

Bij de Node initialisatie wordt gebruik gemaakt van de package.json file. Hierin staan de benodigde node_modules die moeten worden geïnstalleerd door node. Dit zijn bijvoorbeeld het mocha javascript framework en webdriverio. Vervolgens wordt in de package.json scripts tag de wdio.conf.js uitgevoerd.

wdio.conf.js is de Webdriverio configuratie file welke alle benodigde informatie bevat om met Webdriverio te testen. In deze file zijn de verschillende browsers geformuleerd waarin de tests moeten worden uitgevoerd. Daarnaast wordt hier aan Webdriverio doorgegeven dat het via de Sauce Labs tunnel(opgezet in travis.yml) de verschillende browser kan bereiken en aansturen.

Webdriverio is een schakel tussen selenium en nodejs. Met webdriverio kan je browser automatisch aansturen met javascript. In het project wordt het gebruikt om bijvoorbeeld te navigeren naar een pagina of te klikken op een knop. Je kan eigenlijk door een website heengaan zoals een gebruiker dat ook zou doen. De browser die webdriverio aanstuurt staan in dit project op Sauce Labs.

Sauce Labs is een automated testing cloud met heel veel browsers, platformen en operating systems waarop getest kan worden. Het zelf opzetten en bijhouden van browser en platformen op je virtual machine is erg tijdsintensief. Daarnaast kan je op het account van Sauce Labs uitgevoerde tests terugkijken in video. Nog een groot voordeel van Sauce Labs is dat lokaal draaiende websites ook kunnen worden bereikt via de sauce tunnel. In dit project is ook gebruik gemaakt van deze tunnel om de lokaal draaiende website http://localhost:4445/webdriverioProject/website/index.html te kunnen testen.

Mocha is een javascript framework voor testing. Met mocha worden de tests leesbarder en kunnen testresultaten eenvoudig worden afgehandeld. Het is een promise aware framework en dat maakt het makkelijk om ook asynchrone website test uit te voeren. Hier wordt nadrukelijk gebruik van gemaakt in deze demo.