import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'

const NewsDetailsCard = ({ article }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.desc}>{article.description}</Text>
            <Text style={styles.content}>{article.content}</Text>
            <Text style={styles.url} onPress={() => Linking.openURL(article.url)}>{article.url}</Text>
        </View>
    )
}

export default NewsDetailsCard

const styles = StyleSheet.create({
    card: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
    },
    desc: {
        marginVertical: 12,
        fontStyle: 'italic',
        fontWeight: '500'
    },
    content: {
        marginVertical: 12,
        fontWeight: 'bold'
    },
    url: {
        marginVertical: 12,
        fontWeight: '700',
        color: 'blue'
    },
})
