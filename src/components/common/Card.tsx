import { Card, CardProps } from '@mui/material';

const Section = (props: CardProps) => {
    return (
        <Card
            sx={{
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '0.5s',
                transitionProperty: 'all',

                boxShadow: '0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)',
                backgroundColor: '#FFF',
                backgroundOpacity: 0.7,
                border: '1px solid #DDD',

                '&:hover': {
                    boxShadow: '0 25px 50px -12px rgb(0 0 0 / .25)',
                    mt: -0.25,
                    ml: -0.25,
                    mb: 0.25,
                    mr: 0.25,
                }
            }}
            {...props}
        >
            {props.children}
        </Card>
    )
}

export default Section