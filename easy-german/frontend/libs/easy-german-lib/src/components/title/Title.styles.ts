export const classes = {
  container: {
    margin: '20px',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  title: {
    position: 'relative',
    display: 'inline',
    zIndex: 2,
    padding: '7px',
    fontWeight: '300',
    color: '#ececec',
    backgroundColor: 'transparent',
    '&::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#345DA7',
      width: '100%',
      height: '100%',
      transform: 'rotate(-2deg)',
      marginLeft: '-7px',
      marginTop: '-5px',
      zIndex: -1,
    },
  },
};
