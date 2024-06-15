// tailwind config is required for editor support

import sharedConfig from '@packages/tailwind-config';

const config = {
  content: [
    './**/*.{jsx,tsx}',
    '../../packages/components/**/*.{jsx,tsx}',
    './containers/**/*.jsx'
  ],
  presets: [sharedConfig],
};

export default config;
