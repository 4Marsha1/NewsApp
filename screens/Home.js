import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useState } from 'react'
import { fetchNews, fetchNewsByFilter } from '../redux/actions/news'
import { _retrieveData } from '../utils'
import NewsCard from '../components/NewsCard'

const Home = ({ navigation }) => {
    const news = useSelector((state) => state.newsReducer.news)
    const dispatch = useDispatch();

    const [topic, setTopic] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");


    useEffect(() => {
        dispatch(fetchNews());
        _retrieveData('email');
    }, []);
    console.log(news)
    const fetchNewsByTopic = () => {
        dispatch(fetchNewsByFilter(topic, fromDate, toDate))
    }

    const buildNewsCards = () => {
        if (news && news.articles && news.articles.length > 0) {
            return news.articles.map((article, idx) => {
                return <TouchableOpacity key={idx} onPress={() => navigation.navigate("Details", { article: article })}>
                    <NewsCard article={article} />
                </TouchableOpacity>
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Topic' value={topic} onChangeText={(text) => setTopic(text)} />
                <TextInput style={styles.input} placeholder='From' value={fromDate} onChangeText={(text) => setFromDate(text)} />
                <TextInput style={styles.input} placeholder='To' value={toDate} onChangeText={(text) => setToDate(text)} />
            </View>
            <TouchableOpacity style={styles.form_btn} onPress={() => fetchNewsByTopic()}>
                <Text style={styles.form_btn_text}>Search</Text>
            </TouchableOpacity>
            <View style={styles.cardContainer}>
                {
                    buildNewsCards()
                }
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    input: {
        width: '30%',
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginVertical: 4,
        marginHorizontal: 4,
        outline: 'none',
        borderBottomColor: '#E57B89',
        borderBottomWidth: 2
    },
    form_btn: {
        width: '25%',
        backgroundColor: '#E57B89',
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    form_btn_text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})