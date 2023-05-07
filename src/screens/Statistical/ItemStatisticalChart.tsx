import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {
    PieChart,
  } from 'react-native-chart-kit';

  const {height, width} = Dimensions.get("window")

const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'gray',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: 'blue',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: 'orange',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'green',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export const ItemStatisticalChart = React.memo(() => {
  return (
    <View>
      <PieChart
        data={data}
        width={width}
        height={220}
        accessor={'population'}
        backgroundColor={'white'}
        paddingLeft={'15'}
        chartConfig={chartConfig}
        // center={[10, 50]}
        absolute
        // style={{borderRadius: 8}}
      />
    </View>
  )
})