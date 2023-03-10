import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post3 = () => {
    return (
        <Card sx={{ margin: { xs: 1, md: 5 }, marginBottom: { xs: 2 } }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src='https://material-ui.com/static/images/avatar/2.jpg'>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Juan Manuel Ferrarezi"
                subheader="12 de Enero, 2023"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://material-ui.com/static/images/image-list/camera.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Mi reliquia familiar... Ha pasado generacion tras generacion... Ya mas de 60 años con nosotros 📷👌
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post3


