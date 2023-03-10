import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'

const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})


const Add = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={(e) => setOpen(true)}>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">
                        Crear una publicación
                    </Typography>
                    <UserBox>
                        <Avatar
                            sx={{ width: 50, height: 50 }}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                        <Typography fontWeight={500} variant="span">
                            Agustín Araneo
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="¿Qué estás pensando?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color="secondary" />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Publicar</Button>
                        <Button sx={{ width: "100px" }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    )
}

export default Add