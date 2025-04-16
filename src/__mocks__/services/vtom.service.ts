import { jest } from '@jest/globals';

type ProcessImageResult = {
  success: boolean;
};

type BatchStatus = {
  status: 'pending' | 'completed' | 'failed';
};

type ProcessImageFn = () => Promise<ProcessImageResult>;
type GetBatchStatusFn = () => Promise<BatchStatus>;

export const processImage = jest.fn<ProcessImageFn>()
  .mockImplementation(async () => ({ success: true }));

export const getBatchStatus = jest.fn<GetBatchStatusFn>()
  .mockImplementation(async () => ({ status: 'completed' }));

// Add other VTOM service mocks as needed 