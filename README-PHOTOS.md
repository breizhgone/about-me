# Guide pour ajouter vos photos personnelles

## 📸 Photos à remplacer

Votre site web contient actuellement des images placeholder colorées. Voici comment les remplacer par vos vraies photos :

### 1. Photo de profil principale
- **Fichier :** `images/profile-photo.svg`
- **Dimensions recommandées :** 400x400px (carré)
- **Format :** JPG ou PNG
- **Description :** Votre photo de profil professionnelle, idéalement un portrait avec un fond neutre

### 2. Photo "À propos"
- **Fichier :** `images/about-photo.svg`
- **Dimensions recommandées :** 500x360px
- **Format :** JPG ou PNG
- **Description :** Photo de vous dans votre environnement de travail ou une photo plus décontractée

### 3. Photos de la galerie

#### Travail d'équipe
- **Fichier :** `images/team-work.svg`
- **Dimensions :** 600x400px
- **Description :** Photo d'équipe, réunion, ou collaboration

#### Technologies
- **Fichier :** `images/technology.svg`
- **Dimensions :** 600x400px
- **Description :** Photo liée aux technologies (écrans, code, serveurs, etc.)

#### Bureau Brest
- **Fichier :** `images/office-brest.svg`
- **Dimensions :** 600x400px
- **Description :** Photo de votre bureau, espace de travail, ou vue de Brest

#### Conférence
- **Fichier :** `images/conference.svg`
- **Dimensions :** 600x400px
- **Description :** Photo de vous en présentation, conférence, ou formation

#### AWS Cloud
- **Fichier :** `images/aws-cloud.svg`
- **Dimensions :** 600x400px
- **Description :** Photo liée au cloud computing, data centers, ou diagrammes AWS

#### Équipe Genesys
- **Fichier :** `images/genesys-team.svg`
- **Dimensions :** 600x400px
- **Description :** Photo avec vos collègues de Genesys ou logo/bureaux Genesys

## 🔄 Comment remplacer les images

### Méthode simple :
1. Renommez vos photos avec les noms exacts des fichiers ci-dessus
2. Remplacez l'extension `.svg` par `.jpg` ou `.png` selon votre format
3. Copiez vos photos dans le dossier `images/`
4. Mettez à jour les références dans `index.html` si nécessaire

### Exemple :
```
Votre photo : ma-photo-profil.jpg
→ Renommer en : profile-photo.jpg
→ Placer dans : images/profile-photo.jpg
```

## 📐 Conseils pour de meilleures photos

### Photo de profil :
- ✅ Fond neutre ou flou
- ✅ Éclairage naturel
- ✅ Regard vers l'objectif
- ✅ Tenue professionnelle
- ❌ Éviter les selfies
- ❌ Éviter les photos trop sombres

### Photos de galerie :
- ✅ Haute résolution (minimum 600x400px)
- ✅ Bonne luminosité
- ✅ En rapport avec le contexte professionnel
- ✅ Format paysage (horizontal)
- ❌ Photos floues ou pixelisées
- ❌ Photos trop personnelles

## 🎨 Optimisation des images

Pour de meilleures performances :
1. **Compressez vos images** (utilisez des outils comme TinyPNG)
2. **Format recommandé :** JPG pour les photos, PNG pour les images avec transparence
3. **Taille de fichier :** Idéalement moins de 500KB par image
4. **Résolution :** Pas besoin de plus de 1200px de largeur

## 🔧 Modification du code

Si vous changez les noms de fichiers, mettez à jour les références dans `index.html` :

```html
<!-- Exemple : changer de SVG vers JPG -->
<img src="images/profile-photo.svg" alt="...">
<!-- devient -->
<img src="images/profile-photo.jpg" alt="...">
```

## 📱 Test sur mobile

Après avoir ajouté vos photos :
1. Ouvrez le site sur votre téléphone
2. Vérifiez que toutes les images s'affichent correctement
3. Testez la galerie et le zoom des images

## 🆘 Problèmes courants

**Les images ne s'affichent pas :**
- Vérifiez les noms de fichiers (sensible à la casse)
- Vérifiez que les images sont dans le dossier `images/`
- Vérifiez les extensions de fichiers dans le HTML

**Images déformées :**
- Respectez les proportions recommandées
- Utilisez des images de qualité suffisante

**Site lent à charger :**
- Compressez vos images
- Réduisez la taille des fichiers