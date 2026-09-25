# Kooperativet Beth-Nahrin Website

Corporate website for Kooperativet Beth-Nahrin ek. för. (Organization number: 769610-7734)

## Overview

This is a modern, responsive website built with progressive enhancement principles. The site provides information about the organization, displays the privacy policy, and offers contact information for visitors.

## Features

- Modern, responsive design that works on all devices
- Single-page application with smooth scrolling
- Privacy policy page
- Contact information with email link
- Optimized for performance and accessibility
- Deployable as Node.js application or static files

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Express (optional)
- **Dependencies**: Express, Compression, Helmet

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository or extract the files
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Production

Build and start the production server:

```bash
npm run build
npm start
```

## Project Structure

```
beth-nahrin-website/
├── public/              # Static files served to clients
│   ├── index.html      # Main HTML file
│   ├── assets/         # Images and media files
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── server/             # Server-side code
│   └── server.js       # Express server
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## Deployment

### Node.js Deployment

The website can be deployed to any Node.js hosting provider (e.g., misshosting Web hosting Medium):

1. Upload all files to the server
2. Run `npm install --production`
3. Set the `PORT` environment variable if needed
4. Start with `npm start`

### Static Deployment

The website can also be deployed as static files:

1. Copy the contents of the `public/` directory to your web host
2. No server-side processing required

See `DEPLOYMENT.md` (to be created) for detailed deployment instructions.

## Contact

For questions or support, contact: info@bethnahrin.se

## License

Copyright © 2024 Kooperativet Beth-Nahrin ek. för.
