# Restaurant Delivery App

This is a sample full-stack restaurant delivery web application built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## Features
- Landing page with role-based login
- Firebase Authentication with email/password and Google sign-in
- Customer and restaurant owner dashboards (skeleton)
- Global cart state with Zustand
- Firebase Cloud Functions example
- CI/CD via GitHub Actions

## Prerequisites
- Node.js >= 18
- Firebase CLI (`npm install -g firebase-tools`)

## Setup
```bash
git clone <repo>
cd restaurant-delivery-app
npm install
cp .env.local.example .env.local # add your Firebase config
firebase init
```

## Scripts
- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run start` – start production server
- `npm run lint` – run ESLint
- `npm run format` – run Prettier
- `npm run deploy` – deploy to Firebase Hosting

## Environment Variables
Defined in `.env.local`. See `.env.local.example` for keys.

## Testing & CI
`npm test` runs Jest unit tests. GitHub Actions workflow builds and deploys on pushes to `main`.
