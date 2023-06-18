import { View, Text, StyleSheet, Button, FlatList, Pressable } from 'react-native'
import React from 'react'

//Navigations
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import ProductItem from '../components/ProductItem'
import Seperator from '../components/Seperator'

import { PRODUCTS_LIST } from '../data/constants'

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: Homeprops) => {
    return (
        <View style={styles.container}>
            {/* <Button
                title='Go to Details'
                onPress={()=>navigation.navigate("Details",{
                    productId:"86"
                })}

                onPress={()=>navigation.navigate("Details")}

                onPress={() => navigation.push('Details', {
                    productId: "86"
                })}
                onPress={() => navigation.replace('Details', {
                    productId: "86"
                })}
            /> */}

            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={Seperator}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Details', {
                                product: item
                            })
                        }}
                    >
                        <ProductItem
                            product={item} />
                    </Pressable>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#FFFFFF'
    }
})

export default Home