import React from 'react'
import { ChartComponent, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Series  } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

import { Header } from '../../components'

const Area = () => {

    const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg dark:text-white rounded-3xl'>
      <Header 
        category='Chart'
        title='Inflation Rate in Percentage'
      />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0}}}
        tooltip={{ enable: true}}
        background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
        palettes={ currentMode === 'Dark' ? ['#4ade80', '#ffffff', '#4b0082' ] : ['#4ade80', '#000000','#4b0082'  ] }
        legendSettings={{ background: 'white' }}
    >
        <Inject services={[DateTime, Legend, SplineAreaSeries ]}/>
        <SeriesCollectionDirective>
           {areaCustomSeries.map((item, index) => 
           <SeriesDirective
            key={index}
            {...item}
           />
           )} 
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area