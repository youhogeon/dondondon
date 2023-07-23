import { ResponsiveLine } from '@nivo/line'

import { Box } from '@mui/material'

const data = [
    {
        'id': 'base',
        'color': 'hsl(1, 70%, 50%)',
        'data': [
            {
                'x': 1000000,
                'y': 0
            },
            {
                'x': 14_000_000,
                'y': 1_260_000
            },
            {
                'x': 50_000_000,
                'y': 5_760_000
            },
            {
                'x': 88_000_000,
                'y': 15_440_000
            },
            {
                'x': 150_000_000,
                'y': 19_940_000
            },
            {
                'x': 300_000_000,
                'y': 25_940_000
            },
            {
                'x': 500_000_000,
                'y': 35_940_000
            },
            {
                'x': 1_000_000_000,
                'y': 65_940_000
            },
        ]
    }
]


const Graph = () => (
    <>
        <Box sx={{ height: '400px' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 10, bottom: 50, left: 70 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                }}
                lineWidth={4}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '소득',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickValues: [0, 1260000, 5760000, 15440000, 19940000, 25940000, 35940000, 65940000],
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '세액',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enablePoints={false}
                enableGridY={false}
            />
        </Box>
        <Box sx={{ width: '350px', height: '200px' }}>
            <ResponsiveLine
                data={data}
                xScale={{ type: 'log', base:2, min: 10000000 }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                }}
                lineWidth={4}
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={null}
                markers={[
                    {
                        axis: 'x',
                        legend: '소득',
                        lineStyle: {
                            stroke: '#b0413e',
                            strokeWidth: 2
                        },
                        value: 80000000,
                    },
                    {
                        axis: 'x',
                        legend: '소득공제 후',
                        lineStyle: {
                            stroke: '#b0413e',
                            strokeWidth: 2
                        },
                        value: 70000000,
                    },
                ]}
                enablePoints={false}
                enableGridY={false}
            />
        </Box>

    </>
)


export default Graph