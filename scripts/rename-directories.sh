#!/bin/bash

# Skrypt do ujednolicenia nazewnictwa katalogów na kebab-case

# Katalogi w components
mv -n components/UI components/ui 2>/dev/null || echo "components/ui już istnieje"
mv -n components/Utils components/utils 2>/dev/null || echo "components/utils już istnieje"

# Katalogi w app
mv -n app/Blog app/blog 2>/dev/null || echo "app/blog już istnieje"
mv -n app/Ebook app/ebook 2>/dev/null || echo "app/ebook już istnieje"
mv -n app/Ebooki app/ebooki 2>/dev/null || echo "app/ebooki już istnieje"
mv -n app/Notatki app/notatki 2>/dev/null || echo "app/notatki już istnieje"
mv -n app/Thanks app/thanks 2>/dev/null || echo "app/thanks już istnieje"

echo "Zmiana nazw katalogów zakończona" 