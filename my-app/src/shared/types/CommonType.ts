export interface Image {
    uuid: string;
    mime_type: string;
    original_url: string;
    preview_url: string | null;
}

export interface Pagination {
    page: number;
    per_page: number;
    total: number;
    last_page: number;
}
