import { useState } from 'react';

enum FilterType {
  brand = 'brand',
  model = 'model',
  year = 'year',
  version = 'version',
  city = 'city',
}

type Filter = {
  [key: string]: string;
};

export const useAppliedFilters = () => {
  const defaultFilters: Filter[] = [
    { brand: 'CHEVROLET' },
    { year: '2018' },
  ];
  const [appliedFilters, setAppliedFilters] = useState<Filter[]>(defaultFilters)

  const addFilter = (filter: Filter) => {
    const [key] = Object.keys(filter);
    const value = filter[key];
    const alreadyApplied = appliedFilters.some(f => f[key] === value);
    if (alreadyApplied) return;
    const updatedFilters: Filter[] = [...appliedFilters, { [key]: value }];
    setAppliedFilters(updatedFilters);
  };

  const removeFilter = (filter: Filter) => {
    const [key] = Object.keys(filter);
    const value = filter[key];
    const updatedFilters: Filter[] = appliedFilters.filter(f => f[key] !== value);
    setAppliedFilters(updatedFilters);
  };

  return { addFilter, removeFilter, appliedFilters };
};
