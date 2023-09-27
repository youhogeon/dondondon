import { useState } from 'react'

import { Box, Fade, Popper, TextField } from '@mui/material'

interface InputWithPopperProps {
    label?: string,
    defaultValue?: string,
    helperText?: string,
    children?: React.ReactNode,
    onChange?: (value: string) => void,
    readOnly?: boolean,
}

const InputWithPopper = (props: InputWithPopperProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

    const handlePopoverOpen = (event: React.FocusEvent<HTMLElement>) => {
        props.children && setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(event.target.value)
    }

    return (
        <Box>
            <TextField
                label={props.label}
                defaultValue={props.defaultValue}
                helperText={props.helperText}
                onFocus={handlePopoverOpen}
                onBlur={handlePopoverClose}
                onChange={onChange}
                InputProps={{
                    readOnly: props.readOnly,
                }}
            />
            <Popper open={open} anchorEl={anchorEl} placement="top-start" disablePortal={false} sx={{ zIndex:900 }} transition modifiers={[{
                name: 'flip',
                enabled: false
            }]}>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{
                            border: '1px dashed #AAA',
                            borderRadius:1,
                            p: 0.5,
                            fontSize:13,
                            bgcolor: 'background.paper',
                            mb: 2,
                            ml: 1,
                            '&::after': {
                                content: '\'\'',
                                border: '8px solid transparent',
                                borderTopColor: '#AAA',
                                bb: 0,
                                position: 'absolute',
                                bottom: 1,
                                left: 16,
                            }
                        }}>
                            {props.children}
                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    )
}

export default InputWithPopper