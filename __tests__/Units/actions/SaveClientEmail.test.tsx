import { describe, it, expect, vi, beforeEach } from 'vitest';

import { saveClientData } from '../../../actions/SaveClientEmail';
import { saveClientToDB } from '../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions';
import { createAuthSession } from '../../../lib/auth';

vi.mock('../../../db/Utils/DataFetchingFunctions/DataFetchingFunctions', () => ({
  saveClientToDB: vi.fn()
}));

vi.mock('../../../lib/auth', () => ({
  createAuthSession: vi.fn()
}));

describe('SaveClientEmail Action', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully save valid client data', async () => {
    const mockSavedClient = { id: '1', name: 'Test User', email: 'test@example.com' };
    vi.mocked(saveClientToDB).mockResolvedValue(mockSavedClient);
    vi.mocked(createAuthSession).mockResolvedValue({ success: true });

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(true);
    expect(saveClientToDB).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com'
    });
    expect(createAuthSession).toHaveBeenCalledWith('test@example.com', 'Test User');
  });

  it('should return error for missing fields', async () => {
    const formData = new FormData();
    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Missing required fields');
    expect(saveClientToDB).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should return error for invalid email format', async () => {
    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'invalid-email');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid email format');
    expect(saveClientToDB).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle database save failure', async () => {
    vi.mocked(saveClientToDB).mockRejectedValue(new Error('Database error'));

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Database error');
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle session creation failure', async () => {
    vi.mocked(saveClientToDB).mockResolvedValue({ id: '1', name: 'Test User', email: 'test@example.com' });
    vi.mocked(createAuthSession).mockResolvedValue({ success: false });

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Failed to create session');
  });

  it('should trim whitespace from input data', async () => {
    vi.mocked(saveClientToDB).mockResolvedValue({ id: '1', name: 'Test User', email: 'test@example.com' });
    vi.mocked(createAuthSession).mockResolvedValue({ success: true });

    const formData = new FormData();
    formData.append('name', '  Test User  ');
    formData.append('email', '  test@example.com  ');

    await saveClientData(formData);

    expect(saveClientToDB).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com'
    });
  });
}); 