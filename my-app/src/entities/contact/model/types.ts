export interface Contacts {
    kay: string;
    value: string;
}

export interface ContactsResponse {
    message: string;
    data: Contacts[];
}
