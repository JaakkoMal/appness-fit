import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Modal } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { chartConfig } from '../../constants/constants'
import { Weight } from '../../types/types'
import TextLabel from '../textcomponents/TextLabel'
import ChartDataModal from '../modals/ChartDataModal'

type Props = {
  data: Weight[]
  goalData: number
}

export default function WeightChart({ data, goalData }: Props) {

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
    <View style={styles.container}>
      <TextLabel text='Weight chart' fontSize={20} />
        <LineChart
          data={{
            labels: data.map(weight => ''),
            datasets: [
              { 
                data: data.map(weight => weight.weight),
                strokeWidth: 5,
                color: (opacity = 1) => `rgba(192, 235, 106, ${opacity})`,
              }, 
              { 
                data: data.map(weight => goalData),
                strokeWidth: 1,
                color: (opacity = 1) => `rgba(252, 186, 3, ${opacity})`,
              }
            ]
          }}
          width={Dimensions.get("screen").width}
          height={220}
          chartConfig={chartConfig}
          onDataPointClick={({index}) => showModal(index)}
          withShadow={false}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})




