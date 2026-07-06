// src/hooks/usePersistedFilter.test.tsx
import { act, renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { usePersistedFilter } from './usePersistedFilter'

describe('usePersistedFilter', () => {
  beforeEach(() => {
    // jsdom incluye localStorage; lo limpiamos entre tests
    localStorage.clear()
  })

  it('lee el valor inicial desde localStorage', () => {
    localStorage.setItem('filter', 'completed')

    const { result } = renderHook(() => usePersistedFilter())

    expect(result.current.filter).toBe('completed')
  })

  it('persiste el filtro cuando cambia (efecto)', () => {
    const { result } = renderHook(() => usePersistedFilter())

    act(() => result.current.setFilter('active'))

    // el useEffect ya corrió tras el re-render dentro de act
    expect(localStorage.getItem('filter')).toBe('active')
  })

  it('ejecuta cleanups al desmontar', () => {
    const { unmount } = renderHook(() => usePersistedFilter())
    // unmount dispara los cleanups de useEffect (si los hubiera)
    expect(() => unmount()).not.toThrow()
  })
})