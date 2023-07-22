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

export {
    checkWithWildcard
}