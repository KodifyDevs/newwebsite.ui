import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors:{
        'rich-black': 'var(--primary-color)',
        'caquelicot': 'var(--secondary-color)',
        'rich-black-80': 'var(--primary-color-80)',
        'bgMobile': 'var(--white-mob)',
        'dark-cyan': 'var(--green)',
        'white': 'var(--white)',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      },
      opacity: {
        '10': '0.1',
      },
      fontSize: {
        'title-clamp': 'clamp(30px, calc(30px + (64 - 30) * ((100vw - 319px) / (1535 - 319))), 64px)',
        'paragraph-clamp': 'clamp(16px, calc(16px + (18 - 16) * ((100vw - 319px) / (1535 - 319))), 18px)', 
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
