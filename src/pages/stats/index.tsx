import ChartWrapper from '@/components/ChartWrapper'
import React from 'react'
import {View} from '@tarojs/components'
import Navigation from '@/components/Navigation'
import './index.scss'

export default () => {
  return (
    <View className='ZJY_Home'>
      <Navigation />
      <View className='ZJY_Content'>
        <View className='ZJY_MainView'>
          <ChartWrapper
            style={{
              width: '166px',
              height: '182px',
            }}
          />
        </View>
      </View>
    </View>
  )
}
