const mockWords: Word[] = [{
    id: 1,
    original: 'ありがおつ',
    meaning: 'Thank you',
    knowledge: 3,
    type: 'Other',
    tags: ['greeting']
},
{
    id: 2,
    original: 'あか',
    meaning: 'Red',
    knowledge: 3,
    type: 'Other',
    tags: ['greeting']
},
{
    id: 3,
    original: 'わたし',
    meaning: 'Me',
    knowledge: 3,
    type: 'Other',
    tags: ['greeting']
}]

const searchFilterBase: SearchFilter = {
    searchText: '', 
    page: 1
}

const baseWord: Word = {
    id: 0,
    original: 'Word',
    meaning: 'Meaning',
    knowledge: 3,
    type: 'Word type',
    tags: []
}

const baseObjects = {mockWords, searchFilterBase, baseWord}


export default baseObjects