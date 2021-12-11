function noEmpty(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }
    return arr.filter((item) => {
        return item === '';
    }).length;
}
