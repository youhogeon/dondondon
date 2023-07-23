import Graph from '../components/calcs/tax-return/Graph'
import Card from '../components/common/Card'

import { Button, CardActions, CardContent, CardHeader, Stack } from '@mui/material'


const Home = () => {
    return (
        <>
            <Stack>
                <Card>
                    <CardHeader title='홈 화면' />
                    <CardContent>
                        <Graph />
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