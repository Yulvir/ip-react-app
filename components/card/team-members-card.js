import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



export default function ImgMediaCard() {

    return (
        <Card>

            <CardActionArea>

                <CardMedia
                    component="img"
                    alt="NunoPicture"
                    image="/static/assets/assets/img/NunoPicture.png"
                    title="NunoPicture"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Nuno Carvalho Dos Santos
                    </Typography>

                    <Typography variant="body" color="textSecondary" component="p">
                        Full Stack Developer
                    </Typography>

                </CardContent>

            </CardActionArea>

            <CardActionArea>

                <CardMedia
                    component="img"
                    alt="CreskoPicture"
                    image="/static/assets/assets/img/CreskoPicture.png"
                    title="CreskoPicture"
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Cresko Yulvir Puyana Morón
                    </Typography>

                    <Typography variant="body" color="textSecondary" component="p">
                        Full Stack Developer
                    </Typography>


                </CardContent>

            </CardActionArea>

        </Card>
    );
}
