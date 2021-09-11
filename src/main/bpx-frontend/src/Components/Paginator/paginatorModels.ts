export interface PaginatorModel {
    pageSize: number;
    changePage: Function;
    loading: boolean;
}

export interface SelectedPage { 
    selected: number
}