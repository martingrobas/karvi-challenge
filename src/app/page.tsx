'use client'
import React, { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import homeStyles from './home.module.scss'
import Chip from './components/Chip/Chip'
import Button from './components/Button/Button'
import { Arrows, TrashIcon } from './components/Icons'
import { Accordion } from './components/Accordion/Accordion'
import { useAppliedFilters } from './hooks/useFilter'
import { dataToFilterOptions } from './adapters/dataToFilterOptions.adapter'
import { RestClient } from './api/cars'

const Home = () => {
  const [data, setData] = useState<any>({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const client = new RestClient();

  const [filterOptions, setFilterOptions] = useState<{ [key: string]: string[] }>({
    brand: [],
    model: [],
    year: [],
    version: [],
    city: [],
  })

  const [activeAccordion, setActiveAccordion] = useState<string | number>('')

  const [sorting, setSorting] = useState<{ value: 'relevant' | 'asc' | 'desc'; text: string }>({ value: 'relevant', text: 'Más relevantes' })

  const { appliedFilters, addFilter, removeFilter } = useAppliedFilters();

  useEffect(() => {
    setFilterOptions(dataToFilterOptions(data))
  }, [data?.availableFilters])

  useEffect(() => {
    client.getCars()
      .then(res => res)
      .then(data => {
        const filteredData = client.getCarsFiltered(data, appliedFilters);
        console.log('client filteredData: ', filteredData);
        setData(filteredData)
        setError(null)
        setLoading(false)
        console.log(data);
      })
      .catch(err => {
        console.error(`Error fetching data: ${err.message}`)
        setError(err.message)
        setLoading(false)
      })
  }, [appliedFilters]);


  const handleToggleAccordion = (id: string | number) => {
    setActiveAccordion(activeAccordion === id ? '' : id)
  }

  // if (loading) return
  //   <div>Loading...</div>

  // if (error !== null) return
  //   <div>Error: {error}</div>

  return (
    <main className={homeStyles['home']}>
      <section className={`${homeStyles['home-search']} container`}>
        {/* <Menu /> */}
        {/* <Filters /> */}
        {/* <CarsList> */}

        <div className={homeStyles['filters']}>
          {Object.keys(filterOptions).map((key, i) => (
            <Accordion id={key} key={i} handleToggle={handleToggleAccordion} isOpen={activeAccordion === key}>
              <Accordion.Header>{key}</Accordion.Header>
              <Accordion.Body handleClick={addFilter} itemsKey={key} items={filterOptions[key]} />
            </Accordion>
          ))}
        </div>
        <div className={homeStyles['results-container']}>
          <div className={homeStyles['applied-filters-container']}>
            <div className={homeStyles['applied-filters']}>
              {appliedFilters.map((filter, i) => (
                <Chip key={i} handleClick={() => removeFilter(filter)}>
                  {filter[Object.keys(filter)[0]]}
                </Chip>
              ))}
            </div>
            <Button buttonType='link' title='Limpiar Filtros'>
              <TrashIcon width={20} height={20} /> Limpiar Filtros
            </Button>
          </div>
          <div className={homeStyles['counter-and-sorting']}>
            <div className={homeStyles['counter']}>{data?.totalCount?.toLocaleString()} Carros encontrados</div>
            <div className={homeStyles['sorting']}>
              <Button buttonType='link'> <Arrows width={20} height={20} /> {sorting.text}</Button>
            </div>
          </div>
          <div className={homeStyles['results']}>
            {data &&
              data?.items?.map((item: { [key: string]: any }, i: number) => {
                const { id, city, state, year, brand, model, version, price, mileage, image } = item
                return <ProductCard key={i} productId={id} {...{ city, state, year, brand, model, version, price, mileage, image }} />
              })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
