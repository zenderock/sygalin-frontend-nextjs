# 🚀 Sygalin - Base Next.js d'Entreprise

Application d'entreprise moderne construite avec Next.js 15, offrant une base solide et scalable pour les projets professionnels.

## ✨ Fonctionnalités

### 🎯 Stack Technique
- **Next.js 15.5.2** avec Turbopack pour des performances optimales
- **TypeScript** pour la sécurité des types
- **Tailwind CSS 4** pour un design moderne et responsive
- **Police Poppins** hébergée localement pour de meilleures performances

### 📦 Packages Intégrés
- **Zustand** - Gestion d'état simple et performante
- **TanStack Query** - Gestion des données avec cache intelligent
- **Nuqs** - Query parameters type-safe
- **Zod** - Validation de schémas robuste
- **React Hook Form** - Formulaires performants
- **Sonner** - Notifications toast élégantes
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

### 🎨 Interface Utilisateur
- Design moderne avec composants UI réutilisables
- Skeleton loading au lieu de spinners
- Animations subtiles et feedback utilisateur
- Interface responsive et accessible
- Thème cohérent avec gradients subtils

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de Production
```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux et polices
│   ├── layout.tsx         # Layout principal avec providers
│   └── page.tsx           # Page d'accueil avec démos
├── components/
│   ├── ui/                # Composants UI réutilisables
│   │   ├── button.tsx     # Boutons avec variants
│   │   ├── card.tsx       # Cards modernes
│   │   ├── input.tsx      # Inputs stylisés
│   │   └── skeleton.tsx   # Loading skeletons
│   └── posts-demo.tsx     # Démo API complète
├── lib/
│   ├── api/               # Services API
│   │   ├── client.ts      # Client HTTP avec gestion d'erreurs
│   │   └── jsonplaceholder.ts # API JSONPlaceholder
│   ├── hooks/             # Hooks personnalisés
│   │   ├── use-api.ts     # Hooks API génériques
│   │   ├── use-posts.ts   # Hooks pour les articles
│   │   └── use-users.ts   # Hooks pour les utilisateurs
│   ├── schemas/           # Schémas Zod
│   │   └── common.ts      # Schémas réutilisables
│   ├── stores/            # Stores Zustand
│   │   └── example-store.ts # Store d'exemple
│   ├── providers.tsx      # Providers React Query, Nuqs, Sonner
│   └── utils.ts           # Utilitaires (cn, formatError, etc.)
└── public/fonts/          # Polices Poppins locales
```

## 🎮 Démonstrations

L'application inclut deux onglets de démonstration :

### 📦 Démo Packages
- **Zustand** : Compteur avec actions (increment, decrement, reset)
- **Skeleton Loading** : Démonstration des états de chargement
- **Nuqs** : Synchronisation avec les query parameters

### 🌐 Démo API
- **CRUD complet** avec l'API JSONPlaceholder
- **Gestion des erreurs** robuste
- **Cache intelligent** avec TanStack Query
- **Interface moderne** avec animations
- **Formulaires validés** avec React Hook Form

## 🛠️ Développement

### Ajout de Nouveaux Composants
```bash
# Créer un nouveau composant UI
touch components/ui/nouveau-composant.tsx
```

### Création d'un Store Zustand
```typescript
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface MonStore {
  // État et actions
}

export const useMonStore = create<MonStore>()(
  devtools((set) => ({
    // Implémentation
  }))
)
```

### Hooks API Personnalisés
```typescript
import { useApiQuery, useApiMutation } from '@/lib/hooks/use-api'

export function useMonAPI() {
  return useApiQuery(['mon-endpoint'], '/api/endpoint')
}
```

## 🎯 Bonnes Pratiques

- **Gestion d'erreurs** : Toujours catcher les erreurs pour éviter les crashes
- **Loading states** : Utiliser les skeletons plutôt que les spinners
- **Type safety** : Valider les données avec Zod
- **Performance** : Optimiser avec TanStack Query cache
- **UX** : Feedback utilisateur avec notifications Sonner

## 📝 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
```


## 📄 Licence

SYGALIN SAS - Tous droits réservés.
