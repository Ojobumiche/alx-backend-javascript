// Using function signUpUser(firstName, lastName) {}; return firstName and lastName.
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
