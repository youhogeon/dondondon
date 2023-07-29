import { useState } from 'react'

import Card from '../../common/Card'
import CardDescription from '../../common/CardDescription'
import InputWithPopper from '../../common/InputWithPopper'
import TitleBox from '../../common/TitleBox'

import { CardHeader, CardContent, Stack, Link } from '@mui/material'


const IncomeDeductionCard = () => {
    return (
        <Card>
            <CardHeader title='소득 공제' />
            <CardDescription>
                ★ : 자주 입력되는 항목
            </CardDescription>
            <CardContent>
                <Stack spacing={6}>
                    <Stack direction="row" spacing={2}>
                        <InputWithPopper
                            label="근로소득 공제"
                            defaultValue="0"
                            readOnly
                        >
                            총급여액(연간 근로소득 - 비과세 소득)에 따라 기본적으로 적용되는 공제입니다.<br />
                            근로소득 공제 후 금액을 <b>근로소득금액</b> 이라고 합니다.<br /><br />

                            <Link href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=6592&cntntsId=7871" target="_blank">자세히 보기</Link>
                        </InputWithPopper>

                        <InputWithPopper
                            label="인적 공제"
                            defaultValue="0"
                            readOnly
                        >
                            조건에 맞는 부양가족 수 만큼 소득이 공제됩니다.<br /><br />
                            기본공제 : 본인ㆍ배우자ㆍ부양가족 1인당 연 150만원 공제<br />
                            추가공제 : <br />
                            - 경로우대 : 만70세 이상인 경우 1인당 연 100만원 공제<br />
                            - 장애인 : 장애인인 경우 1인당 연 200만원 공제<br />
                            - 한부모 : 배우자가 없는자로서 기본공제 받는 (손)자녀ㆍ입양자가 있는 경우 1인당 연 100만원 공제<br />
                            - 부녀자 : 부녀자의 경우 연 50만원 공제(여성 근로자이면서 한부모공제 미해당자만 가능)<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/new_08.htm" target="_blank">자세히 보기</Link>
                        </InputWithPopper>
                    </Stack>

                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <InputWithPopper
                            label="연금보험료 공제"
                            defaultValue="0"
                            readOnly
                        >
                            국민연금, 공무원 · 군인 · 사립학교 교직원 연금법, 별정우체국법에 의한 근로자 부담 기여금<br /><br />

                            <Link href="https://call.nts.go.kr/call/qna/selectQnaInfo.do?mi=1318&ctgId=CTG11932" target="_blank">자세히 보기</Link>
                        </InputWithPopper>

                        <InputWithPopper
                            label="건강보험료 공제"
                            defaultValue="0"
                            readOnly
                        />

                        <InputWithPopper
                            label="장기요양보험료 공제"
                            defaultValue="0"
                            readOnly
                        />

                        <InputWithPopper
                            label="고용보험료 공제"
                            defaultValue="0"
                            readOnly
                        />
                    </Stack>

                    <TitleBox title="소득공제 종합한도 (최대 2500만원 중 12,269,111원 남음)">
                        <Stack spacing={6}>
                            <TitleBox title="주택관련 한도 (최대 300만원 중 1,269,111원 남음)">
                                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                    <InputWithPopper
                                        label="★ 주택임차 차입금 원리금상환액"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                    />
                                    <InputWithPopper
                                        label="★ 청약종합저축(2015년 이후 가입)"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />
                                    <InputWithPopper
                                        label="★ 청약종합저축(2014년 이전 가입)"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />
                                    <InputWithPopper
                                        label="(구) 청약저축"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    />

                                    <InputWithPopper
                                        label="(구) 근로자주택마련저축"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원 (40%, 최대 1200000)"
                                    >
                                        조건 : 어쩌구저쩌구<br />
                                        한도 : 어쩌구저쩌구
                                    </InputWithPopper>

                                </Stack>
                            </TitleBox>

                            <TitleBox title="★ 신용카드 (최대 1111만원 중 1111 남음)">
                            </TitleBox>

                            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                <InputWithPopper
                                    label="★ 장기주택저당차입금"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <InputWithPopper
                                    label="소기업,소상공인공제(노란우산공제) 부금"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <InputWithPopper
                                    label="벤처기업투자신탁 수익증권 투자"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <InputWithPopper
                                    label="중소기업창업투자조합 출자"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <InputWithPopper
                                    label="장기집합투자증권저축"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />

                                <InputWithPopper
                                    label="청년형 장기펀드"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                                />
                            </Stack>
                        </Stack>
                    </TitleBox>

                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <InputWithPopper
                            label="2014년 이전 기부금 이월분"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                        />

                        <InputWithPopper
                            label="2000년 이전 개인연금저축 납입액"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원 (40%, 최대 2000000)"
                        />

                        <InputWithPopper
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