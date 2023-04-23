import {View} from '@tarojs/components'
import {NavBar, Icon} from '@nutui/nutui-react-taro'
import React from 'react'
import Taro from '@tarojs/taro'

import './index.scss'

export default ({title, BackIcon}: {title?: string; BackIcon?: string}) => {
  return (
    <View
      style={{
        height: '88px',
      }}
    >
      <View className='ZJY_StatusBar' />
      <NavBar
        leftShow={false}
        className='ZJY_SearchBar'
        onClickBack={() => {
          Taro.navigateBack({delta: 1})
        }}
      >
        {BackIcon ? (
          <Icon
            name={BackIcon}
            slot='left'
            // onClick={() => {
            //   Taro.navigateBack({delta: 1})
            // }}
          />
        ) : (
          <></>
        )}
        {/* <Icon name='more-x' slot='left' /> */}
        <p slot='content'>{title || ''}</p>
      </NavBar>
    </View>
  )
}
