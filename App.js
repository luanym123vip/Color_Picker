import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Component } from 'react';


class Control extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <View style={styles.one_row_item}>
        <Text>{this.props.title}</Text>
        <Slider style={styles.item_parameter}
          onValueChange={(val) => {
            this.props.onValueChange(val);
          }} value={this.state.value} step={1} minimumValue={0} maximumValue={255} >
        </Slider>
        <TextInput value={`${this.props.value}`} step style={styles.textip_parameter}></TextInput>
      </View >
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 50,
      green: 50,
      blue: 50,
    };
  }

  onSliderValueChanged = (color) => {
    this.setState(color)
  }

  rederHeader = (title) => {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>
          {title}
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.view_root} >
        {this.rederHeader("COLOR PICKER")}
        <View style={styles.container}>
          <View style={styles.content_wrapper} >
            <View style={styles.parameter} >
              <Control title={'R'} value={this.state.red}
                onValueChange={(val) => {
                  const current = this.state;
                  const newColor = { ...current, red: val };
                  this.onSliderValueChanged(newColor)
                }}>

              </Control>
              <Control title={'B'} value={this.state.blue}
                onValueChange={(val) => {
                  const current = this.state;
                  const newColor = { ...current, blue: val };
                  this.onSliderValueChanged(newColor)
                }}
              ></Control>
              <Control title={'G'} value={this.state.green}
                onValueChange={(val) => {
                  const current = this.state;
                  const newColor = { ...current, green: val };
                  this.onSliderValueChanged(newColor)
                }}
              ></Control>
            </View >
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1, backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})`
            }}>
              <Text>Preview Area</Text>
            </View>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  view_root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 110,
    backgroundColor: '#FF9999',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#FF6699',
    shadowOpacity: 0.3,
  },
  header_text: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_wrapper: {
    // backgroundColor: 'green',
    flexDirection: 'column',
    height: 450,
    width: 300
  },
  parameter: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  one_row_item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    ,
  },
  item_parameter: {
    marginLeft: 20,
    width: 170,
    minimumTrackTintColor: "#FFFFFF",
    maximumTrackTintColor: "#000000",
  },
  textip_parameter: {
    borderRadius: 5,
    marginLeft: 20,
    height: 40,
    width: 50,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
  }


});
