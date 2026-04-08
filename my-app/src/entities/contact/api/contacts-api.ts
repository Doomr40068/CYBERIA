import { apiclient } from '@/shared/api/api-client';
import { Contacts, ContactsResponse } from '@/entities/contact/model/types';

class ContactApi {
    async getContact(): Promise<Contacts[]> {
        const request = await apiclient.get<ContactsResponse>('/api/contacts');
        return request.data;
    }
}

export const contactAPI = new ContactApi();
