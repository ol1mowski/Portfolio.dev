#!/bin/bash

# Skrypt do ujednolicenia nazewnictwa plików hooków

# Hooki w głównym katalogu hooks
cd hooks
for file in *.hook.ts *.hook.tsx; do
  if [ -f "$file" ]; then
    newname=$(echo "$file" | sed 's/\.hook\.\(ts\|tsx\)$/.\1/')
    mv "$file" "$newname"
    echo "Zmieniono nazwę: $file -> $newname"
  fi
done

# Hooki w podkatalogach (jeśli istnieją)
for dir in */; do
  if [ -d "$dir" ]; then
    cd "$dir"
    for file in *.hook.ts *.hook.tsx; do
      if [ -f "$file" ]; then
        newname=$(echo "$file" | sed 's/\.hook\.\(ts\|tsx\)$/.\1/')
        mv "$file" "$newname"
        echo "Zmieniono nazwę: $dir$file -> $dir$newname"
      fi
    done
    cd ..
  fi
done

cd ..

# Hooki w components/hooks (jeśli katalog istnieje)
if [ -d "components/hooks" ]; then
  cd components/hooks
  for file in *.hook.ts *.hook.tsx; do
    if [ -f "$file" ]; then
      newname=$(echo "$file" | sed 's/\.hook\.\(ts\|tsx\)$/.\1/')
      mv "$file" "$newname"
      echo "Zmieniono nazwę: components/hooks/$file -> components/hooks/$newname"
    fi
  done
  
  # Hooki w podkatalogach components/hooks
  for dir in */; do
    if [ -d "$dir" ]; then
      cd "$dir"
      for file in *.hook.ts *.hook.tsx; do
        if [ -f "$file" ]; then
          newname=$(echo "$file" | sed 's/\.hook\.\(ts\|tsx\)$/.\1/')
          mv "$file" "$newname"
          echo "Zmieniono nazwę: components/hooks/$dir$file -> components/hooks/$dir$newname"
        fi
      done
      cd ..
    fi
  done
fi

echo "Zmiana nazw plików hooków zakończona" 