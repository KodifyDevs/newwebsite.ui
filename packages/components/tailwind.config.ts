import type { Config } from 'tailwindcss';
import sharedConfig from '@packages/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx', './src/**/*.jsx'],
  presets: [sharedConfig],
};

export default config;
