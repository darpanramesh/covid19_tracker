import React from 'react';
import Backheader from '../../Component/BackHeader/Backheader';
import CountryPicker from './../../Component/Country/Country';
import Header from './../../Component/Header/Header';
import Card from './../../Component/Card/Card';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';

export default class CountryTable extends React.Component {
    constructor() {
        super();
        this.state = {
            country: 'Pakistan',
            tableHead: ['Name', 'Confirmed', 'Recovered', 'Deaths'],
            tableTitle: ['Pakistan', 'India', 'Japan', 'China'],
            tableData: [
                ['1', '2', '3'],
                ['a', 'b', 'c'],
                ['1', '2', '3'],
                ['a', 'b', 'c']
            ]
        };
    }
    // componentDidMount = async () => {
    //     await fetch('https://covid19.mathdro.id/api/countries/Pakistan', {
    //         method: 'GET',
    //     })
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({
    //                 confirmed: json.confirmed.value,
    //                 recovered: json.recovered.value,
    //                 deaths: json.deaths.value,
    //             });
    //             this.setState({});
    //         })
    //         .catch((err) => console.log('new error', err));
    // };
    // ChangeCounrty = async (country) => {
    //     let {tableTitle,tableData} = this.state;
    //     for(var i=0; i<tableTitle.length;i++){
    //         await fetch('https://covid19.mathdro.id/api/countries/'+tableTitle[i], {
    //             method: 'GET',
    //           })
    //             .then((response) => response.json())
    //             .then((json) => {
    //               this.setState({
    //                 confirmed: json.confirmed.value,
    //                 recovered: json.recovered.value,
    //                 deaths: json.deaths.value,
    //                 country,
    //               });
    //               this.setState({});
    //             })
    //             .catch((err) => console.log('new error', err));
    //     }
    //   };
    render() {
        const state = this.state;
        // console.log(this.props.navigation)
        return (
            <View >
                <Header navigation={this.props.navigation} screen="Country" />
                <View style={styles.container}>
                    <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: 'bold', color: '#B80E17', }}>Chart Of All Countries</Text>
                    <View style={{ marginTop: 15 }}>
                        <Table borderStyle={{ borderWidth: 1 }}>
                            <Row data={state.tableHead} flexArr={[1, 1.5, 1.5, 1]} style={styles.head} textStyle={styles.text} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={state.tableData} flexArr={[1.5, 1.5, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { marginTop: 15 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa', fontSize:10 },
    row: { height: 28 },
    text: { textAlign: 'center' }
});
