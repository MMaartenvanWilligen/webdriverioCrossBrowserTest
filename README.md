# Demo front-end website test

<b>Samenvatting<b/>

In deze de demo wordt een eenvoudige website getest op front-end. Kleine tests die zijn geschreven in javscript. Het is een voorbeeld project van hoe een front-end website test kan worden opgezet met het oog op continous integration. De volgende tools zijn hierbij gebruikt.

- Github
- Travis CI
- Node
- Webdriverio (Browser automation)
- Saucelabs (automated testing cloud for web and mobile apps.)
- Mocha (Javascript test framework)

De demo laat zien hoe de verschillende tools met elkaar kunnen samenwerken om zo een geschikte test omgeving te maken. In de demo is gebruik gemaakt van het Page object pattern en worden de tests op verschillende browsers en in parallel uitgevoerd.

<b>Samenwerking tools<b/>

Travis heeft verschillende hooks die inhaken op verschillende github commands. Wanneer er bijvoorbeeld een push wordt uitgevoerd naar een github repository kan travis hier een actie aan koppelen. De demo maakt hier ook gebruik van en start bij het doen van een push naar de repository een nieuwe virtual machine. Hiervoor moet je wel eerst je travis met github synchroniseren. Dit kan eenvoudig gedaan worden op je travis account.

Met het bestand travis.yml kan je travis vertellen welke scripts het moet uitvoeren en hoe de virtual machine eruit moet zien. In dit bestand wordt onder andere node geïnstalleerd en geïnitialiseerd. Daarna wordt er een tunnel connectie opgezet met Sauce Labs met behulp van een username en accesskey van sauce labs. De documentatie voor het opzetten van die connectie staat hier: https://docs.travis-ci.com/user/sauce-connect/

Bij de Node initialisatie wordt gebruik gemaakt van de package.json file. Hierin staan de benodigde node_modules die moeten worden geïnstalleerd door node. Dit zijn bijvoorbeeld het mocha javascript framework en webdriverio. Vervolgens wordt in de package.json scripts tag de wdio.conf.js uitgevoerd.

wdio.conf.js is de Webdriverio configuratie file welke alle benodigde informatie bevat om met Webdriverio te testen. In deze file zijn de verschillende browsers geformuleerd waarin de tests moeten worden uitgevoerd. Daarnaast wordt hier aan Webdriverio doorgegeven dat het via de Sauce Labs tunnel(opgezet in travis.yml) de verschillende browser kan bereiken en aansturen.

Met webdriverio 

Sauce Labs is een automated testing cloud met heel veel browsers, platformen en os waarop getest kan worden. Het is een selenium server. Op het account van Sauce Labs kun je uitgevoerde tests terug kijken met een video of door het bekijken van de uitgevoerde commands met bijbehorende response. Daarnaast is een groot voordeel dat lokale test ook kunnenworden bereikt via de sauce tunnel. In dit project is ook gebruik gemaakt van deze tunnel om de lokaal draaiende website http://localhost:4445/webdriverioProject/website/index.html te kunnen testen.

Mocha

<b>Page Object<b/>


<b>Links<b/>

travis van project: https://travis-ci.org/MMaartenvanWilligen/webdriverioCrossBrowserTest





