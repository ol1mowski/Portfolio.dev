# Skrypt PowerShell do aktualizacji importów po zmianie nazw plików

# Funkcja do logowania wiadomości
function Write-Info {
    param (
        [string]$Message
    )
    Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

Write-Info "Rozpoczynam aktualizację importów..."

# Funkcja do aktualizacji zawartości plików
function Update-FileContent {
    param (
        [string]$FilePath,
        [string]$OldPattern,
        [string]$NewPattern
    )
    
    if (Test-Path $FilePath -PathType Leaf) {
        $content = Get-Content -Path $FilePath -Raw
        if ($content -match $OldPattern) {
            $newContent = $content -replace $OldPattern, $NewPattern
            Set-Content -Path $FilePath -Value $newContent -NoNewline
            Write-Info "Zaktualizowano importy w: $FilePath"
        }
    }
}

# 1. Aktualizacja importów dla typów (.type.ts -> .types.ts)
Write-Info "Aktualizacja importów dla typów..."
$typeFiles = Get-ChildItem -Path . -Recurse -Include "*.ts", "*.tsx" | Where-Object { $_.FullName -notlike "*\node_modules\*" }

foreach ($file in $typeFiles) {
    Update-FileContent -FilePath $file.FullName -OldPattern '\.type(\"|'')' -NewPattern '.types$1'
}

# 2. Aktualizacja importów dla hooków (.hook.ts -> .ts)
Write-Info "Aktualizacja importów dla hooków..."
foreach ($file in $typeFiles) {
    Update-FileContent -FilePath $file.FullName -OldPattern '\.hook\.ts(\"|'')' -NewPattern '.ts$1'
    Update-FileContent -FilePath $file.FullName -OldPattern '\.hook\.tsx(\"|'')' -NewPattern '.tsx$1'
}

# 3. Aktualizacja importów dla zmienionych katalogów
Write-Info "Aktualizacja importów dla zmienionych katalogów..."
$dirMappings = @{
    "\/UI\/" = "/ui/"
    "\/Utils\/" = "/utils/"
    "\/Blog\/" = "/blog/"
    "\/Ebook\/" = "/ebook/"
    "\/Ebooki\/" = "/ebooki/"
    "\/Notatki\/" = "/notatki/"
    "\/Thanks\/" = "/thanks/"
}

foreach ($dir in $dirMappings.GetEnumerator()) {
    foreach ($file in $typeFiles) {
        Update-FileContent -FilePath $file.FullName -OldPattern $dir.Key -NewPattern $dir.Value
    }
}

Write-Info "Aktualizacja importów zakończona" 