# Skrypt PowerShell do stopniowej migracji na nowe konwencje nazewnictwa

# Funkcja do logowania wiadomości
function Write-Info {
    param (
        [string]$Message
    )
    Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

# 1. Zmiana nazw katalogów na kebab-case
Write-Info "Rozpoczynam zmianę nazw katalogów na kebab-case..."

# Katalogi w components
$componentDirs = @{
    "UI" = "ui"
    "Utils" = "utils"
}

foreach ($dir in $componentDirs.GetEnumerator()) {
    $source = "components\$($dir.Key)"
    $target = "components\$($dir.Value)"
    
    if (Test-Path $source -PathType Container) {
        if (-not (Test-Path $target -PathType Container)) {
            Write-Info "Zmieniam nazwę $source na $target"
            Rename-Item -Path $source -NewName $dir.Value -ErrorAction SilentlyContinue
        } else {
            Write-Info "$target już istnieje"
        }
    }
}

# Katalogi w app
$appDirs = @{
    "Blog" = "blog"
    "Ebook" = "ebook"
    "Ebooki" = "ebooki"
    "Notatki" = "notatki"
    "Thanks" = "thanks"
}

foreach ($dir in $appDirs.GetEnumerator()) {
    $source = "app\$($dir.Key)"
    $target = "app\$($dir.Value)"
    
    if (Test-Path $source -PathType Container) {
        if (-not (Test-Path $target -PathType Container)) {
            Write-Info "Zmieniam nazwę $source na $target"
            Rename-Item -Path $source -NewName $dir.Value -ErrorAction SilentlyContinue
        } else {
            Write-Info "$target już istnieje"
        }
    }
}

# 2. Zmiana nazw plików typów na .types.ts
Write-Info "Rozpoczynam zmianę nazw plików typów na .types.ts..."

Get-ChildItem -Path "types" -Filter "*.type.ts" | ForEach-Object {
    $newName = $_.Name -replace '\.type\.ts$', '.types.ts'
    $source = $_.FullName
    $target = Join-Path -Path $_.DirectoryName -ChildPath $newName
    
    if (Test-Path $source -PathType Leaf) {
        if (-not (Test-Path $target -PathType Leaf)) {
            Write-Info "Zmieniam nazwę $($_.Name) na $newName"
            Rename-Item -Path $source -NewName $newName -ErrorAction SilentlyContinue
        } else {
            Write-Info "$newName już istnieje"
        }
    }
}

# 3. Zmiana nazw plików hooków na usuwając .hook
Write-Info "Rozpoczynam zmianę nazw plików hooków..."

# Funkcja do zmiany nazw plików hooków w danym katalogu
function Rename-HookFiles {
    param (
        [string]$Directory
    )
    
    Get-ChildItem -Path $Directory -Filter "*.hook.ts" -Recurse | ForEach-Object {
        $newName = $_.Name -replace '\.hook\.ts$', '.ts'
        $source = $_.FullName
        $target = Join-Path -Path $_.DirectoryName -ChildPath $newName
        
        if (Test-Path $source -PathType Leaf) {
            if (-not (Test-Path $target -PathType Leaf)) {
                Write-Info "Zmieniam nazwę $($_.Name) na $newName"
                Rename-Item -Path $source -NewName $newName -ErrorAction SilentlyContinue
            } else {
                Write-Info "$newName już istnieje"
            }
        }
    }
    
    Get-ChildItem -Path $Directory -Filter "*.hook.tsx" -Recurse | ForEach-Object {
        $newName = $_.Name -replace '\.hook\.tsx$', '.tsx'
        $source = $_.FullName
        $target = Join-Path -Path $_.DirectoryName -ChildPath $newName
        
        if (Test-Path $source -PathType Leaf) {
            if (-not (Test-Path $target -PathType Leaf)) {
                Write-Info "Zmieniam nazwę $($_.Name) na $newName"
                Rename-Item -Path $source -NewName $newName -ErrorAction SilentlyContinue
            } else {
                Write-Info "$newName już istnieje"
            }
        }
    }
}

# Zmiana nazw hooków w głównych katalogach
Rename-HookFiles -Directory "hooks"
Rename-HookFiles -Directory "components\hooks"

Write-Info "Migracja zakończona. Sprawdź pliki importów, które mogą wymagać ręcznej aktualizacji."
Write-Info "Zapoznaj się z dokumentacją konwencji nazewnictwa w docs/NAMING_CONVENTIONS.md" 