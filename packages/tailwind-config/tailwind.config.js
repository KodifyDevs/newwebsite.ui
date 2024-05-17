// We want each package to be responsible for its own content.
const config = {
  theme: {
    extend: {
      colors:{
        'rich-black': 'var(--primary-color)',
        'rich-black-10': 'var(--primary-color-10)',
        'rich-black-80': 'var(--primary-color-80)',
        'caquelicot': 'var(--secondary-color)',
        'very-light-gray': 'var(--very-light-gray)',
        'dark-cyan': 'var(--green)',
        'dark-cyan-10': 'var(--green-10)',
        'white': 'var(--white)',
        'off-white': 'var(--white-80)',
        'black': 'var(--black)'
      },
      dropShadow: {
        'button-default': `0px 4px 15px 0px var(--rich-black-10)`,
        'button-hover-default': `0px 4px 15px 0px var(--black)`,
        'dark-cyan-dropshadow': `0px 4px 15px 0px var(--green-10)`,

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
