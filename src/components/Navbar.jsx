import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolbar sx={{}}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FacebookIcon sx={{ marginRight: "10px", display: { xs: "block" } }} />
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Facebook</Typography>
                </Box>
                <Search> <InputBase placeholder='Buscar...' sx={{ justifyContent: "flex-end" }} /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={13} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Typography>Agustín</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                sx={{ marginTop: "50px" }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Mi cuenta</MenuItem>
                <MenuItem>Cerrar Sesión</MenuItem>
            </Menu>
        </AppBar >
    )
}

export default Navbar