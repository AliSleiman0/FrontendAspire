Overview

This is the React + TypeScript frontend for the Inventory Management System.It provides:

A sidebar navigation (Ant Design Layout + Menu)

Views to list, add, edit, and delete inventory items

Status indicators (In Stock, Low Stock, Ordered, Discontinued)

Search/filter by name, category, or status

Note: The API is fully handled and integrated via Axios/TanStack Query, but the UI is still a work in progress—some screens and styling details remain incomplete.

Tech Stack

React 18

TypeScript

Vite for build/dev server

Ant Design component library

React Router v6

TanStack Query (react-query) for data fetching

Axios for HTTP requests

Getting Started

Clone the repo

git clone <your-frontend-repo-url>
cd <repo-folder>

Install dependencies

npm install
# or
yarn

Set up environmentCreate a .env or .env.development in the root with at least:

VITE_API_BASE_URL=http://localhost:5000/api

Run in development

npm run dev
# or
yarn dev

Opens at http://localhost:3000 (or assigned port)

HMR for rapid iteration

Build for production

npm run build
# or
yarn build

Output goes to /dist

Preview the production build locally

npm run preview
# or
yarn preview

Project Structure

/src
  /assets       # images, icons, styles
  /components   # reusable UI components (Layout, Menu, etc.)
  /hooks        # custom React hooks
  /pages        # route-level components (InventoryList, ItemEdit, etc.)
  /services     # API client (Axios instances, endpoint calls)
  /types        # TypeScript interfaces/types
  /App.tsx      # root router + layout
  /main.tsx     # ReactDOM render, QueryClientProvider
README.txt
.gitignore
vite.config.ts
tsconfig.json
package.json

Scripts

npm run dev – start development server

npm run build – production build

npm run preview – locally preview build

npm run lint – run ESLint

npm run format – run Prettier

Environment Variables

Key

Description

Default

VITE_API_BASE_URL

Base URL of your backend API

http://localhost:5000

Contributing

Create a branch: git checkout -b feature/your-feature

Commit your changes: git commit -m "feat: add …"

Push branch: git push origin feature/your-feature

Open a Pull Request and request review.
