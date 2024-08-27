// src/utils/Http.ts
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

class Http {
  // Async GET request
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(url, config);
      return response.data;
    } catch (error) {
      // Handle error or rethrow it
      throw this.handleError(error);
    }
  }

  // Async POST request
  static async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      // Handle error or rethrow it
      throw this.handleError(error);
    }
  }

  // Async PUT request
  static async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      // Handle error or rethrow it
      throw this.handleError(error);
    }
  }

  // Async PATCH request
  static async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.patch<T>(
        url,
        data,
        config,
      );
      return response.data;
    } catch (error) {
      // Handle error or rethrow it
      throw this.handleError(error);
    }
  }

  // Async DELETE request
  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete<T>(url, config);
      return response.data;
    } catch (error) {
      // Handle error or rethrow it
      throw this.handleError(error);
    }
  }

  // Helper method to handle errors
  private static handleError(error: any): any {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors here if needed
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      // Handle non-Axios errors here if needed
      console.error('Non-Axios error:', error);
    }
    throw error; // Re-throw the error so it can be caught by the caller
  }
}

export default Http;
