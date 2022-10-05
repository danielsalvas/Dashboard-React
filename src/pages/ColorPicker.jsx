import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg'>
      <Header category='App' title='Color Picker'/>
      <div className='text-center'>
        <div id='preview' className='rounded-3xl'/>
        <div className='flex justify-center items-center gap-40 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4 dark:text-white'>Inline Pallete</p>
            <ColorPickerComponent 
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4 dark:text-white'>Inline Picker</p>
            <ColorPickerComponent 
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
