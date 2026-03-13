<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=36A198&text=Memory%20L%C3%A9gumes&height=120&section=header&fontColor=FFFFFF"/>
</p>

# 🥕 **Memory Légumes – 1ère application web !**

**Premier projet HTML/CSS/JS** : jeu memory avec **12 cartes légumineuses** à apparier !  
**Auth système** inscrit (inscription OK, connexion WIP). **Mode triche** ESPACE !

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira%20Code&size=24&pause=800&color=D0F0C3&background=2F7425&width=600&height=50&lines=Premier+projet+HTML%2FCSS%2FJS;Memory+12+cartes+l%C3%A9gumes;Espace+%3D+nouvelle+partie" />
</div>

---

## 🎮 **Gameplay**

🥬 Trouver les 6 paires de légumes
👆 Cliquer 1ère carte → 2ème carte
✅ Paires trouvées = bloquées visibles
❌ Pas paire = retour dos après 1s
🏆 Victoire : "Bravo ! vous avez gagné !"
🔄 Espace = nouvelle partie

---

## 🎨 **Identité visuelle nature**

🌿 Fond : rgba(54, 161, 152, 0.6) (vert turquoise)
🍃 Nav/Encadrés : rgba(208, 240, 195, 0.86) (vert clair)
🥗 Cartes : #2f7425 (vert forêt)

---

## ✨ **Fonctionnalités techniques**

✅ Mélange aléatoire cartes (shuffle Fisher-Yates)
✅ Gestion paires (firstCard/secondCard)
✅ Timer 1s non-paires + boardLocked
✅ Victory check après chaque paire
✅ Relance ESPACE (reset + remix)
✅ Images SVG légumes (6 uniques ×2)

---

## 🔧 **Code star**
```javascript
// Fisher-Yates shuffle PRO
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
```
---

##👤 **Auth (partiel)**

✅ Page inscription fonctionnelle
✅ Formulaire validation (check/error SVG)
✅ Barre progression mot de passe
⏳ Connexion + profil = WIP

<div align="center"> <img src="https://img.shields.io/badge/Tech-HTML%20CSS%20VanillaJS-36A198?style=flat&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/Status-Premier%20projet-D0F0C3?style=flat&logo=star&logoColor=2F7425"/> <img src="https://img.shields.io/badge/Triche-Espace%20reset-2F7425?style=flat&logo=gamepad&logoColor=white"/> </div>
---

🎯 Skills de mes débuts

    1️⃣ DOM manipulation (createElement, addEventListener)

    2️⃣ Game logic complète (pairs, lock, victory)

    3️⃣ CSS custom (rgba transparents, bordures rondes)

    4️⃣ Event handling (click, keyup ESPACE)

    5️⃣ Responsive nav + formulaires

    
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=36A198&height=100&section=footer&fontColor=FFFFFF"/> </p> 
