import { jest } from '@jest/globals';
import type { Mock } from 'jest-mock';

export const mockAuthHandler = (handler: () => void): jest.Mock => jest.fn(handler);
export const mockAuthCheck = jest.fn();

// Add other auth-related mocks as needed 