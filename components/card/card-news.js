import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const displayDescription = (metaUrls, classes, bull) => {
    console.log(metaUrls);
    return (metaUrls.map((meta, index) => (
            <div key={index}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {meta.title}
                </Typography>

                <Typography variant="body2" component="p">
                    {meta.description}
                </Typography>


            </div>

        ))
    );
};

const displayMedia = (imageUrl, classes, url) =>{

    return (
            <div>


                    <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={url}
                  />


            </div>
        )
};

export default function SimpleCard(props) {
    const classes = useStyles();
    console.log(props.url);
    console.log(props.metaUrls);
    const bull = <span className={classes.bullet}>•</span>;


    const imageUrl = props.metaUrls.filter( function (meta) {
      return  ("image" in meta)
    });
    console.log(imageUrl);
    return (
        <Card className={classes.root}>
            <CardContent>

                {displayDescription(props.metaUrls, classes, bull)}

            </CardContent>

            {displayMedia(imageUrl, classes, props.url)}

            <CardActions>
                <Button size="small" href={props.url}>{props.url}</Button>
            </CardActions>
        </Card>
    );
}