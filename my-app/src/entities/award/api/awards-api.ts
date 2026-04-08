import { apiclient } from '@/shared/api/api-client';
import type { AwardResponse, Award } from '../model/types';

class AwardApi {
    async getAwards(): Promise<Award[]> {
        const response = await apiclient.get<AwardResponse>('/api/awards');
        return response.data.awards;
    }
}

export const awardAPI = new AwardApi();
