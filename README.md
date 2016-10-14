# Demo front-end website test

#### Samenvatting

In deze demo een demonstratie van hoe een front-end test kan worden opgezet. Kleine javascript tests geschreven voor een eenvoudige website. De test omgeving is ingericht met het oog op continuous delivery. De volgende tools zijn gebruikt voor het opzetten van de omgeving en tests.

- Github
- Travis CI https://saucelabs.com
- Node	https://nodejs.org/en/
- Webdriverio (Browser automation) http://webdriver.io/
- Saucelabs (automated testing cloud for web and mobile apps.) https://saucelabs.com
- Mocha (Javascript test framework) https://mochajs.org/

De demo laat zien hoe de verschillende tools met elkaar kunnen samenwerken voor de opzet van een goede testomgeving. Een testomgeving waar tests in parallel en op verschillende browsers kunnen worden uitgevoerd, rekening wordt gehouden met continuous delivery en de test in javascript kunnen worden geschreven. Om de test scripts overzichtelijk en schaalbaar te houden is in dit project ook te zien hoe het page object pattern kan worden gebruikt. Lees verder en analyseer de comments voor meer uitleg. 

## Getting Started

#### Lees uitleg

Lees eerst de [uitleg](##Uitleg) voor meer informatie over deze demo. 
#### Accounts aanmaken

Sauce Labs Account: https://saucelabs.com/ <br>
Travis Account: https://travis-ci.com/

#### Fork en clone project
Op GitHub, navigeer naar de MMaartenvanWilligen/webdriverioCrossBrowserTest/ repository.
klik rechtsboven op de fork button
Maak een lokale clone van de fork
``` command
$ git clone https://github.com/YOUR-USERNAME/webdriverioCrossBrowserTest
```
#### Synchroniseer travis met github repository

Op het aangemaakte travis account moet github worden gesynchroniseerd met Travis. Dit kan hier: https://travis-ci.org/profile/YOUR_USERNAME.

klik rechtsboven op de sync knop
schuif de switch van de repository van dit project op aan

#### Aanpassen account variabelen

Om de test te kunnen draaien moeten er een aantal waardes worden veranderd in de code.

Vul in het bestand van travis.yml uw eigen username en accesskey in . De acceskey is te vinden onder het kopje Tunnels op uw Sauce Labs account.

``` yml
addons:
 sauce_connect:
   username: “SAUCE_USERNAME”
   access_key: “SAUCE_ACCESS_KEY”
```
#### Laat website lokaal draaien

In de repository is een eenvoudige website bijgevoegd (webdriverioCrossBrowserTest/website/). De tests suites zijn gemaakt voor deze website. De website moet lokaal draaien op port 8000, zodat de sauce labs tunnel de lokaal draaiende website kan bereiken. 

#### Start test


Nu is alles gereed voor gebruik. Maak een push naar de repository en bekijk het resultaat op je Travis en Sauce Labs Account.

``` command
$ git push origin
```


## Uitleg

#### De testomgeving

Travis heeft verschillende hooks die inhaken op github commands. Bijvoorbeeld wanneer er een push wordt uitgevoerd naar een github repository.Travis kan dan aan deze push een actie koppelen met een hook. In dit project start travis na een push command een virtual machine. Deze virtual machine zet vervolgens het verdere test proces in gang. (Voor het instellen van hooks moet je wel eerst je travis met github repository synchroniseren. Dit kan eenvoudig gedaan worden op je travis account.)

Met het bestand travis.yml kan je travis vertellen welke scripts het moet uitvoeren en hoe de virtual machine moet worden ingericht. In dit project wordt daar onder andere node geïnstalleerd en geïnitialiseerd. Daarna wordt er een tunnel connectie opgezet met Sauce Labs met behulp van een username en accesskey van sauce labs. De documentatie voor het opzetten van die connectie staat hier: https://docs.travis-ci.com/user/sauce-connect/. Deze tunnel is nodig om Sauce Labs toegang te verlenen aan lokaal draaiende websites. 

Bij de Node initialisatie wordt gebruik gemaakt van de package.json file. Hierin staan de benodigde node_modules die moeten worden geïnstalleerd door node. Dit zijn bijvoorbeeld het mocha javascript framework en webdriverio. Vervolgens wordt in de package.json scripts tag de wdio.conf.js uitgevoerd.

wdio.conf.js is de Webdriverio configuratie file welke alle benodigde informatie bevat om met Webdriverio te testen. In deze file zijn de verschillende browsers geformuleerd waarin de tests moeten worden uitgevoerd. Daarnaast wordt hier aan Webdriverio doorgegeven dat het via de Sauce Labs tunnel(opgezet in travis.yml) de verschillende browser kan bereiken en aansturen. Sauce Labs is een selenium georiënteerde server. 

Webdriverio is een schakel tussen selenium en Nodejs. Met webdriverio kun je browser automatisch aansturen met javascript. In het project wordt het gebruikt om bijvoorbeeld te navigeren naar een pagina of te klikken op een knop. Je kan eigenlijk door een website heengaan zoals een gebruiker dat ook zou doen, maar dan automatisch. De browser die webdriverio aanstuurt staan in dit project op Sauce Labs.

Sauce Labs is een automated testing cloud met heel veel browsers, platformen en operating systems waarop getest kan worden. Het zelf opzetten en bijhouden van browser en  platformen op je virtual machine om op te testen is erg tijdsintensief. Daarnaast kan je op het account van Sauce Labs uitgevoerde tests terugkijken in video. Nog een voordeel van Sauce Labs is dat lokaal draaiende websites ook kunnen worden bereikt via de sauce tunnel. In dit project is ook gebruik gemaakt van deze tunnel om de lokaal draaiende website http://localhost:4445/webdriverioProject/website/index.html te kunnen testen.

Mocha is een javascript framework voor testing. Met mocha worden de tests leesbarder en kunnen testresultaten eenvoudig worden afgehandeld. Het is een promise aware framework en dat maakt het makkelijk om ook asynchrone website test uit te voeren. Hier wordt nadrukkelijk gebruik van gemaakt in deze demo.

#### Page Object Pattern

Het Page Object pattern fungeert als schakel tussen de dom elementen van een website en de test scripts. Een page object lokaliseert alle benodigde elementen op de pagina en de tests kunnen vervolgens deze elementen aanspreken via dit object. Wanneer er een element verandert in de Dom hoeft dit alleen aangepast te worden in het page object. Dit helpt je tests schaalbaar te houden. 


#### Links

travis van project: https://travis-ci.org/MMaartenvanWilligen/webdriverioCrossBrowserTest

##license



