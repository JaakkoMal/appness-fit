export const genderOptions = [
  {
    key: 'Male',
    value: 'Male'
  },
  {
    key: 'Female',
    value: 'Female'
  },
  {
    key: 'Other',
    value: 'Other'
  }
]

export const activityLevelOptions = [
  {
    key: '1',
    value: '1'
  },
  {
    key: '2',
    value: '2'
  },
  {
    key: '3',
    value: '3'
  }
]

export const chartConfig = {
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

// Text constants
export const homeViewStrings = {
  quickWorkoutDescription: 'Log a workout without choosing a pre-defined program',
  chooseAWorkoutDescription: 'Log a workout using a pre-defined template',
  newWorkoutDescription: 'Create a new workout template',
  myProgressDescription: 'Track your weight and workout data',
  workoutHistoryDescription: 'View all of your workout history',
  editPersonalStatsDescription: 'View and edit your stats'
}