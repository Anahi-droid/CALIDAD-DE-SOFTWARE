// src/hooks/usePersistedFilter.ts
import { useState, useEffect } from 'react'
import type { Filter } from '../types'

export function usePersistedFilter() {
  const [filter, setFilter] = useState<Filter>(
    () => (localStorage.getItem('filter') as Filter) ?? 'all',
  )

  // efecto: cada cambio de filtro se guarda en localStorage
  useEffect(() => {
    localStorage.setItem('filter', filter)
  }, [filter])

  return { filter, setFilter }
}