import { validateSession, createAuthSession, logout } from '../lib/auth';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { MongoClient } from 'mongodb';

// Mock next/headers
jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    get: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  })),
}));

// Mock jsonwebtoken
jest.mock('jsonwebtoken');

// Mock mongodb
jest.mock('mongodb', () => ({
  MongoClient: jest.fn(() => ({
    connect: jest.fn(),
    db: jest.fn(() => ({
      collection: jest.fn(() => ({
        // Dodaj mocki dla operacji na kolekcji
      })),
    })),
  })),
}));

describe('Auth Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('validateSession', () => {
    it('should return null session when no cookie exists', async () => {
      (cookies().get as jest.Mock).mockReturnValue(null);

      const result = await validateSession();

      expect(result).toEqual({
        session: null,
        error: 'No session found'
      });
    });

    it('should return verified session when valid cookie exists', async () => {
      const mockVerified = { userId: '123' };
      (cookies().get as jest.Mock).mockReturnValue({ value: 'valid-token' });
      (jwt.verify as jest.Mock).mockReturnValue(mockVerified);

      const result = await validateSession();

      expect(result).toEqual({
        session: mockVerified,
        error: null
      });
    });

    it('should handle jwt verification errors', async () => {
      (cookies().get as jest.Mock).mockReturnValue({ value: 'invalid-token' });
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw new Error('Invalid token');
      });

      const result = await validateSession();

      expect(result).toEqual({
        session: null,
        error: 'Invalid session'
      });
    });
  });

  describe('createAuthSession', () => {
    it('should create auth session with Lucia', async () => {
      const mockUserId = '123';
      const mockSession = { id: 'session-id' };
      const mockCookie = {
        name: 'session_id',
        value: 'cookie-value',
        attributes: {}
      };

      const mockLucia = {
        createSession: jest.fn().mockResolvedValue(mockSession),
        createSessionCookie: jest.fn().mockReturnValue(mockCookie)
      };

      // Mock initializeLucia to return our mock Lucia instance
      jest.spyOn(global, 'initializeLucia' as any).mockResolvedValue(mockLucia);

      await createAuthSession(mockUserId, {});

      expect(mockLucia.createSession).toHaveBeenCalledWith(mockUserId, {});
      expect(mockLucia.createSessionCookie).toHaveBeenCalledWith(mockSession.id);
      expect(cookies().set).toHaveBeenCalledWith(
        mockCookie.name,
        mockCookie.value,
        mockCookie.attributes
      );
    });
  });

  describe('logout', () => {
    it('should delete session cookies', async () => {
      await logout();

      expect(cookies().delete).toHaveBeenCalledWith('session');
      expect(cookies().delete).toHaveBeenCalledWith('refresh_token');
    });
  });
}); 