import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import Post2 from './Post2'
import Post3 from './Post3'

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post2 />
            <Post3 />
        </Box>
    )
}

export default Feed