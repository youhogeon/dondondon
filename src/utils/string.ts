const checkWithWildcard = (pattern: string, value: string) => {
    const patternArr = pattern.split('.')
    const valueArr = value.split('.')

    if (patternArr.length !== valueArr.length) {
        return false
    }

    for (let i = 0; i < patternArr.length; i++) {
        if (patternArr[i] !== '*' && patternArr[i] !== valueArr[i]) {
            return false
        }
    }

    return true
}

const floorTo10 = (value: number) => {
    return Math.floor(value / 10) * 10
}

const floorTo1000 = (value: number) => {
    return Math.floor(value / 1000) * 1000
}

export {
    checkWithWildcard,
    floorTo10,
    floorTo1000
}