import { createRequire } from 'module';

const require = createRequire(import.meta.url);


/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{tsx,ts,js,jsx}', './index.html'],
   theme: {
      extend: {},
   },
   plugins: [],
};
