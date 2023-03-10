import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
    return (
        <Card sx={{ margin: { xs: 1, md: 5 }, marginBottom: { xs: 2 } }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src='https://images.pexels.com/photos/5083205/pexels-photo-5083205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>

                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Federico E. Luzuriaga"
                subheader="9 de Marzo, 2023"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/14084191/pexels-photo-14084191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Increible la estetica de este local... Me cautivo y robo toda mi atencion.
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

export default Post