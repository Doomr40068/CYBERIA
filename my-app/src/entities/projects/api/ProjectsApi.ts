import { apiClient } from '@/shared/api/ApiClient';
import type { Project, ProjectResponse } from '@/entities/projects/model/types';

class ProjectApi {
    async getProjects(): Promise<Project[]> {
        const request = await apiClient.get<ProjectResponse>('/api/projects');
        return request.data.items;
    }

    async getProjectsPaginated(page: number = 1, per_page: number = 4) {
        const result = await apiClient.get<ProjectResponse>('/api/projects', { page, per_page });
        return result;
    }
}

export const projectAPI = new ProjectApi();
