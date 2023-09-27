import { useState } from 'react'

import Card from '../../common/Card'
import CardDescription from '../../common/CardDescription'
import InputWithPopper from '../../common/InputWithPopper'
import TitleBox from '../../common/TitleBox'

import { CardHeader, CardContent, Stack, Link } from '@mui/material'


const TaxDeductionCard = () => {
    return (
        <Card>
            <CardHeader title='세액 공제' />
            <CardDescription>
                ★ : 자주 입력되는 항목
            </CardDescription>
            <CardContent>
                <Stack spacing={6}>
                    <Stack direction="row" spacing={2}>
                        <InputWithPopper
                            label="근로소득 세액공제"
                            defaultValue="0"
                            readOnly
                        >
                            근로소득자의 근로소득에 따라 기본으로 세액이 공제됩니다.<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/turn56.htm" target="_blank">자세히 보기</Link>
                        </InputWithPopper>
                        <InputWithPopper
                            label="자녀 공제"
                            defaultValue="0"
                            readOnly
                        >
                            공제액 : 자녀수 * 15만원 + MAX(0, 자녀수 - 2) * 15만원<br />
                            조건 : 만 8세 이상의 자녀(입양자 및 위탁아동 포함)가 있는 경우<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/new_95.html" target="_blank">자세히 보기</Link>
                        </InputWithPopper>

                        <InputWithPopper
                            label="출산/입양 공제"
                            defaultValue="0"
                        >
                            * 자동계산되지 않는 항목입니다. 공제액을 확인 후 직접 입력하세요<br /><br />

                            2023년에 출산/입양신고한 직계비속에 따라 공제됩니다.<br />
                            첫째 30만원 / 둘째 50만원 / 셋째이상 70만원<br /><br />

                            (예) 올해 둘째와 셋째가 출산한 경우 : 50만원 + 70만원 = 120만원<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/new_95.html" target="_blank">자세히 보기</Link>
                        </InputWithPopper>
                    </Stack>

                    <TitleBox title='★ 연금 종합한도 (현재 0,000,000원 / 9,000,000원)'>
                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                            <InputWithPopper
                                label="퇴직연금(IRP/DC) 납입액"
                                defaultValue="0"
                                helperText="공제 : 120,000원"
                            >
                                공제율 : 총급여액 5500만원 이하 15% / 5500만원 초과 12%<br />
                                한도 : 900만원<br />
                                최대 공제액 : 총급여액 5500만원 이하 135만원 / 5500만원 초과 108만원<br /><br />

                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn51.htm" target="_blank">자세히 보기</Link>
                            </InputWithPopper>

                            <InputWithPopper
                                label="연금저축 공제"
                                defaultValue="0"
                                helperText="공제 : 120,000원"
                            >
                                공제율 : 총급여액 5500만원 이하 15% / 5500만원 초과 12%<br />
                                한도 : 600만원<br />
                                최대 공제액 : 총급여액 5500만원 이하 90만원 / 5500만원 초과 72만원<br /><br />

                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn51.htm" target="_blank">자세히 보기</Link>
                            </InputWithPopper>

                            <InputWithPopper
                                label="과학기술인 공제"
                                defaultValue="0"
                                helperText="공제 : 120,000원"
                            >
                                과학기술인공제회법에 따라 근로자가 부담하는 부담금<br /><br />

                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn51.htm" target="_blank">자세히 보기</Link>
                            </InputWithPopper>

                            <InputWithPopper
                                label="만기ISA의 연금 전환액"
                                defaultValue="0"
                                helperText="공제 : 120,000원"
                            >
                                공제율 : 10%<br />
                                한도 : 300만원<br /><br />

                                * 연금 종합한도에 포함되지 않음 (300만원 별도 한도로 적용)<br /><br />

                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn51.htm" target="_blank">자세히 보기</Link>
                            </InputWithPopper>
                        </Stack>
                    </TitleBox>

                    <TitleBox title='★ 특별 세액공제'>
                        <Stack spacing={6}>
                            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                <InputWithPopper
                                    label="보장성 보험료"
                                    defaultValue="0"
                                    helperText="공제 : 120,000원"
                                >
                                    공제율 : 12%<br />
                                    한도 : 100만원<br />
                                    조건 : 부양가족을 피보험자로 하는 보장성보험(장애인 전용 보장성보험 제외)의 보험료를 근로자가 납입한 경우<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/turn33.htm" target="_blank">자세히 보기</Link>
                                </InputWithPopper>

                                <InputWithPopper
                                    label="장애인 전용 보장성 보험료"
                                    defaultValue="0"
                                    helperText="공제 : 120,000원"
                                >
                                    공제율 : 15%<br />
                                    한도 : 100만원<br />
                                    조건 : 부양가족을 피보험자로 하는 보장성보험(장애인 전용 보장성보험 제외)의 보험료를 근로자가 납입한 경우<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/turn33.htm" target="_blank">자세히 보기</Link>
                                </InputWithPopper>
                            </Stack>

                            <TitleBox title='본인ㆍ65세이상 부양가족ㆍ장애인ㆍ건강보험산정특례자'>
                                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                    <InputWithPopper
                                        label="의료비"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        공제율 : 15%<br />
                                        의료비, 난임시술비, 미숙아치료비, 안경비 등의 합이 총 급여(비과세 제외)의 3%를 넘는 금액만 공제 가능<br />
                                        단, 실손의료보험 수령액 제외<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <InputWithPopper
                                        label="난임시술비"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        공제율 : 30%<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <InputWithPopper
                                        label="미숙아치료비"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        공제율 : 20%<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <InputWithPopper
                                        label="산후조리원비용"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        한도 : 출산 횟수당 200만원
                                        조건 : 총 급여 7000만원 이하<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <InputWithPopper
                                        label="안경비 등"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        한도 : 인당 50만원<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>
                                </Stack>
                            </TitleBox>

                            <TitleBox title='이외의 공제자'>
                                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                    <InputWithPopper
                                        label="의료비"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        공제율 : 15%<br />
                                        한도 : 700만원<br />
                                        의료비, 난임시술비, 미숙아치료비, 안경비 등의 합이 총 급여(비과세 제외)의 3%를 넘는 금액만 공제 가능<br />
                                        단, 실손의료보험 수령액 제외<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <InputWithPopper
                                        label="산후조리원비용"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        한도 : 출산 횟수당 200만원
                                        조건 : 총 급여 7000만원 이하<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <InputWithPopper
                                        label="안경비 등"
                                        defaultValue="0"
                                        helperText="공제 : 120,000원"
                                    >
                                        한도 : 인당 50만원<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn34.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>
                                </Stack>
                            </TitleBox>
                        </Stack>
                    </TitleBox>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default TaxDeductionCard