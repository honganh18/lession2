function checkChuoi(str) {
    let dem = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'i'
            || str.charAt(i) == 'u'
            || str.charAt(i) == 'e'
            || str.charAt(i) == '0'
            || str.charAt(i) == 'a') {
            dem += 1;
        }
    }
    console.log(dem);
}
checkChuoi('abcue');