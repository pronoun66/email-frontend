export function validateEmail(value) {
  if (value.search(/@.+/) < 0) {
    return false;
  }
  return true;
}

export function validateEmails(value) {
  for (let i = 0; i < value.length; i++) {
    if (!validateEmail(value[i])) {
      return false;
    }
  }
  return true;
}
