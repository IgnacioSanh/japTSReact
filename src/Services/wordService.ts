import baseObjects from '../Utils/baseObjects';

const getWords = (iterationNumber: Number): Word[] => {
    if(iterationNumber > 1) return []
    return baseObjects.mockWords
}

export {getWords}