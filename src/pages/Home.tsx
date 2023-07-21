import { Button, CardActions, CardContent, CardHeader, Stack } from '@mui/material'
import Card from '../components/common/Card'


const Home = () => {
    return (
        <>
            <Stack>
                <Card>
                    <CardHeader title='홈 화면' />
                    <CardContent>
                        Hello, World!
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>
            </Stack>
        </>
    )
}

export default Home