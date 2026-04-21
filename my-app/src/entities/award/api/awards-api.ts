import { apiClient } from '@/shared/api/ApiClient';
import type { AwardResponse, Award } from '@/entities/award/model/types';

class AwardApi {
    async getAwards(): Promise<Award[]> {
        const response = await apiClient.get<AwardResponse>('/api/awards');
        return response.data.awards;
    }
}

export const awardAPI = new AwardApi();
