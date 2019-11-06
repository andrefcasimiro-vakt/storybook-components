import theme from '../../global/theme';

export const defaultStyle = {
  nav: {
      alignItems: 'center',
      backgroundColor: theme.colors.dark.primary,
      color: theme.colors.dark.secondary,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
  ul: {
      display: 'flex',
      flexDirection: 'row',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
  },
  li: {
      margin: '1rem',
      style: 'none',
  }
};
