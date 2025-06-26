import { renderHook } from '@testing-library/react';
import { useAuth } from '../hooks/useAuth';

test('useAuth throws outside provider', () => {
  expect(() => renderHook(() => useAuth())).toThrowError();
});
