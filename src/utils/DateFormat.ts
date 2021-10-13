export function addZero(number: Number) {
    if (number <= 9)
        return "0" + number;
    else
        return number;
}