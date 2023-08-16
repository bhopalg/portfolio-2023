import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism';

import { remarkCodeHike } from '@code-hike/mdx';
import theme from 'shiki/themes/github-dark.json' assert { type: 'json' };

import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme, showCopyButton: true }]],
    rehypePlugins: [rehypePrism],
  },
})

export default withPWA(withMDX(nextConfig));
