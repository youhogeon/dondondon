import { ChangeEvent, useState } from 'react'


import Card from '../../common/Card'

import DeleteIcon from '@mui/icons-material/Delete'
import { CardHeader, CardContent, FormControl, Select, SelectChangeEvent, MenuItem, CardActions, Button, Table, TableCell, TableHead, TableRow, TableBody, Checkbox, TableContainer, IconButton, Typography, Box, InputLabel, Stack } from '@mui/material'

interface Family {
    type?: string,
    age?: string,
    disability?: boolean,
}

const FAMILY_TYPES = ['본인', '배우자', '직계존속', '직계비속', '형제자매', '위탁아동', '그 외(수급자)']
const FAMILY_AGES = ['만 8세 미만', '만 8세 ~ 20세', '만 21세 ~ 59세', '만 60세 ~ 69세', '만 70세 이상']

const BasicInfoCard = () => {
    const initFamily = {
        type: '본인',
        age: '만 21세 ~ 59세',
        disability: false,
    }

    const initNewFamily = {
        type: '직계비속',
        age: '만 21세 ~ 59세',
        disability: false,
    }

    const [data, setData] = useState<Array<Family>>([initFamily])
    const [gender, setGender] = useState<number>(1)
    const [isHead, setIsHead] = useState<boolean>(true)

    const handleType = (e: SelectChangeEvent<string>, index: number) => {
        const newData = [...data]
        newData[index].type = e.target.value as string
        setData(newData)
    }

    const handleAge = (e: SelectChangeEvent<string>, index: number) => {
        const newData = [...data]
        newData[index].age = e.target.value as string
        setData(newData)
    }

    const handleDisablility = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newData = [...data]
        newData[index].disability = e.target.checked
        setData(newData)
    }

    const addFamily = () => {
        const newData = [...data, { ...initNewFamily }]
        setData(newData)
    }

    const removeFamily = (index: number) => {
        const newData = [...data]
        newData.splice(index, 1)
        setData(newData)
    }

    const hasType = (type: string) => {
        return data.filter(family => family.type === type).length > 0
    }

    const 성별입력필요여부 = () => !hasType('직계비속') && data.length > 1
    const 세대주입력필요여부 = () => gender === 2 && data.length > 1 && !hasType('배우자') && !hasType('직계비속')

    return (
        <Card>
            <CardHeader title='부양가족 정보 입력' />
            <CardContent>
                <TableContainer sx={{ maxWidth: 600 }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>부양가족</TableCell>
                                <TableCell>연령</TableCell>
                                <TableCell align="center">장애여부</TableCell>
                                <TableCell align="center">삭제</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((family, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <FormControl size="small">
                                            <Select
                                                value={family.type}
                                                onChange={(e) => handleType(e, index)}
                                                displayEmpty
                                                inputProps={{ 'aria-label': '부양가족 타입' }}
                                                disabled={index === 0}
                                            >
                                                {
                                                    FAMILY_TYPES.map(type => (
                                                        <MenuItem value={type} key={type} disabled={(type === '본인' || type === '배우자') && hasType(type)}>{type}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell>
                                        <FormControl size="small">
                                            <Select
                                                value={family.age}
                                                onChange={(e) => handleAge(e, index)}
                                                displayEmpty
                                                inputProps={{ 'aria-label': '부양가족 연령' }}
                                            >
                                                {
                                                    FAMILY_AGES.map(age => (
                                                        <MenuItem value={age} key={age}>{age}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Checkbox
                                            color="primary"
                                            checked={family.disability}
                                            onChange={(e) => handleDisablility(e, index)}
                                            inputProps={{
                                                'aria-label': '장애여부',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => removeFamily(index)} aria-label="delete" disabled={index === 0}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box mt={4} sx={{ display: (성별입력필요여부() || 세대주입력필요여부()) ? 'block' : 'none' }}>
                    <Typography variant="h6">추가 정보</Typography> 
                    <Stack spacing={2} mt={2} direction="row">
                        <FormControl sx={{ display: 성별입력필요여부() ? 'block' : 'none' }}>
                            <InputLabel id="input-gender">본인 성별</InputLabel>
                            <Select
                                labelId="input-gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value as number)}
                                label="본인 성별"
                                sx={{ minWidth: 100 }}
                            >
                                <MenuItem value={1}>남성</MenuItem>
                                <MenuItem value={2}>여성</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ display: 세대주입력필요여부() ? 'block' : 'none' }}>
                            <InputLabel id="input-gender">본인 세대주 여부</InputLabel>
                            <Select
                                labelId="input-gender"
                                value={isHead ? 1 : 2}
                                onChange={(e) => setIsHead(e.target.value as number === 1)}
                                label="본인 세대주 여부"
                                sx={{ minWidth: 150 }}
                            >
                                <MenuItem value={1}>세대주</MenuItem>
                                <MenuItem value={2}>세대원</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={addFamily}>부양가족 추가</Button>
            </CardActions>
        </Card>
    )
}

export default BasicInfoCard