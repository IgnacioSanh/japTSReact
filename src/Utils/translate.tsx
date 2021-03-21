import hiragana from "./dictionarys/japanese-hiragana.json";

export function transformWord(word: string) {
    const keys = Object.keys(hiragana);
    const similar = keys.filter((key) => word.includes(key));
    if (similar.length >= 1) {
        similar.sort((a, b) => b.length - a.length);
        let key = similar[0];
        // @ts-ignore
        word = word.replace(key, hiragana[key]);
    }
    return word;
}