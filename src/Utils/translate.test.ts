import {translateWord} from './translate'

describe('Testing translating', () => {
    describe('Test translateWord', () => {
        it('Should return hello', () => {
            expect(translateWord("a")).toBe("Hello")
        })
    })
})