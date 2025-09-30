# 🚀 Guide de Déploiement GitHub Pages

## Étapes pour publier votre site CV

### 1. Préparer le repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🎉 Initial commit - Site web CV professionnel"

# Créer la branche main
git branch -M main
```

### 2. Créer le repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **New repository**
3. Nommez votre repository (suggestions) :
   - `cv-frederic-thomas`
   - `portfolio-professional`
   - `frederic-thomas-portfolio`
4. ✅ Cochez **Public** (pour GitHub Pages gratuit)
5. ❌ Ne cochez PAS "Add a README file" (vous en avez déjà un)
6. Cliquez **Create repository**

### 3. Connecter votre projet local à GitHub

```bash
# Remplacez VOTRE-USERNAME et VOTRE-REPO-NAME
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO-NAME.git

# Pousser le code
git push -u origin main
```

### 4. Activer GitHub Pages

1. Sur votre repository GitHub, allez dans **Settings**
2. Dans le menu de gauche, cliquez sur **Pages**
3. Dans **Source** :
   - Sélectionnez **Deploy from a branch**
   - Branch : **main**
   - Folder : **/ (root)**
4. Cliquez **Save**

### 5. Votre site sera disponible à :

```
https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME/
```

⏱️ **Délai :** 5-10 minutes pour la première publication

## 🔧 Configuration avancée

### Domaine personnalisé (optionnel)

Si vous avez un domaine :
1. Dans **Settings > Pages**
2. **Custom domain** : `votre-domaine.com`
3. Créez un fichier `CNAME` :

```bash
echo "votre-domaine.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### HTTPS automatique
✅ GitHub Pages active automatiquement HTTPS

### Mise à jour du site

```bash
# Après modifications
git add .
git commit -m "📝 Mise à jour du contenu"
git push

# Le site se met à jour automatiquement en 2-3 minutes
```

## 📊 Optimisations pour GitHub Pages

### 1. Mettre à jour les URLs dans le HTML

Remplacez dans `index.html` :
```html
<!-- Remplacez ces lignes -->
<meta property="og:url" content="https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME/">
<meta property="og:image" content="https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME/images/profile-photo.svg">
<meta property="twitter:url" content="https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME/">
<meta property="twitter:image" content="https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME/images/profile-photo.svg">
```

### 2. Ajouter Google Analytics (optionnel)

Dans `<head>` de `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 Vérifications avant publication

### ✅ Checklist de déploiement :

- [ ] Toutes les images sont remplacées (pas de placeholder)
- [ ] Informations de contact correctes
- [ ] Liens LinkedIn et email fonctionnels
- [ ] Test sur mobile et desktop
- [ ] Vérification orthographe FR/EN
- [ ] URLs des meta tags mises à jour
- [ ] Fichier .gitignore présent

### 🧪 Tests post-déploiement :

1. **Fonctionnalité** : Testez tous les boutons et liens
2. **Responsive** : Vérifiez sur mobile
3. **Performance** : Utilisez [PageSpeed Insights](https://pagespeed.web.dev/)
4. **SEO** : Vérifiez avec [Google Search Console](https://search.google.com/search-console)

## 🚨 Résolution de problèmes

### Site ne s'affiche pas :
- Vérifiez que GitHub Pages est activé
- Attendez 10 minutes après activation
- Vérifiez l'onglet **Actions** pour les erreurs

### Images ne s'affichent pas :
- Vérifiez les chemins dans `index.html`
- Assurez-vous que les images sont dans le dossier `images/`
- Respectez la casse des noms de fichiers

### Erreur 404 :
- Vérifiez que `index.html` est à la racine
- Vérifiez l'URL : `username.github.io/repo-name/`

## 📈 Promotion de votre site

### Partage professionnel :
- Ajoutez l'URL à votre profil LinkedIn
- Incluez-la dans votre signature email
- Partagez sur vos réseaux professionnels

### Référencement :
- Soumettez à Google Search Console
- Créez des liens depuis vos autres profils
- Partagez sur des plateformes professionnelles

## 🔄 Maintenance

### Mises à jour régulières :
- Ajoutez nouvelles expériences
- Mettez à jour les photos
- Ajoutez nouveaux projets
- Vérifiez les liens cassés

### Sauvegarde :
- Votre code est sauvegardé sur GitHub
- Clonez régulièrement en local
- Gardez une copie des images originales

---

**🎯 Objectif :** Votre CV professionnel accessible 24h/24 depuis n'importe où dans le monde !