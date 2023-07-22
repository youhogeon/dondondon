import data from'../../../data/간이세액표20230228.json'
import { floorTo10 } from '../../../utils/string'

export const getTax = (income: number, family: number) => {
    const colIdx = Math.max(Math.min(family, 11), 1) + 1
    const tax = data[data.length - 1][colIdx]

    const cutLine = [87_000_000, 45_000_000, 30_000_000, 28_000_000, 14_000_000, 10_000_000]
    const mulRate = [1, 1, 1, 0.98, 0.98, 0.98]
    const taxRate = [0.45, 0.42, 0.40, 0.40, 0.38, 0.35]
    const fixedTax = [31_034_600, 13_394_600, 7_394_600, 6_610_600, 1_397_000, 25_000]

    for (let i = 0; i < cutLine.length; i++) {
        if (income >= cutLine[i]) {
            return floorTo10(tax + fixedTax[i] + (income - cutLine[i]) * mulRate[i] * taxRate[i])
        }
    }

    for (let i = 0; i < data.length; i++) {
        if (income >= data[i][0] * 1000 && income < data[i][1] * 1000) {
            return data[i][colIdx]
        }
    }

    return 0
}