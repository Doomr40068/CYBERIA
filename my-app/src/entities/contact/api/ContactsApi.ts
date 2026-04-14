import { apiClient } from '@/shared/api/ApiClient';
import { Contacts, ContactsResponse } from '@/entities/contact/model/types';

class ContactApi {
    async getContact(): Promise<Contacts[]> {
        const request = await apiClient.get<ContactsResponse>('/api/contacts');
        return request.data;
    }
}

export const contactAPI = new ContactApi();
