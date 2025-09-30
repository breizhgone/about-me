# Site Web CV - Frédéric Thomas

Un site web personnel moderne et professionnel présentant mon CV en français et en anglais, avec une galerie photo interactive.

## 🌟 Fonctionnalités

### 🌍 Multilingue
- Basculement instantané entre français et anglais
- Tout le contenu est traduit (textes, navigation, sections)
- Bouton de langue dans la navigation

### 📱 Design Responsive
- Adaptation parfaite sur mobile, tablette et desktop
- Navigation mobile avec menu hamburger
- Images optimisées pour tous les écrans

### 🎨 Interface Moderne
- Design élégant avec dégradés et animations
- Palette de couleurs professionnelle (bleu/violet)
- Effets visuels au scroll et au survol
- Typographie moderne et lisible

### 📸 Galerie Photo Interactive
- Section galerie avec 6 photos professionnelles
- Modal pour agrandir les images
- Effets de survol 3D sur les photos
- Images placeholder colorées (à remplacer par vos vraies photos)

### ⚡ Animations et Interactions
- Animation de frappe pour le titre principal
- Effets parallax sur la section hero
- Animations au scroll avec Intersection Observer
- Transitions fluides entre les sections
- Lazy loading des images pour de meilleures performances

## 📂 Structure du Site

### Sections principales :
1. **Hero/Accueil** - Présentation avec photo de profil et informations de contact
2. **À propos** - Résumé professionnel, certifications et brevets
3. **Expérience** - Timeline interactive du parcours professionnel
4. **Compétences** - Technologies, langues et méthodologies organisées par catégories
5. **Galerie** - Photos professionnelles avec modal d'agrandissement
6. **Contact** - Informations de contact avec liens directs

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique moderne
- **CSS3** - Flexbox, Grid, animations, dégradés
- **JavaScript ES6+** - Classes, modules, API modernes
- **Font Awesome** - Icônes vectorielles
- **SVG** - Images placeholder vectorielles
- **Intersection Observer API** - Animations au scroll
- **CSS Custom Properties** - Variables CSS pour la maintenance

## 📸 Gestion des Photos

### Images incluses :
- **Photo de profil** (400x400px) - Section hero
- **Photo à propos** (500x360px) - Section à propos
- **6 photos de galerie** (600x400px) - Section galerie

### Images placeholder générées :
- `profile-photo.svg` - Photo de profil principale
- `about-photo.svg` - Photo pour la section à propos
- `team-work.svg` - Travail d'équipe
- `technology.svg` - Technologies
- `office-brest.svg` - Bureau/environnement de travail
- `conference.svg` - Conférences/présentations
- `aws-cloud.svg` - Cloud computing/AWS
- `genesys-team.svg` - Équipe Genesys

> 📖 **Guide détaillé :** Consultez `README-PHOTOS.md` pour savoir comment remplacer les images placeholder par vos vraies photos.

## 🛠️ Installation et Utilisation

### Utilisation simple :
1. Ouvrez `index.html` dans votre navigateur
2. Le site fonctionne immédiatement sans serveur

### Pour le développement :
```bash
# Cloner le projet
git clone [votre-repo]
cd about-me

# Générer les images placeholder (optionnel)
powershell -ExecutionPolicy Bypass -File generate-images.ps1

# Ouvrir dans votre éditeur
code .
```

### Personnalisation :
1. **Remplacez les photos** - Suivez le guide dans `README-PHOTOS.md`
2. **Modifiez le contenu** - Éditez les attributs `data-fr` et `data-en` dans `index.html`
3. **Ajustez les couleurs** - Modifiez les variables CSS dans `styles.css`
4. **Ajoutez du contenu** - Suivez la structure existante

## 🎯 Fonctionnalités Avancées

### Navigation intelligente :
- Défilement fluide vers les sections
- Navbar qui change d'apparence au scroll
- Navigation au clavier (Escape pour fermer les modals)

### Optimisations performance :
- Lazy loading des images
- Throttling des événements scroll
- Animations CSS hardware-accelerated
- Images SVG légères comme placeholder

### Accessibilité :
- Navigation au clavier
- Attributs alt sur toutes les images
- Contraste de couleurs respecté
- Structure HTML sémantique

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions récentes)
- ✅ iOS Safari, Chrome Mobile
- ✅ Responsive design (320px à 1920px+)
- ✅ Support des écrans haute résolution

## 🔧 Fichiers Utilitaires

- `generate-images.ps1` - Script PowerShell pour générer les images placeholder
- `create-placeholder-images.html` - Générateur d'images dans le navigateur
- `README-PHOTOS.md` - Guide détaillé pour la gestion des photos

## 🚀 Déploiement

### Hébergement statique :
- **GitHub Pages** - Gratuit, idéal pour les portfolios
- **Netlify** - Déploiement automatique depuis Git
- **Vercel** - Performance optimisée
- **Serveur web classique** - Apache, Nginx

### Avant le déploiement :
1. Remplacez toutes les images placeholder
2. Vérifiez tous les liens et informations de contact
3. Testez sur mobile et desktop
4. Optimisez les images (compression)

## 📈 Améliorations Futures

### Fonctionnalités possibles :
- [ ] Formulaire de contact fonctionnel
- [ ] Section blog/articles
- [ ] Témoignages clients
- [ ] Intégration réseaux sociaux
- [ ] Analytics (Google Analytics)
- [ ] PWA (Progressive Web App)
- [ ] Mode sombre/clair

### Optimisations techniques :
- [ ] Minification CSS/JS
- [ ] Optimisation des images WebP
- [ ] Service Worker pour le cache
- [ ] Préchargement des ressources critiques

## 📞 Support

Pour toute question ou problème :
1. Consultez les fichiers README
2. Vérifiez la console du navigateur pour les erreurs
3. Testez sur différents navigateurs

## 📄 Licence

Ce projet est libre d'utilisation pour votre usage personnel et professionnel.

---

**Créé avec ❤️ pour présenter le parcours professionnel de Frédéric Thomas**  
*Senior Software Engineering Manager chez Genesys*