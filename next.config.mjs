import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism';

import { remarkCodeHike } from '@code-hike/mdx';
import theme from 'shiki/themes/github-dark.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme, showCopyButton: true }]],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
