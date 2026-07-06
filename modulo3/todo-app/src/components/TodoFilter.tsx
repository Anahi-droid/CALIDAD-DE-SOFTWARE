// src/components/TodoFilter.tsx
import type { Filter } from '../types'

interface TodoFilterProps {
  current: Filter
  onChange: (filter: Filter) => void
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'active', label: 'Activas' },
  { value: 'completed', label: 'Completadas' },
]

export function TodoFilter({ current, onChange }: TodoFilterProps) {
  return (
    <div role="group" aria-label="Filtros">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          // aria-pressed indica visual y semánticamente el filtro activo
          aria-pressed={current === value}
        >
          {label}
        </button>
      ))}
    </div>
  )
}