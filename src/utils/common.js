export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const jogNumber = (number, length) => {
    let string = `${"0".repeat(length)}${number}`;
    return string.substr(string.length - length);
}  