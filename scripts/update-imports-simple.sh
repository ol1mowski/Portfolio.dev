#!/bin/bash

# Uproszczony skrypt do aktualizacji importów po zmianie nazw plików i katalogów

# Aktualizacja importów dla typów (.type.ts -> .types.ts)
echo "Aktualizacja importów dla typów..."
grep -r "\.type'" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\.type\'/\.types\'/g' {}

# Aktualizacja importów dla hooków (.hook.ts -> .ts)
echo "Aktualizacja importów dla hooków..."
grep -r "\.hook" --include="*.ts" --include="*.tsx" . | grep -v "node_modules" | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\.hook\.ts/\.ts/g' {}
grep -r "\.hook" --include="*.ts" --include="*.tsx" . | grep -v "node_modules" | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\.hook\.tsx/\.tsx/g' {}

# Aktualizacja importów dla zmienionych katalogów
echo "Aktualizacja importów dla zmienionych katalogów..."
grep -r "from '.*\/UI\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/UI\//\/ui\//g' {}
grep -r "from '.*\/Utils\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/Utils\//\/utils\//g' {}
grep -r "from '.*\/Blog\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/Blog\//\/blog\//g' {}
grep -r "from '.*\/Ebook\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/Ebook\//\/ebook\//g' {}
grep -r "from '.*\/Ebooki\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/Ebooki\//\/ebooki\//g' {}
grep -r "from '.*\/Notatki\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/Notatki\//\/notatki\//g' {}
grep -r "from '.*\/Thanks\/" --include="*.ts" --include="*.tsx" . | cut -d ':' -f 1 | sort | uniq | xargs -I {} sed -i 's/\/Thanks\//\/thanks\//g' {}

echo "Aktualizacja importów zakończona" 