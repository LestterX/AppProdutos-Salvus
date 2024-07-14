export interface ProductSearchQueriesDTO {
    filter?: string,
    limit?: number,
    page?: number,
    orderBy?: 'asc' | 'desc',
}