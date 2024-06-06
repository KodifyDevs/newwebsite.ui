// We want each package to be responsible for its own content.
const config = {
  theme: {
    extend: {
      colors:{
        'rich-black': 'var(--primary-color)',
        'rich-black-10': 'var(--primary-color-10)',
        'rich-black-15': 'var(--primary-color-15)',
        'rich-black-80': 'var(--primary-color-80)',
        'caquelicot': 'var(--secondary-color)',
        'very-light-gray': 'var(--very-light-gray)',
        'dark-cyan': 'var(--green)',
        'winchester-gray': 'var(--winchester-gray)',
        'dark-cyan-10': 'var(--green-10)',
        'baby-powder': 'var(--baby-powder)',
        'baby-powde-80': 'var(--baby-powder-80)',
        'black-10': 'var(--black-05)'
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
