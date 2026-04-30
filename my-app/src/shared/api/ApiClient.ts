class ApiClient {
    private baseUrl =
        typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000';

    private async request<T>(url: string, options?: RequestInit): Promise<T> {
        const fullUrl = `${this.baseUrl}${url}`;
        const res = await fetch(fullUrl, options);

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || `HTTP error: ${res.status} ${res.statusText}`);
        }

        return data;
    }

    get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
        let url = endpoint;

        if (params) {
            const query = new URLSearchParams(
                Object.entries(params).map(([k, v]) => [k, String(v)])
            ).toString();

            url += `?${query}`;
        }

        return this.request<T>(url, {
            method: 'GET',
        });
    }
    post<T>(endpoint: string, data: unknown): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}

export const apiClient = new ApiClient();
