import React, {useEffect} from 'react';
import {FlatList, ListRenderItem, Text, StyleSheet, View} from "react-native";
import {CardPackType} from "../../../api/api";
import {height, width} from '../../constants/constants';
import {useAppDispatch, useAppSelector} from "../../../bll/hooks";
import {getPacksTC} from "../../../bll/packs/packs-reducer";

export const Packs = () => {
    const params = useAppSelector(state => state.packs.params);
    const cardsPacks = useAppSelector(state => state.packs.cardPacks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPacksTC());
    }, [dispatch, params.sortPacks, params.user_id, params.packName, params.min, params.max, params.pageCount]);


    const render: ListRenderItem<CardPackType> = ({item}) => {
        return <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.cardsCount}>{item.cardsCount}</Text>
        </View>
    }
    return (

            <FlatList data={cardsPacks}
                      renderItem={render}
                      numColumns={3}
                      keyExtractor={(item) => item._id}
                      showsVerticalScrollIndicator={false}
            />


    );
};

const styles = StyleSheet.create({

    item: {
        width: width / 3 - 10,
        height: height / 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(89,202,249,0.32)",
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: width / 50,


    },
    name: {
        color: "#000000",
    },
    cardsCount: {
        color: "#3030e8",
    },

});
