interface Word {
    id: number
    original: string
    meaning: string
    knowledge: 1 | 2 | 3
    type?: string
    tags: string[]
}

interface NewWordModalProps extends ReactBootstrap.ModalProps {
    saveWord: any 
    onHide: any
    show: boolean
}

interface SearchFilter {
    searchText: string
    page: number
}