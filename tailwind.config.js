/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/**/*.vue',
    'src/layouts/**/*.vue',
    'src/pages/**/*.vue',
    'src/plugins/**/*.js',
    'src/nuxt.config.js',
    // TypeScript
    'src/plugins/**/*.ts',
    'nuxt.config.ts',
    // UISourcePath,
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}

