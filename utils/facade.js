export default function emailIsValid (email) {
  console.log("ee")
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}