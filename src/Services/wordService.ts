import baseObjects from '../Utils/baseObjects';

const wserv = (): void => {
    console.log("wordService!")
}

const getWords = (iterationNumber: Number): Word[] => {
    if(iterationNumber > 1) return []
    return baseObjects.mockWords
}

export {wserv, getWords}