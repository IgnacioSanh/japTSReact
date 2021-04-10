interface Word {
    id: number
    original: string
    meaning: string
    knowledge: 1 | 2 | 3
    type?: string
    tags: string[]
}

interface NewWordModalProps extends ReactBootstrap.ModalProps {
    onSubmit: any 
    onHide: any
    show: boolean
}

interface DeleteWordModalProps extends NewWordModalProps {
    word: Word
}

interface SearchFilter {
    searchText: string
    page: number
}