import jap from "./japanese";

export function transformWord(word: string) {
    const keys = Object.keys(jap);
    const similar = keys.filter((key) => word.includes(key));
    if (similar.length >= 1) {
        similar.sort((a, b) => b.length - a.length);
        let key = similar[0];
        //word = word.replace(key, jap[key]);
    }
    return word;
}

export function translateWord(word: string): string {
    const keys: string[] = Object.keys(jap)
    const similar = keys.filter((key) => word.includes(key))
    if(similar.length >= 1){
        similar.sort((a, b) => b.length - a.length);
        let key = similar[0]
        word = word.replace(key, jap[key])
    }

    console.log(similar)
    return "Hello"
}