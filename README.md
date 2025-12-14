# JG Fitness 💪

Application mobile d'entraînement minimaliste et performante.

## ✨ Fonctionnalités

### 💪 Onglet Séance
- **3 Programmes d'entraînement** personnalisables
- **Cartes d'exercices** avec :
  - Nom de l'exercice
  - Temps de repos entre séries
  - Nombre de séries et répétitions
  - Instructions détaillées
  - Média visuel (image/GIF)
- **Journal de bord intégré** pour chaque exercice :
  - Enregistrement du poids (kg)
  - Enregistrement des répétitions réalisées
- **Timer de repos** avec alerte sonore et vibration

### ⚙️ Onglet Réglages
- Notifications d'entraînement
- Son du timer
- Vibration
- Export/Import des données
- Effacer l'historique
- Réinitialiser l'application

### 👤 Onglet Profil
- Statistiques globales (séances, streak, record)
- Records personnels (PR)
- Historique des séances

## 🚀 Installation

### Option 1 : GitHub Pages
Visitez directement : `https://[username].github.io/jg-fitness/`

### Option 2 : Local
```bash
# Cloner le repo
git clone https://github.com/[username]/jg-fitness.git

# Ouvrir le dossier
cd jg-fitness

# Lancer un serveur local
python3 -m http.server 8080

# Ouvrir dans le navigateur
open http://localhost:8080
```

## 📱 Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec variables CSS, glassmorphism, animations
- **JavaScript** - Vanilla JS, aucune dépendance externe
- **localStorage** - Persistance des données

## 🎨 Design

- Thème sombre élégant
- Navigation inférieure arrondie
- Cartes flottantes avec effets de glassmorphism
- Animations fluides
- Design mobile-first responsive

## 📝 Personnalisation des programmes

Les programmes sont définis dans `app.js` dans la constante `TRAINING_PROGRAMS`. Chaque programme contient :

```javascript
{
    id: 'program_1',
    name: 'Programme A',
    subtitle: 'Full Body - Force',
    icon: '🏋️',
    exercises: [
        {
            id: 'ex1',
            name: 'Squat',
            restTime: 120,        // secondes
            sets: 4,
            reps: '8-10',
            instructions: '...',
            media: null           // URL image/GIF
        }
        // ...
    ]
}
```

## 📄 Licence

MIT License - Libre d'utilisation et de modification.

---

Développé avec ❤️ pour JG Fitness
