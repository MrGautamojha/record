import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Credit from './Credit';
import Debit from './Debit';
import DisplayAll from './DisplayAll'

const images = [
    {
      url: '/static/images/grid-list/breakfast.jpg',
      title: 'Breakfast',
      width: '40%',
    },
    {
      url: '/static/images/grid-list/burgers.jpg',
      title: 'Burgers',
      width: '30%',
    },
    {
      url: '/static/images/grid-list/camera.jpg',
      title: 'Camera',
      width: '30%',
    },
  ];

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  function Show({classes,setShow}){



      return(<div>
        <center>
        <h1>Welcome Again!</h1>
        <ButtonBase
        onClick={()=>setShow(<Credit/>)}
      focusRipple
    //   key={image.title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: '40%',
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url('https://www.buymytimeback.com/wp-content/uploads/2019/01/credit.png')`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {'Credit'}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>

<ButtonBase
      focusRipple
    //   key={image.title}
      className={classes.image}
      onClick={()=>setShow(<Debit/>)}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: '40%',
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url('https://previews.123rf.com/images/tang90246/tang902461405/tang90246140500341/28564124-debit-word-cloud.jpg')`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {'Debit'}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>


<ButtonBase
      focusRipple
    //   key={image.title}
      className={classes.image}
      onClick={()=>setShow(<DisplayAll/>)}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: '40%',
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url('https://cx.rightnow.com/euf/assets/blog_preview_images/webinars/queued_scheduled_reports.jpg')`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {'Display Records'}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>


        </center>
    </div>)
  }
  


export default function AllView(){
    const classes = useStyles();

    const setShow=(views)=>{
        setView(views)
    }

const [view,setView]=useState(<Show classes={classes} setShow={setShow}/>)
    return(
        <div>
            {view}
     </div>
    )
}