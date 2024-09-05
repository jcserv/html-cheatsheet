import React, { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  return (
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={handleChange}
      className="search-bar"
    />
  )
}

export default SearchBar