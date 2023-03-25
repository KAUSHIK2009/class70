import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default class TransactionScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bookId: "",
            studentId: "",
            domState: 'normal',
            hasCameraPermissions: null,
            scanned: false,
            scannedData: ''
        }

    }


    getCameraPermissions = async domState => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)

        this.setState({
            hasCameraPermissions: status === "granted",
            domState: domState,
            scanned: false
        })

    }
    handleBarCodeScanned = async ({ type, data }) => {
        this.setState({
            scannedData: data,
            domState: 'normal',
            scanned: true,

        })
    }



    render() {
        const { domState, hasCameraPermissions, scanned, scannedData } = this.state
        if (domState === "scanner") {
            return (
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                >
                </BarCodeScanner>
            )
        }
        return (
            <View style={styles.container}>

                <View style={styles.lowerContainer}>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textinput}
                            placeholder={"bookId"}
                            placeholderTextColor={"white"}
                            value={bookId}
                        >

                        </TextInput>
                        <TouchableOpacity style={styles.scanButton}
                            onPress={() => this.getCameraPermissions("bookId")
                            }
                        >
                            <Text style={styles.scanButtonText}>
                                Scan
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textinput}
                            placeholder={"studentId"}
                            placeholderTextColor={"white"}
                            value={studentId}
                        >

                        </TextInput>
                        <TouchableOpacity style={styles.scanButton}
                            onPress={() => this.getCameraPermissions("studentId")
                            }
                        >
                            <Text style={styles.scanButtonText}>
                                Scan
                            </Text>
                        </TouchableOpacity>


                    </View>


                </View>
                </View>
                )
    }
}
                const styles = StyleSheet.create({
                    container: {
                    flex: 1,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
    },
                text: {
                    color: 'white',
                fontSize: 30,
    },
                button: {
                    width: '43%',
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f48d20',
                borderRadius: 15,
    },
                lowerContainer: {flex: 0.5, alignItems: "center" },
                textinputContainer: {borderWidth: 2,
                borderRadius: 10,
                flexDirection: "row",
                backgroundColor: "#9DFD24",
        borderColor: "#FFFFFF" },
                textinput: {width: "57%",
                height: 50,
                padding: 10,
                borderColor: "#FFFFFF",
                borderRadius: 10,
                borderWidth: 3,
                fontSize: 18,
                backgroundColor: "#5653D4",
                fontFamily: "Rajdhani_600SemiBold",
                 color: "#FFFFFF" },
                scanbutton: {width: 100,
                height: 50,
                backgroundColor: "#9DFD24",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                justifyContent: "center",
                        alignItems: "center" },
                scanbuttonText: {fontSize: 24,
                color: "#0A0101",
                           fontFamily: "Rajdhani_600SemiBold" }
});