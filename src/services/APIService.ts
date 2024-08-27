import { Http } from '@/utils';

interface APIServiceConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
}

class APIService {
  protected baseUrl: string;

  protected headers: Record<string, string>;

  constructor({
    baseUrl = 'https://api.example.com/v1',
    headers = {},
  }: APIServiceConfig = {}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // Utility method to merge headers
  private mergeHeaders(
    headers?: Record<string, string>,
  ): Record<string, string> {
    return { ...this.headers, ...headers };
  }

  // GET request
  async get<T>(
    endpoint: string,
    config: object = {},
    headers?: Record<string, string>,
  ): Promise<T> {
    return Http.get<T>(`${this.baseUrl}${endpoint}`, {
      ...config,
      headers: this.mergeHeaders(headers),
    });
  }

  // POST request
  async post<T>(
    endpoint: string,
    data: any,
    config: object = {},
    headers?: Record<string, string>,
  ): Promise<T> {
    return Http.post<T>(`${this.baseUrl}${endpoint}`, data, {
      ...config,
      headers: this.mergeHeaders(headers),
    });
  }

  // PUT request
  async put<T>(
    endpoint: string,
    data: any,
    config: object = {},
    headers?: Record<string, string>,
  ): Promise<T> {
    return Http.put<T>(`${this.baseUrl}${endpoint}`, data, {
      ...config,
      headers: this.mergeHeaders(headers),
    });
  }

  // PATCH request
  async patch<T>(
    endpoint: string,
    data: any,
    config: object = {},
    headers?: Record<string, string>,
  ): Promise<T> {
    return Http.patch<T>(`${this.baseUrl}${endpoint}`, data, {
      ...config,
      headers: this.mergeHeaders(headers),
    });
  }

  // DELETE request
  async delete<T>(
    endpoint: string,
    config: object = {},
    headers?: Record<string, string>,
  ): Promise<T> {
    return Http.delete<T>(`${this.baseUrl}${endpoint}`, {
      ...config,
      headers: this.mergeHeaders(headers),
    });
  }

  // Method to set a new authorization token
  setAuthToken(token: string) {
    this.headers.Authorization = `Bearer ${token}`;
  }
}

export default APIService;
