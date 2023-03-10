import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post2 = () => {
    return (
        <Card sx={{ margin: { xs: 1, md: 5 }, marginBottom: { xs: 2 } }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src='https://material-ui.com/static/images/avatar/7.jpg'>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Juli Masticho"
                subheader="4 de Febrero, 2023"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/273934/pexels-photo-273934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Foto tomada en mi viaje a Tailandia 🙌😍! Una hermosa experiencia que jamás olvidare!

                    Gracias a mi familia por acompañarme 💕
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

export default Post2