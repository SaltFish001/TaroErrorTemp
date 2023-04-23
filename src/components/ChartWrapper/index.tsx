import React from 'react'
// import type {ECharts, EChartsOption} from 'echarts'
import {useUnload} from '@tarojs/cli'
import {View} from '@tarojs/components'
import * as echarts from '@/components/ec-canvas/echarts'

export const global: {
  charts: null | {
    setOption: (option: Record<string, unknown>) => Record<string, unknown>
    clear: () => void
    dispose: () => void
  }
} = {
  charts: null,
}

const optionMaker: (count: number, presence: number, inpresence: number) => Record<string, unknown> = (
  count,
  presence,
  inpresence,
) => {
  const center = [62, 92]
  return {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: false,
        radius: [0, '39px'],
        tooltip: {
          show: false,
        },
        center: center,
        emphasis: {disabled: true},
        data: [
          {
            value: count,
            name: '总人数',
            itemStyle: {
              borderColor: '#7847e8',
              borderWidth: 6,
              color: '#8259e3',
            },
            label: {
              color: '#fff',
              position: 'center',
              formatter: ['{a|总人数}', '{b|{c}}'].join('\n'),
              rich: {
                a: {
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: 20,
                },
                b: {
                  lineHeight: 20,
                  fontSize: '16px',
                  fontWeight: 500,
                },
              },
            },
          },
        ],
      },
      {
        name: '在场人数',
        type: 'pie',
        emphasis: {disabled: true},
        radius: ['49px', '58px'],
        tooltip: {
          show: false,
        },
        center: center,
        startAngle: -40,
        labelLayout: {
          align: 'left',
          verticalAlign: 'middle',
          x: 118,
          // y: 20,
          width: 48,
          height: 39,
        },
        data: [
          {
            value: inpresence,
            itemStyle: {
              opacity: 0,
            },
            label: {show: false},
            labelLine: {show: false},
          },
          {
            value: presence,
            itemStyle: {
              color: '#5c6cfa',
            },
            labelLine: {
              show: false,
            },
            label: {
              labelLine: 'labelLine',
              color: '#5c6cfa',
              formatter: '{a|在场人数} \n {b|{c}} {c|人}',
              rich: {
                a: {
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: 20,
                  align: 'center',
                  alignTo: 'labelLine',
                },
                c: {
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 22,
                  align: 'center',
                  alignTo: 'labelLine',
                },
                b: {
                  align: 'center',
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 20,
                },
              },
            },
          },
        ],
      },
      {
        name: '离场人数',
        type: 'pie',
        emphasis: {disabled: true},
        radius: ['49px', '62px'],
        selectedMode: false,
        tooltip: {
          show: false,
        },
        labelLayout: {
          align: 'left',
          // verticalAlign: "middle",
          x: 118,
          width: 48,
          height: 39,
        },
        center: center,
        startAngle: -40,
        data: [
          {
            value: inpresence,
            name: 'Direct',
            itemStyle: {
              color: '#00baad',
              borderColor: '#fff',
              borderWidth: 1,
            },
            labelLine: {
              show: false,
            },
            label: {
              alignTo: 'labelLine',
              color: '#00baad',
              formatter: '{a|离场人数} \n {b|{c}} {c|人}',
              rich: {
                a: {
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: 20,
                  align: 'center',
                },
                c: {
                  fontSize: 10,
                  fontWeight: 400,
                  lineHeight: 22,
                  align: 'center',
                },
                b: {
                  align: 'center',
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 20,
                },
              },
            },
          },
          {
            value: presence,
            itemStyle: {
              opacity: 0,
            },
            label: {show: false},
            labelLine: {show: false},
          },
        ],
      },
    ],
  }
}

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
  })
  canvas.setChart(chart)

  global.charts = chart
  updateData()
  return chart
}

const updateData = () => {
  const option = optionMaker(412, 356, 56)
  global.charts?.setOption(option)
}

export default ({style}: {style: React.CSSProperties}) => {
  const radomId = 'ECCharts_' + Math.ceil(Math.random() * 1000000)
  useUnload(() => {
    if (global.charts) {
      global.charts.clear()
      global.charts.dispose()
    }
  })
  return (
    <View style={style}>
      <ec-canvas
        id={radomId}
        canvas-id={radomId}
        ec={{
          onInit: initChart,
        }}
      />
    </View>
  )
}
