import React, { Component } from "react";
import {Icon, Picker } from "native-base";
import { View } from "react-native";

export default class PickerWithIconStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
        <View style={{ borderWidth:1,borderColor:'rgb(206, 202, 202)',borderRadius:3,marginBottom:5,}}>      
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 20 }} />}
              style={{ width: undefined,color:"grey" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Pakistan" value="Pakkistan" />
              <Picker.Item label="A Positive " value="key1" />
              <Picker.Item label=" B Positive " value="key2" />
              <Picker.Item label="O Positive " value="key3" />
              <Picker.Item label="A Negative " value="key4" />
              <Picker.Item label="B Negative  " value="key4" />
              <Picker.Item label="O Negative  " value="key4" />

            </Picker>
            </View>
 
         
    );
  }
}