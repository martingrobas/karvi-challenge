
export const dataToFilterOptions = (data: any) => (
  {
    brand: data?.availableFilters?.brand.map(brand => brand.name),
    model: data?.availableFilters?.model.map(model => model.name),
    year: data?.availableFilters?.year.map(year => year.name),
    version: data?.availableFilters?.version.map(version => version.name),
    city: data?.availableFilters?.city.map(city => city.name),
  }
);