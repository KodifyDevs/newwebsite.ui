// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@packages/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './app/**/*.tsx',
    '../../packages/components/**/*.tsx',
    '../../packages/components/**/*.jsx',
  ],
  presets: [sharedConfig],
};

export default config;
