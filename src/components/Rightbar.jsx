import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100}>
                    Amigos Conectados
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                    />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/5083205/pexels-photo-5083205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Ultimas Fotos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={6}>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/14084191/pexels-photo-14084191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/273934/pexels-photo-273934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://material-ui.com/static/images/image-list/camera.jpg"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Ultimas Conversaciones
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Estas haciendo algo?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Martina Musseti
                                    </Typography>
                                    {" — Tengo el cumpleaños de mi tia, queres venir..."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/11153430/pexels-photo-11153430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Cumpleaños de Tomi"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Jorge Valdivia
                                    </Typography>
                                    {" — Amigo! Vamos a hacerle un cumpleaños sorpresa a Tomi, es el…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Hey bro!"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Juan Manuel Ferrarezi
                                    </Typography>
                                    {' — Vení a sacarte fotos a casa, tengo una camara que esta mortal…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;