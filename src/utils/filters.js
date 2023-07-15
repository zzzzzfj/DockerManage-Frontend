const filterState = (val) => {
    if (!isNull(val)) {
        if (val === 'running') return 'true'
    }
    return 'false'
}

export const isNull = (date) => {
    if (!date) return true
    if (JSON.stringify(date) === '{}') return true
    if (JSON.stringify(date) === '[]') return true
    return false
}

export default app => {
    app.config.globalProperties.$filters = {
        filterState
    }
}
