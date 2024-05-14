import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors:{
        'richBlack': 'var(--primary-color)',
        'caquelicot': 'var(--secondary-color)',
        'richBlack-80': 'var(--primary-color-80)',
        'bgMobile': 'var(--white-Mob)',
        'whatsappBtn': 'var(--green)',
        'white': 'var(--white)',
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
