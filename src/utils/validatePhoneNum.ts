export function validatePhoneNum(s: string) {
  const phoneRegex =
    /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
  return phoneRegex.test(s);
}
