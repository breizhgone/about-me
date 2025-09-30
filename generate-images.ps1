# Script PowerShell pour générer des images placeholder
Write-Host "Génération des images placeholder..." -ForegroundColor Green

# Créer le dossier images s'il n'existe pas
if (!(Test-Path "images")) {
    New-Item -ItemType Directory -Path "images"
}

# Fonction pour créer une image SVG placeholder
function Create-PlaceholderSVG {
    param(
        [string]$filename,
        [int]$width,
        [int]$height,
        [string]$text,
        [string]$color,
        [string]$textColor = "white"
    )
    
    $svgContent = @"
<svg width="$width" height="$height" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="grad$filename" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:$color;stop-opacity:1" />
            <stop offset="100%" style="stop-color:$color;stop-opacity:0.7" />
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad$filename)"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
          text-anchor="middle" dominant-baseline="middle" fill="$textColor">$text</text>
    <circle cx="20%" cy="20%" r="30" fill="rgba(255,255,255,0.1)"/>
    <circle cx="80%" cy="80%" r="40" fill="rgba(255,255,255,0.1)"/>
    <circle cx="70%" cy="30%" r="25" fill="rgba(255,255,255,0.1)"/>
</svg>
"@
    
    $svgContent | Out-File -FilePath "images/$filename.svg" -Encoding UTF8
    Write-Host "Créé: images/$filename.svg" -ForegroundColor Yellow
}

# Générer les images placeholder
$images = @(
    @{name="profile-photo"; width=400; height=400; text="Photo Profil"; color="#3498db"},
    @{name="about-photo"; width=500; height=360; text="À propos"; color="#9b59b6"},
    @{name="team-work"; width=600; height=400; text="Travail d'équipe"; color="#e74c3c"},
    @{name="technology"; width=600; height=400; text="Technologies"; color="#f39c12"},
    @{name="office-brest"; width=600; height=400; text="Bureau Brest"; color="#27ae60"},
    @{name="conference"; width=600; height=400; text="Conférence"; color="#8e44ad"},
    @{name="aws-cloud"; width=600; height=400; text="AWS Cloud"; color="#ff9500"},
    @{name="genesys-team"; width=600; height=400; text="Équipe Genesys"; color="#1abc9c"}
)

foreach ($img in $images) {
    Create-PlaceholderSVG -filename $img.name -width $img.width -height $img.height -text $img.text -color $img.color
}

Write-Host "`nImages placeholder générées avec succès!" -ForegroundColor Green
Write-Host "Vous pouvez maintenant remplacer ces fichiers SVG par vos vraies photos en gardant les mêmes noms." -ForegroundColor Cyan
Write-Host "`nFormats recommandés pour vos vraies photos:" -ForegroundColor White
Write-Host "- profile-photo.jpg : 400x400px (carré, photo de profil)" -ForegroundColor Gray
Write-Host "- about-photo.jpg : 500x360px (photo de vous au travail)" -ForegroundColor Gray
Write-Host "- team-work.jpg : 600x400px (photo d'équipe ou collaboration)" -ForegroundColor Gray
Write-Host "- technology.jpg : 600x400px (photo liée aux technologies)" -ForegroundColor Gray
Write-Host "- office-brest.jpg : 600x400px (photo de votre bureau/environnement)" -ForegroundColor Gray
Write-Host "- conference.jpg : 600x400px (photo de conférence ou présentation)" -ForegroundColor Gray
Write-Host "- aws-cloud.jpg : 600x400px (photo liée au cloud/AWS)" -ForegroundColor Gray
Write-Host "- genesys-team.jpg : 600x400px (photo de l'équipe Genesys)" -ForegroundColor Gray