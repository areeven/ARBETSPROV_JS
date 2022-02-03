Utfört av: Emilie Öst
Utfärdat av: Nordic Retail Group

1. [Uppgiften](#uppgiften)
2. [GitHub](#github)
3. [NPM](#installera-npm)
4. [Get it Running](#get-it-running)
5. [Entitet](#entitet)

# KODTEST

### Ett test för att visa mina kunskaper i JavaScript - Backend Projekt

---

## Uppgiften
- Jag ska bygga ett REST API i Express.js
- API ska hantera - 
  - Skapa en entitet
  - Uppdatera fält i entiteten
  - Begränsa användaren så att ett fält i entiteten inte går att ändra före ett annat fält är true
- API:et skall vara säkert

---

##Steg ett

###GitHub
1. `git init`
2. `git add .`
3. `git commit -m "added project"`
4. `git branch -M main`
5. `git remote add origin git@github.com:areeven/ARBETSPROV_JS.git`
6. `git push -u origin main`

---

##Steg två

###Installera npm

`npm init -y`

npm i -D:
- `express`
- `winston`
- `dotenv`
- `mongoose`
- `morgan`
- `helmet`
- `cors`
- `nodemon`

Testa funktionalitet - 
npm i: 
- `mocha`
- `chai-http`
- `chai`

### Get it running

Jag börjar med en src directory med en Server.js
I den importerar jag express
och för användarvänligheten och inte behöva importera Express i varje fil där det används
så exporterar jag app `export const app = Express()`, på så vis behöver jag inte upprepa mig
när jag senare använder app.

Tid som passerat: 1 timme

### Entitet

Planen för denna uppgift är att göra ett API som hanterar Ekologiskt Kaffe
Det som ska ingå är:
- Märke
- Smak
- Styrka
- True eller false om det är ekologiskt eller inte

Jag vill testa funktionalitet av min kod och kommer att implementera CRUD
för att kunna skapa, läsa av, uppdatera men också ta bort.

Det kommer vara ett krav att välja om kaffet är ekologiskt annars får man inte uppdatera/skapa

