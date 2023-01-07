// TODO: write your code here
export default function sortDictionary(dictionary) {
  return dictionary.sort((item1, item2) => item2.health - item1.health);
}
