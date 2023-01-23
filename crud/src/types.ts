type ID = string

export interface MovieInterface{
    id: ID;
    title: string;
    description: string;
    year: string;
}

export interface ModalInterface {
    titleModal:string
    modalState: boolean
    setModalState: (flag:boolean) => void
    children?: React.ReactNode
  
  }

