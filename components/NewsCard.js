import { Image, StyleSheet, Text, View } from 'react-native'
import { useTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";
import React from 'react'

const NewsCard = ({ article }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    function getParsedDate(strDate) {
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date = dd + "-" + mm + "-" + yyyy;
        return date.toString();
    }

    const styles = StyleSheet.create({
        card: {
            width: '90%',
            marginVertical: 10,
            display: 'flex',
            flexDirection: 'row',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
        },
        cardImage: {
            width: 150,
            height: 150,
            marginRight: 10
        },
        source: {
            width: 200,
            backgroundColor: scheme === "dark" ? 'white' : 'black',
            color: scheme === "dark" ? 'black' : 'white',
            paddingVertical: 2,
            paddingHorizontal: 4,
            marginRight: 4
        },
        text: {
            width: 200,
            fontWeight: 'bold',
            color: colors.text
        },
        title: {
            fontWeight: 'bold',
            color: colors.text
        },
        date: {
            backgroundColor: '#FF9671',
            width: 200,
            color: 'white',
            paddingVertical: 2,
            paddingHorizontal: 4,
            marginRight: 4
        }

    })
    return (
        <View style={styles.card}>
            <Image source={{ uri: article.urlToImage }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.text}>
                    <Text style={styles.source}>Source</Text>
                    {article.source.name}</Text>
                <Text style={styles.text}>
                    {article.title}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.date}>
                        {getParsedDate(article.publishedAt)}
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default NewsCard
