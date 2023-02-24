import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Modal } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Weight } from '../../types/types'
import TextLabel from '../textcomponents/TextLabel'
import ChartDataModal from '../modals/ChartDataModal'

const chartConfig = {
    backgroundColor: '#484d4b',
    decimalPlaces: 1, 
    color: (opacity = 1) => `rgba(192, 235, 106, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 235, 106, ${opacity})`,
    propsForDots: {
      r: "3",
      strokeWidth: "2",
      stroke: "#c0eb6a"
    }
}

type Props = {
    data: Weight[]
}

export default function WeightChart({ data }: Props) {

  const [modalVisible, setModalVisible] = useState<boolean>(false)  
  const [modalData, setModalData] = useState<Weight>(data[0])

  const closeModal = () => {
    setModalVisible(false)
  }

  const showModal = (index: number) => {
    setModalData(data[index])
    setModalVisible(true)
  }

  return (
    <View>
        <TextLabel text='Weight progress' fontSize={20} />
        <LineChart
            data={{
            labels: data.map(weight => ''),
            datasets: [
                {
                data: data.map(weight => weight.weight)
                }
            ]
            }}
            width={Dimensions.get("screen").width}
            height={220}
            chartConfig={chartConfig}
            style={{
            marginVertical: 8,
            }}
            onDataPointClick={({index}) => showModal(index)}
        />
        <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        transparent={true}
        >
            <ChartDataModal 
            data={modalData}
            closeModal={closeModal}
            />
        </Modal>
    </View>
  )
}




