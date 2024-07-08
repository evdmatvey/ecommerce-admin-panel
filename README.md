# ecommerce-admin-panel

<p align="center">
  <img src="https://i.ibb.co/TBM45pT/logo.png" alt="logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Library-react-blue%3Fstyle%3Dflat" alt="Library-react"/>
  <img src="https://img.shields.io/badge/Version-0.1.0-purple?style=flat" alt="Version-0.1.0"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat" alt="License-MIT"/>
</p>

## About

Admin panel frontend part of the e-commerce app. Authorization and registration are supported, along with the ability to add items to a wishlist or cart, create an order and follow its delivery status, manage items by categories and filter them based on a variety of criteria, and manage many parts of application through the admin panel (like adding new brands / products / categories / etc.).

The figma layout of the application was found in the public domain. [The figma layout](https://www.figma.com/community/file/1376901695536369893)

## Technologies

- React (18)
- React router dom (6.24.0)
- Zustand (4.5.4)
- Tanstack react-query (5.48.0)
- Axios (1.7.2)
- React hook form (7.52.0)
- Tailwind CSS (3.4.4)

## Environment

- Node 20.14.0
- npm 10.7.0

### Variables

use .env file to declare variables

| Variable                  | Value                                            |
| ------------------------- | ------------------------------------------------ |
| VITE_BACKEND_URL          | Backend url (example: http://localhost:4200/api) |
| VITE_DOMAIN               | Domain name (example: localhost)                 |
| VITE_ACCESS_TOKEN_EXPIRES | Access token expires time (example: 1)           |

## Common setup

Clone the repo and install the dependencies.

```
  git clone https://github.com/evdmatvey/ecommerce-admin-panel.git
  cd ecommerce-admin-panel
```

```
  npm install
```

### Development

Run in development mode.

```
  npm run dev
```

Run code format checker.

```
  npm run format
```

### Build

```
  npm run build
```

## Developers

- [evdmatvey](https://github.com/evdmatvey)

## License

Project ecommerce-admin is distributed under the MIT license.
