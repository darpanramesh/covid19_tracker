import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from './../../Component/Header/Header';
import Card from './../../Component/Card/Card';
import { PieChart,} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: ''
    };
  }

  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        });
        this.setState({});
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
    let {confirmed,recovered,deaths} = this.state
    const data = [
      {
        name: "Confirmed",
        population: confirmed ? confirmed : 0,
        color: "#e7ce00",
        legendFontColor: "#e7ce00",
        legendFontSize: 8
      },
      {
        name: "Recovered",
        population: recovered ? recovered : 0,
        color: "#005339",
        legendFontColor: "#005339",
        legendFontSize: 8
      },
      {
        name: "Total Deaths",
        population: deaths ? deaths : 0,
        color: "#B80E17",
        legendFontColor: "#B80E17",
        legendFontSize: 8
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
      useShadowColorFromDataset: false // optional
    };
    // console.log(this.props.navigation)

    return (
      <View>
        <Header navigation={this.props.navigation} screen="Home" />
        <Image
          source={{
            uri:
              'https://mybank.com/wp-content/uploads/covid19-header.jpg',
          }}
          style={{ width: '100%', height: "15%", marginTop: 5 }}
        />
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.total}>Total Cases in the World</Text>
            <Card
              name="Confirmed"
              value={this.state.confirmed}
              color="black"
              background="#e7ce00"
            />
            <Card
              name="Recovered"
              value={this.state.recovered}
              color="white"
              background="#005339"
            />
            <Card
              name="Total deaths"
              value={this.state.deaths}
              color="white"
              background="#B80E17"
            />
            <PieChart
              data={data}
              width={300}
              height={200}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    marginBottom: 150,
  },
  total: {
    textAlign: 'center',fontSize: 28,fontWeight: 'bold',color: '#B80E17',
  },
});

// get

// fetch("http://localhost:8000/api/places", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     setPlaces(json.places);
//   });

// post

// fetch("http://localhost:8000/api/users/signup", {
//   method: "POST",
//   body: JSON.stringify({
//     name: name,
//     email: email,
//     password: password,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
