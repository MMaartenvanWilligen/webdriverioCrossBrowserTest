# Demo front-end website test

<b>Samenvatting<b/>

In deze de demo wordt een eenvoudige website getest op front-end. Kleine tests die zijn geschreven
in javscript. Het is een voorbeeld project van hoe een front-end website test kan worden opgezet 
met het oog op continous integration. De volgende tools zijn hierbij gebruikt.

- Github
- Travis CI 
- Node
- Webdriverio (Browser automation)
- Saucelabs (automated testing cloud for web and mobile apps.)
- Mocha (Javascript test framework)

De demo laat zien hoe de verschillende tools met elkaar kunnen samenwerken om zo een geschikte test omgeving te maken. 
In de demo is gebruik gemaakt van het Page object pattern en worden de tests op verschillende browsers en in parallel 
uitgevoerd.

<b>Samenwerking tools<b/>

Travis heeft verschillende hooks die inhaken op verschillende github commands. Wanneer er bijvoorbeeld een push wordt 
uitgevoerd naar een github repository kan travis hier een actie aankoppelen. De demo maakt hier ook gebruik van en start
bij het doen van een push naar de repository een nieuwe virtual machine. Hiervoor moet je wel eerst je travis met github synchroniseren.
Dit kan eenvoudig gedaan worden op je travis account. 

Met het bestand travis.yml kan je travis vertellen welke scripts het moet uitvoeren en hoe de virtual machine eruit moet zien.
In dit bestand wordt onder andere node geinstalleerd en geinitialiseerd. Daarna wordt er een tunnel connectie opgezet met suacelabs 
met behulp van een username en acceskey van suacelabs. De documentatie voor het opzetten van die connectie staat hier: https://docs.travis-ci.com/user/sauce-connect/

Bij de Node initialisatie wordt gebruik gemaakt van de package.json file. Hierin staan de bondigde node-modules die moeten wordengeinstalleerd door node.


<b>Page Object<b/>





