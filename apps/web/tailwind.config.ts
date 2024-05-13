// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@packages/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './**/*.{jsx,tsx}',
    '../../packages/components/**/*.{jsx,tsx}',
  ],
  presets: [sharedConfig],
};

export default config;
