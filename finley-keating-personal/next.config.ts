import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/finleykeating-rgb.github.io',
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
