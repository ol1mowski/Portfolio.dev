# Konwencje Nazewnictwa w Projekcie

## Struktura i Nazewnictwo Katalogów

1. **Katalogi główne**: używaj kebab-case

   ```
   ✅ components/
   ✅ hooks/
   ✅ utils/
   ✅ styles/
   ✅ pages/
   ✅ types/
   ```

2. **Katalogi w app router**: używaj kebab-case

   ```
   ✅ app/blog/
   ✅ app/ebook/
   ✅ app/ebooki/
   ✅ app/notatki/
   ✅ app/thanks/
   ```

3. **Katalogi komponentów**: używaj kebab-case
   ```
   ✅ components/ui/
   ✅ components/form/
   ✅ components/layout/
   ```

## Nazewnictwo Plików

1. **Komponenty React**:

   - Używaj PascalCase dla plików komponentów
   - Końcówka .tsx dla komponentów z TypeScript

   ```
   ✅ Button.tsx
   ✅ FormInput.tsx
   ✅ PageHeader.tsx
   ```

2. **Hooki**:

   - Używaj camelCase z prefiksem `use`
   - Bez dodatkowych sufiksów w nazwie pliku

   ```
   ✅ useFormValidation.ts
   ✅ useMenu.ts
   ✅ useCursorPosition.tsx
   ```

3. **Typy**:

   - Używaj PascalCase
   - Końcówka .types.ts

   ```
   ✅ User.types.ts
   ✅ Post.types.ts
   ✅ Auth.types.ts
   ```

4. **Serwisy i Funkcje Pomocnicze**:

   - Używaj kebab-case
   - Końcówka .service.ts dla serwisów
   - Końcówka .utils.ts dla narzędzi

   ```
   ✅ api.service.ts
   ✅ auth.service.ts
   ✅ string.utils.ts
   ```

5. **Akcje**:
   - Używaj kebab-case
   - Końcówka .actions.ts
   ```
   ✅ form.actions.ts
   ✅ auth.actions.ts
   ```

## Importy

Przy importowaniu plików, staraj się używać aliasów ścieżek, aby zwiększyć czytelność i ułatwić przenoszenie plików:

```typescript
// ✅ Dobrze
import { Button } from '@/components/ui/Button';
import { useMenu } from '@/hooks/useMenu';
import { User } from '@/types/User.types';

// ❌ Unikaj relatywnych ścieżek z wieloma poziomami
import { Button } from '../../../components/ui/Button';
```

## Konwencje Stylów

1. **Moduły SCSS**:
   - Używaj kebab-case
   - Końcówka .module.scss
   ```
   ✅ button.module.scss
   ✅ form-container.module.scss
   ```

## Implementacja

Te konwencje nazewnictwa powinny być stosowane we wszystkich nowych plikach i komponentach. Dla istniejących plików, stopniowo dostosowuj je do tych konwencji podczas refaktoryzacji.
