// We want each package to be responsible for its own content.
const config = {
  theme: {
    extend: {
      colors: {
        'rich-black': 'var(--primary-color)',
        'rich-black-10': 'var(--primary-color-10)',
        'rich-black-15': 'var(--primary-color-15)',
        'rich-black-80': 'var(--primary-color-80)',
        'rich-black-70': 'var(--primary-color-70)',
        'caquelicot': 'var(--secondary-color)',
        'caquelicot-10': 'var(--secondary-color-10)',
        'caquelicot-15': 'var(--secondary-color-15)',
        'very-light-gray': 'var(--very-light-gray)',
        'dark-cyan': 'var(--green)',
        'winchester-gray': 'var(--winchester-gray)',
        'philippine-gray': 'var(--philippine-gray)',
        'dark-cyan-10': 'var(--green-10)',
        'baby-powder': 'var(--baby-powder)',
        'baby-powder-70': 'var(--baby-powder-70)',
        'baby-powder-75': 'var(--baby-powder-75)',
        'baby-powde-80': 'var(--baby-powder-80)',
        'white-75': 'var(--white-75)',
        'white-90': 'var(--white-90)',
        'black-05': 'var(--black-05)',
        'black-15': 'var(--black-15)',
        'black-20': 'var(--black-20)',
        'black-25': 'var(--black-25)',
        'cultured': 'var(--cultured)'
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
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            "display": "none"
          },
        },
      }
      addUtilities(newUtilities);
    },
  ],
};
export default config;
