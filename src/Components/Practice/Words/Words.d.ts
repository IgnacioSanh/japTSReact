interface WordHistory {
    word: Word
    correct: boolean
    answer: string
}

interface AnswerHistoryProps {
    wordHistory: WordHistory[]
}