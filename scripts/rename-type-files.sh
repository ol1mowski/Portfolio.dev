#!/bin/bash

# Skrypt do ujednolicenia nazewnictwa plików typów na .types.ts

cd types
for file in *.type.ts; do
  if [ -f "$file" ]; then
    newname=$(echo "$file" | sed 's/\.type\.ts$/.types.ts/')
    mv "$file" "$newname"
    echo "Zmieniono nazwę: $file -> $newname"
  fi
done

echo "Zmiana nazw plików typów zakończona" 