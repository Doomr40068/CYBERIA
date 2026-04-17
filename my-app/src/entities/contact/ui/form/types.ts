import { apiClient } from '@/shared/api/ApiClient';

type FeedbackRequest = {
    name: string;
    phone: string;
    comment: string;
};

type FeedbackResponse = {
    message: string;
    data: {
        id: number;
        name: string;
        phone: string;
        comment: string;
    };
};

export const feedbackApi = {
    send: (data: FeedbackRequest) => apiClient.post<FeedbackResponse>('/api/feedback', data),
};
