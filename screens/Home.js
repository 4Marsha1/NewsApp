import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useState } from 'react'
import { fetchNews, fetchNewsByFilter } from '../redux/actions/news'
import { _retrieveData } from '../utils'
import NewsCard from '../components/NewsCard'
import MyModal from '../components/Modal'

const Home = ({ navigation }) => {
    const news = useSelector((state) => state.newsReducer.news)
    const dispatch = useDispatch();

    const [topic, setTopic] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    useEffect(() => {
        if (!_retrieveData('email')) {
            setIsLoggedIn(_retrieveData('email'));
            return;
        }
        dispatch(fetchNews());
    }, []);

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

    const reRoute = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            {
                !isLoggedIn ? <MyModal state={isLoggedIn} reRoute={reRoute} /> :
                    <>
                        <TextInput style={styles.input_1} placeholder='Topic' value={topic} onChangeText={(text) => setTopic(text)} />
                        <View style={styles.form}>
                            <TextInput style={styles.input_2} placeholder='From (YYYY-MM-DD)' value={fromDate} onChangeText={(text) => setFromDate(text)} />
                            <TextInput style={styles.input_2} placeholder='To (YYYY-MM-DD)' value={toDate} onChangeText={(text) => setToDate(text)} />
                        </View>
                        <TouchableOpacity style={styles.form_btn} onPress={() => fetchNewsByTopic()}>
                            <Text style={styles.form_btn_text}>Search</Text>
                        </TouchableOpacity>
                        <View style={styles.cardContainer}>
                            {
                                buildNewsCards()
                            }
                        </View></>
            }

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
    input_1: {
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginVertical: 4,
        marginHorizontal: 'auto',
        outline: 'none',
        borderBottomColor: '#E57B89',
        borderBottomWidth: 2
    },
    input_2: {
        width: '40%',
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