import { apiClient } from '@/shared/api/ApiClient';
import { Contact, ContactsResponse } from '@/entities/contact/model/types';

class ContactApi {
    async getContact(): Promise<Contact[]> {
        try {
            const result = await apiClient.get<ContactsResponse>('/api/contacts');

            return result.data.map((item) => ({
                key: item.kay,
                value: item.value,
            }));
        } catch (error) {
            console.error(error);

            return [];
        }
    }
}

export const contactAPI = new ContactApi();
