import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default () => {

    return (
        <Card className={{maxWidth: 345,}}>

            <CardActionArea>

                <CardMedia
                    className={{height: 140,}}
                    image=""
                    title="Email"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Email
                    </Typography>

                    <Typography gutterBottom variant="h6" component="p">
                        getinfoip@gmail.com
                    </Typography>

                    <Typography variant="body" color="textPrimary" component="p">
                        Send us a email we will answer you as soon as possible
                    </Typography>

                </CardContent>


            </CardActionArea>

            <CardActionArea>

                <CardMedia
                    className={{height: 140,}}
                    image=""
                    title="Social Networks"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Social Networks
                    </Typography>

                    <Typography variant="body" color="textPrimary" component="p">
                        Coming soon!
                    </Typography>

                </CardContent>


            </CardActionArea>

        </Card>
    );
}