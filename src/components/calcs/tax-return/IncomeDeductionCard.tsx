import CardDescription from '../../common/CardDescription'
import TitleBox from '../../common/TitleBox'

import { Card, CardHeader, CardContent, TextField, Stack } from '@mui/material'


const IncomeDeductionCard = () => {
    return (
        <Card>
            <CardHeader title='소득 공제' />
            <CardDescription>
                sdfsfs
            </CardDescription>
            <CardContent>
                <Stack spacing={6}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="근로소득 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="인적 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Stack>

                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <TextField
                            label="연금보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="건강보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="장기요양보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            label="고용보험료 공제"
                            defaultValue="0"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Stack>

                    <TitleBox title="소득공제 종합한도 (최대 2500만원 중 12,269,111원 남음)">
                        <Stack spacing={6}>
                            <TitleBox title="주택관련 한도 (최대 300만원 중 1,269,111원 남음)">
                                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                    <TextField
                                        label="주택임차 차입금 원리금상환액"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                    />
                                    <TextField
                                        label="청약종합저축(2015년 이후 가입)"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />
                                    <TextField
                                        label="청약종합저축(2014년 이전 가입)"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />
                                    <TextField
                                        label="(구) 청약저축"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />
                                    <TextField
                                        label="(구) 근로자주택마련저축"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />
                                    
                                </Stack>
                            </TitleBox>

                            <TitleBox title="신용카드 (최대 1111만원 중 1111 남음)">
                            </TitleBox>

                            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                <TextField
                                    label="장기주택저당차입금"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <TextField
                                    label="소기업,소상공인공제(노란우산공제) 부금"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <TextField
                                    label="벤처기업투자신탁 수익증권 투자"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <TextField
                                    label="중소기업창업투자조합 출자"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <TextField
                                    label="장기집합투자증권저축"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <TextField
                                    label="청년형 장기펀드"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />
                            </Stack>
                        </Stack>
                    </TitleBox>

                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <TextField
                            label="2014년 이전 기부금 이월분"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                        />

                        <TextField
                            label="2000년 이전 개인연금저축 납입액"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                        />

                        <TextField
                            label="고용유지중소기업 근로자의 임금삭감액"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                        />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default IncomeDeductionCard