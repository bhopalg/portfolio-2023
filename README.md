# Portfolio

This is my personal portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It showcases my projects and provides information about me.

## Features

- Static site generation with Next.js
- Responsive design with Tailwind CSS
- Dynamic routing to project pages

## Requirements

- [Node.js](https://nodejs.org/) (version 14 or later)
- [pnpm](https://pnpm.io/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/bhopalg/portfolio-2023.git
```

2. Install dependencies:

```bash
cd portfolio-2023
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

4. Building for production:

To build the website for production, run:

```bash
pnpm build
```

This will generate a `.next` directory with the optimised HTML, CSS, and JavaScript files.

### Environment Variables

```dotenv
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it as a template for your own portfolio website.
