interface WordHistory {
    word?: Word
    correct: boolean
    answer: string
}

interface QuestionProps {
    setStarted: any
    word?: Word
    answerTrigger: any
}

interface AnswerHistoryProps {
    lastWord?: WordHistory,
    started: boolean
}