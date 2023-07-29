import { ReactNode } from 'react'

import { Box } from '@mui/material'

interface TitleBoxProps {
    title: string | ReactNode,
    children: ReactNode
}

const TitleBox = (props: TitleBoxProps) => {
    return (
        <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius:1, padding: 2, pt: 2.5 }}>
            <Box sx={{ position: 'absolute', mt: -4, ml: -1, background: '#FFF', px: 1, fontSize: 13, color: 'rgba(0, 0, 0, 0.6)' }}>{ props.title }</Box>

            { props.children }
        </Box>
    )
}

export default TitleBox