#!/bin/bash

# Skrypt do aktualizacji importów po zmianie nazw plików i katalogów

# Aktualizacja importów dla typów (.type.ts -> .types.ts)
echo "Aktualizacja importów dla typów..."
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\.type\'\;/\.types\'\;/g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\.type\"\;/\.types\"\;/g'

# Aktualizacja importów dla hooków (.hook.ts -> .ts)
echo "Aktualizacja importów dla hooków..."
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\.hook\'\;/\'\;/g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\.hook\"\;/\"\;/g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\.hook\'$/\'/g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\.hook\"$/\"/g'

# Aktualizacja importów dla zmienionych katalogów
echo "Aktualizacja importów dla zmienionych katalogów..."
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/UI\//\/ui\//g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/Utils\//\/utils\//g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/Blog\//\/blog\//g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/Ebook\//\/ebook\//g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/Ebooki\//\/ebooki\//g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/Notatki\//\/notatki\//g'
find . -type f -name "*.ts" -o -name "*.tsx" | xargs sed -i 's/\/Thanks\//\/thanks\//g'

echo "Aktualizacja importów zakończona" 