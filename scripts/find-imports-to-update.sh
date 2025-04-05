#!/bin/bash

# Skrypt do wyszukania importów, które mogą wymagać aktualizacji po zmianie nazw plików i katalogów
echo "Wyszukiwanie odwołań do zmienionych plików typów..."
grep -r "\.type'" --include="*.ts" --include="*.tsx" .

echo -e "\nWyszukiwanie odwołań do zmienionych plików hooków..."
grep -r "\.hook" --include="*.ts" --include="*.tsx" .

echo -e "\nWyszukiwanie odwołań do zmienionych katalogów..."
grep -r "from '.*\/UI\/" --include="*.ts" --include="*.tsx" .
grep -r "from '.*\/Utils\/" --include="*.ts" --include="*.tsx" .
grep -r "from '.*\/Blog\/" --include="*.ts" --include="*.tsx" .
grep -r "from '.*\/Ebook\/" --include="*.ts" --include="*.tsx" .
grep -r "from '.*\/Ebooki\/" --include="*.ts" --include="*.tsx" .
grep -r "from '.*\/Notatki\/" --include="*.ts" --include="*.tsx" .
grep -r "from '.*\/Thanks\/" --include="*.ts" --include="*.tsx" . 