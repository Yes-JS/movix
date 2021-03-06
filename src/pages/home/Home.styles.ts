import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'center',
      height: '100%',
      overflow: 'auto',
      padding: theme.spacing(3),
      boxSizing: 'border-box',
    },
    noEmpty: {
      gridGap: '20px 20px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridAutoRows: 'max-content',
    },
    noMovies: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      '& .title': {
        fontSize: '70px',
        color: 'white',
      },
      '& .subtitle': {
        fontSize: '36px',
        color: 'white',
      },
    },
    emoji: {
      margin: '50px 0',
      height: '100px',
    },
    preloader: {
      width: '100%',
      height: '170px',
      background: '#182227',
      display: 'grid',
      color: 'white',
      justifyContent: 'center',
      alignContent: 'center',
    },
    modalContent: {
      margin: 'auto',
      position: 'relative',
      padding: 0,
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
      color: '#ffffff',
      background: '#0c1215',
      maxWidth: '700px',
      boxSizing: 'border-box',
      outline: 'none',
      '&:first-child': {
        padding: 0,
      },
    },
    randomButton: {
      padding: '10px 15px',
      position: 'fixed',
      bottom: '15px',
      right: '15px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',
      background: '#0fcebc',
      color: 'white',
      borderRadius: '22px',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      '&:hover': {
        background: '#0eb4a4',
      },
      '& span': {
        marginLeft: '5px',
      },
    },
  }),
);
