export default function getId() {
  let i = 1;

  return function () {
    return i++;
  };
}
