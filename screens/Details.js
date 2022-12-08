import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewsCard from '../components/NewsCard';
import NewsDetailsCard from '../components/NewsDetailsCard';

const Details = ({ route }) => {
    const { article } = route.params;

    return (
        <View style={styles.container}>
            <NewsCard article={article} />
            <NewsDetailsCard article={article} />
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})