import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useFormValidation } from '../../../hooks/useFormValidation.hook';

const mockRouter = { push: vi.fn() };

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

describe('useFormValidation Hook', () => {
  const mockAction = vi.fn();
  const mockSlug = 'test-slug';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createForm = () => {
    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const privacyInput = document.createElement('input');

    nameInput.name = 'name';
    emailInput.name = 'email';
    privacyInput.name = 'privacy';
    privacyInput.type = 'checkbox';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(privacyInput);

    return { form, nameInput, emailInput, privacyInput };
  };

  it('should initialize with default state', () => {
    const { result } = renderHook(() =>
      useFormValidation({
        action: mockAction,
        slug: mockSlug,
      })
    );

    expect(result.current.formState).toEqual({
      isPending: false,
      error: null,
      success: null,
      errors: {},
    });
  });

  it('should validate required fields', async () => {
    const { result } = renderHook(() =>
      useFormValidation({
        action: mockAction,
        slug: mockSlug,
      })
    );

    const { form } = createForm();

    result.current.formRefs = {
      name: { current: form.querySelector('[name="name"]') },
      email: { current: form.querySelector('[name="email"]') },
      privacy: { current: form.querySelector('[name="privacy"]') },
    };

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
        currentTarget: form,
      } as any);
    });

    expect(result.current.formState.errors).toEqual({
      name: '*Imię jest wymagane',
      email: '*Email jest wymagany',
      privacy: '*Musisz zaakceptować politykę prywatności',
    });
  });

  it('should validate email format', async () => {
    const { result } = renderHook(() =>
      useFormValidation({
        action: mockAction,
        slug: mockSlug,
      })
    );

    const { form, nameInput, emailInput, privacyInput } = createForm();

    nameInput.value = 'Test User';
    emailInput.value = 'invalid-email';
    privacyInput.checked = true;

    result.current.formRefs.name.current = nameInput;
    result.current.formRefs.email.current = emailInput;
    result.current.formRefs.privacy.current = privacyInput;

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
        currentTarget: form,
      } as any);
    });

    expect(result.current.formState.errors.email).toBe('Nieprawidłowy email');
  });

  it('should handle successful form submission', async () => {
    mockAction.mockResolvedValueOnce({ success: true });

    const { result } = renderHook(() =>
      useFormValidation({
        action: mockAction,
        slug: mockSlug,
      })
    );

    const { form, nameInput, emailInput, privacyInput } = createForm();

    nameInput.value = 'Test User';
    emailInput.value = 'test@example.com';
    privacyInput.checked = true;

    result.current.formRefs.name.current = nameInput;
    result.current.formRefs.email.current = emailInput;
    result.current.formRefs.privacy.current = privacyInput;

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
        currentTarget: form,
      } as any);
    });

    expect(mockAction).toHaveBeenCalled();
    expect(result.current.formState.success).toBe('Udało się! Wkrótce otrzymasz mojego E-booka!');
    expect(result.current.formState.error).toBeNull();
    expect(result.current.formState.errors).toEqual({});
    expect(mockRouter.push).toHaveBeenCalledWith(`/Thanks/${mockSlug}`);
  });

  it('should handle submission error', async () => {
    const errorMessage = 'Failed to save data';
    mockAction.mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() =>
      useFormValidation({
        action: mockAction,
        slug: mockSlug,
      })
    );

    const { form, nameInput, emailInput, privacyInput } = createForm();

    nameInput.value = 'Test User';
    emailInput.value = 'test@example.com';
    privacyInput.checked = true;

    result.current.formRefs.name.current = nameInput;
    result.current.formRefs.email.current = emailInput;
    result.current.formRefs.privacy.current = privacyInput;

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
        currentTarget: form,
      } as any);
    });

    expect(result.current.formState.error).toBe(errorMessage);
    expect(result.current.formState.success).toBeNull();
  });
});
