import { useState } from 'react'

import Card from '../../common/Card'
import CardDescription from '../../common/CardDescription'
import InputWithPopper from '../../common/InputWithPopper'
import TitleBox from '../../common/TitleBox'

import { CardHeader, CardContent, Stack, Link } from '@mui/material'


const TaxDeductionCard = () => {
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

                    <TitleBox title="소득공제 종합한도 (현재 00,000,000원 / 최대 25,000,000원)">
                        <Stack spacing={6}>
                            <TitleBox title="주택관련 한도 (현재 0,000,000원 / 최대 00,000,000원)">
                                <Stack spacing={6}>
                                    <InputWithPopper
                                        label="★ 장기주택저당차입금 이자상환액"
                                        defaultValue="0"
                                        helperText="공제 : 1,000,214원"
                                    >
                                        주택을 취득하기 위해 차입한(빌린) 차입액의 이자 상환액을 공제합니다.<br />
                                        * 주택임차 차입금 원리금상환액과 중복 공제 불가<br /><br />

                                        차입시기/상환기간/상환방식에 따라 한도가 다르니, 반드시 확인 후 한도에 맞추어 입력하시길 바랍니다.<br /><br />
                                        [2012년 이전 차입]<br />
                                        * 30년이상 : 1500만원 / 15년 이상 : 1000만원 / 10년 이상 : 600만원<br />
                                        [2012 ~ 2014에 차입]<br />
                                        * 15년이상 / 고정금리 또는 비거치식분할상환 : 1500만원<br />
                                        * 15년이상 / 이 외 : 500만원<br />
                                        [2015년 이후 차입]<br />
                                        * 15년이상 / 고정금리이면서 비거치식분할상환 : 1800만원<br />
                                        * 15년이상 / 고정금리 또는 비거치식분할상환 : 1500만원<br />
                                        * 15년이상 / 이 외 : 500만원<br />
                                        * 10년이상 / 고정금리 또는 비거치식분할상환 : 300만원<br /><br />

                                        <Link href="https://www.koreatax.org/tax/taxpayers/work/turn42.htm" target="_blank">자세히 보기</Link>
                                    </InputWithPopper>

                                    <TitleBox title="주택 임차+저축 한도 (현재 0,000,000원 / 최대 4,000,000원)">
                                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                            <InputWithPopper
                                                label="★ 주택임차 차입금 원리금상환액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 40%<br />
                                                한도 : 4,000,000원<br />
                                                최대 공제액 : 1,600,000원<br />
                                                * 장기주택저당차입금과 중복 공제 불가<br /><br />

                                                주택을 임차(전세, 월세 등)하기 위해 차입한(빌린) 차입액의 원리금 상환액(전세대출 이자 납부액 등)을 공제합니다.<br />
                                                금융기관에서 차입했는지 여부 등에 따라 공제 조건이 다르니 확인이 필요합니다.<br /><br />

                                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn41.htm" target="_blank">자세히 보기</Link>
                                            </InputWithPopper>

                                            <InputWithPopper
                                                label="★ 청약종합저축"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 40%<br />
                                                한도 : 2,400,000원<br />
                                                최대 공제액 : 1,600,000원<br />
                                                조건 : 총급여액 7000만원 이하, 2023년 1년간 무주택, 12월 31일 기준 세대주<br /><br />

                                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn41.htm" target="_blank">자세히 보기</Link>
                                            </InputWithPopper>
                                            <InputWithPopper
                                                label="(구) 청약저축"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 40%<br />
                                                한도 : 2,400,000원<br />
                                                최대 공제액 : 960,000원<br />
                                                조건 : 총급여액 7000만원 이하, 2023년 1년간 무주택, 12월 31일 기준 세대주<br /><br />

                                                ※ 청약저축은 2015년 이후 가입 불가한 상품입니다.<br /><br />

                                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn41.htm" target="_blank">자세히 보기</Link>
                                            </InputWithPopper>

                                            <InputWithPopper
                                                label="(구) 근로자주택마련저축"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 40%<br />
                                                한도 : 1,800,000원 (월 150,000원)<br />
                                                최대 공제액 : 720,000원<br /><br />

                                                ※ 근로자주택마련저축은 2004년 2월 이후 가입 불가한 상품입니다.<br /><br />

                                                <Link href="https://www.koreatax.org/tax/taxpayers/work/turn41.htm" target="_blank">자세히 보기</Link>
                                            </InputWithPopper>

                                        </Stack>
                                    </TitleBox>
                                </Stack>
                            </TitleBox>

                            <TitleBox title="★ 소비">
                                <Stack spacing={6}>
                                    <TitleBox title="총급여의 25% 이상 소비시 공제 (현재 0,000,000원 / 3,000,000원)">
                                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                            <InputWithPopper
                                                label="신용카드 사용액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                총급여의 25% 이상 소비분(신용카드+체크카드+현금영수증)에 대해 15% 공제<br /><br />
                                                전통시장/대중교통 사용액 제외하고 입력하세요.
                                            </InputWithPopper>

                                            <InputWithPopper
                                                label="체크카드/현금영수증 사용액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                총급여의 25% 이상 소비분(신용카드+체크카드+현금영수증)에 대해 30% 공제<br /><br />
                                                전통시장/대중교통 사용액 제외하고 입력하세요.
                                            </InputWithPopper>
                                        </Stack>
                                    </TitleBox>

                                    <TitleBox title="소비 추가공제 (현재 0,000,000원 / 3,000,000원)">
                                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                            <InputWithPopper
                                                label="전통시장 사용액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 40%
                                            </InputWithPopper>

                                            <InputWithPopper
                                                label="대중교통 사용액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 80%
                                            </InputWithPopper>

                                            <InputWithPopper
                                                label="도서･공연 등 사용액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                공제율 : 30%<br />
                                                조건 : 총급여 7000만원 이하<br /><br />

                                                도서･공연･신문･박물관･미술관･영화관람료 사용액을 입력하세요. (단 영화관람료는 하반기 사용분만 인정)
                                            </InputWithPopper>
                                        </Stack>
                                    </TitleBox>

                                    <TitleBox title="소비 증가분 공제 (현재 0,000,000원 / 1,000,000원)">
                                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                            <InputWithPopper
                                                label="작년(2022년) 전체 소비액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                2023년 전체 소비액(신용카드+체크카드+현금영수증)이 2022년 전체 소비액보다 5% 이상 증가한 경우, 증가분의 20% 공제
                                            </InputWithPopper>

                                            <InputWithPopper
                                                label="작년(2022년) 전통시장 사용액"
                                                defaultValue="0"
                                                helperText="공제 : 1,000,214원"
                                            >
                                                2023년 전통시장 소비액(신용카드+체크카드+현금영수증)이 2022년 전통시장 소비액보다 5% 이상 증가한 경우, 증가분의 20% 공제
                                            </InputWithPopper>
                                        </Stack>
                                    </TitleBox>
                                </Stack>
                            </TitleBox>

                            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                                <InputWithPopper
                                    label="소기업,소상공인공제(노란우산공제) 부금"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원"
                                >
                                    사업소득금액/근로소득금액에 따라 공제한도가 다르므로, 확인 후 입력하세요.<br />
                                    (자동 계산되지 않음)<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/new_10.htm" target="_blank">자세히 보기</Link>
                                </InputWithPopper>

                                <InputWithPopper
                                    label="우리사주조합 출자"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원"
                                >
                                    한도 : 15,000,000원 (벤처기업 등이 아닌경우 4,000,000원)<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/turn53.htm" target="_blank">자세히 보기</Link>
                                </InputWithPopper>

                                <InputWithPopper
                                    label="투자조합출자"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원"
                                >
                                    한도 : 종합소득금액의 50%<br /><br />

                                    투자 대상에 따라 공제율이 달라질 수 있으므로, 확인 후 입력하세요.<br />
                                    (자동 계산되지 않음)<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/turn52.htm" target="_blank">자세히 보기</Link>
                                </InputWithPopper>

                                <InputWithPopper
                                    label="장기집합투자증권저축"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원"
                                >
                                    공제율 : 40%<br />
                                    한도 : 6,000,000원<br />
                                    최대 공제액 : 2,400,000원<br />
                                    조건 : 총급여 8000만원 이하, 계약기간 10년 이상 등<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/new_91.html" target="_blank">자세히 보기</Link>
                                </InputWithPopper>

                                <InputWithPopper
                                    label="청년형 장기집합투자증권저축"
                                    defaultValue="0"
                                    helperText="공제 : 1,000,214원"
                                >
                                    공제율 : 40%<br />
                                    한도 : 6,000,000원<br />
                                    최대 공제액 : 2,400,000원<br />
                                    조건 : 총급여 8000만원(종합소득금액 6700만원) 이하, 만 19세 ~ 34세<br /><br />

                                    <Link href="https://www.koreatax.org/tax/taxpayers/work/new_15.html" target="_blank">자세히 보기</Link>
                                </InputWithPopper>
                            </Stack>
                        </Stack>
                    </TitleBox>

                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <InputWithPopper
                            label="2013년 이전 기부금 이월분"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원"
                        >
                            ※ 2014.01.01 이후의 기부금은 세액공제 항목입니다.<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/new_14.html" target="_blank">자세히 보기</Link>
                        </InputWithPopper>

                        <InputWithPopper
                            label="2000년 이전 개인연금저축 납입액"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원"
                        >
                            공제율 : 40%<br />
                            한도 : 1,800,000원<br />
                            최대 공제액 : 720,000원<br /><br />

                            ※ 연금저축보험, 2001.01.01부터 가입한 연금저축은 세액공제 항목입니다.<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/turn50.htm" target="_blank">자세히 보기</Link>
                        </InputWithPopper>

                        <InputWithPopper
                            label="고용유지중소기업 근로자의 임금삭감액"
                            defaultValue="0"
                            helperText="공제 : 1,000,214원"
                        >
                            공제율 : 임금삭감액의 50%<br /><br />

                            <Link href="https://www.koreatax.org/tax/taxpayers/work/new_10.htm" target="_blank">자세히 보기</Link>
                        </InputWithPopper>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default TaxDeductionCard