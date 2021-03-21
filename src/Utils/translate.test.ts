import {transformWord} from './translate'

describe('Testing translating', () => {
    describe('Test translateWord', () => {
        it('Should translate a hiragana vowel', () => {
            expect(transformWord("a")).toBe("あ")
        })

        it('Should return a small hiragana', () => {
            expect(transformWord("よ=")).toBe("ょ")
        })

        it('Should translate a word', () => {
            expect(transformWord("s")).toBe("s")
            expect(transformWord("sa")).toBe("さ")
            expect(transformWord("さy")).toBe("さy")
            expect(transformWord("さyo")).toBe("さよ")
            expect(transformWord("さよu")).toBe("さよう")
            expect(transformWord("さようn")).toBe("さようん")
            expect(transformWord("さようんa")).toBe("さような")
            expect(transformWord("さようなr")).toBe("さようなr")
            expect(transformWord("さようなr")).toBe("さようなr")
            expect(transformWord("さようなra")).toBe("さようなら")
        })
    })
})