import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      screens: {
        'sm': {'min': '319px', 'max': '767px'},

        'md': {'min': '768px', 'max': '1023px'},

        'lg': {'min': '1024px', 'max': '1279px'},

        'xl': {'min': '1280px', 'max': '1535px'},

        '2xl': {'min': '1536px', 'max': '2560px'}
      },
      colors:{
        'richBlack': 'var(--primary-color)',
        'caquelicot': 'var(--secondary-color)',
        'customGray': 'var(--custom-color)',
        'customWhite': 'var(--custom-white)',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      },
      opacity: {
        '10': '0.1',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      lineHeight: {
        'leading-title': '38.4px',
        'leading-title-desk': '76.8px',
        'leading-7': '28.8px'
      },
      inset: {
        'inset-inline': 'auto',
        'inset-top': '68px'
      },
    },

  },
  plugins: [],
};
export default config;
