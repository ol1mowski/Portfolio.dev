import { describe, it, expect, vi, beforeEach } from 'vitest';

//@ts-ignore
import { saveClientData } from '../../../actions/SaveClientEmail';
import { saveClient } from '../../../lib/api/client/client.service';
import { createAuthSession } from '../../../lib/auth';

vi.mock('../../../lib/api/client/client.service', () => ({
  saveClient: vi.fn(),
}));

vi.mock('../../../lib/auth', () => ({
  createAuthSession: vi.fn(),
}));

describe('SaveClientEmail Action', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully save valid client data', async () => {
    const mockSavedClient = {
      success: true,
      client: {
        _id: '1',
        name: 'Test User',
        email: 'test@example.com',
      },
    };
    vi.mocked(saveClient).mockResolvedValue(mockSavedClient);
    vi.mocked(createAuthSession).mockResolvedValue({ success: true });

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(true);
    expect(saveClient).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
    });
    expect(createAuthSession).toHaveBeenCalledWith('test@example.com', 'Test User');
  });

  it('should return error for missing fields', async () => {
    const formData = new FormData();
    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Missing required fields');
    expect(saveClient).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should return error for invalid email format', async () => {
    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'invalid-email');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid email format');
    expect(saveClient).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle database save failure', async () => {
    vi.mocked(saveClient).mockResolvedValue({
      success: false,
      error: 'Database error',
    });

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Failed to save client data');
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle session creation failure', async () => {
    vi.mocked(saveClient).mockResolvedValue({
      success: true,
      client: {
        _id: '1',
        name: 'Test User',
        email: 'test@example.com',
      },
    });
    vi.mocked(createAuthSession).mockResolvedValue({ success: false });

    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Failed to create session');
  });

  it('should trim whitespace from input data', async () => {
    vi.mocked(saveClient).mockResolvedValue({
      success: true,
      client: {
        _id: '1',
        name: 'Test User',
        email: 'test@example.com',
      },
    });
    vi.mocked(createAuthSession).mockResolvedValue({ success: true });

    const formData = new FormData();
    formData.append('name', '  Test User  ');
    formData.append('email', '  test@example.com  ');

    await saveClientData(formData);

    expect(saveClient).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
    });
  });

  it('should handle empty name field', async () => {
    const formData = new FormData();
    formData.append('name', '');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Missing required fields');
    expect(saveClient).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle empty email field', async () => {
    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', '');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Missing required fields');
    expect(saveClient).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle whitespace-only name field', async () => {
    const formData = new FormData();
    formData.append('name', '   ');
    formData.append('email', 'test@example.com');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Missing required fields');
    expect(saveClient).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });

  it('should handle whitespace-only email field', async () => {
    const formData = new FormData();
    formData.append('name', 'Test User');
    formData.append('email', '   ');

    const result = await saveClientData(formData);

    expect(result.success).toBe(false);
    expect(result.error).toBe('Missing required fields');
    expect(saveClient).not.toHaveBeenCalled();
    expect(createAuthSession).not.toHaveBeenCalled();
  });
});
