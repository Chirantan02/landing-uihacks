export const logger = {
  error: (message: string, error?: unknown) => {
    console.error(message, error);
  },
  info: (message: string, data?: unknown) => {
    console.info(message, data);
  }
}; 