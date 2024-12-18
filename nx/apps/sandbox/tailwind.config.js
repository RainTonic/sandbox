/** @type {import('tailwindcss').Config} */
import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { join } from 'path';

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
