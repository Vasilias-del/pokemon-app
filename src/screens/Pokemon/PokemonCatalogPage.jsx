import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCatalog } from "../../redux/reducers/catalogSlice";
import axios from 'axios';
import ContentWrapper from "../../components/ContentWrapper";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import PokeCard from "./PokeCard";
import styles from "../../components/styles/styles";

export default function PokemonCatalogPage({ navigation }) {
  const dispatch = useDispatch();
  const catalog = useSelector((state) => state.catalog)
  const [pokemonDetail, setPokemonDetail] = useState();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchCatalog({}));

    return () => controller.abort();
  }, []);

  const onFetchingCatalog = (isNext) => {
    dispatch(fetchCatalog({
      url: isNext ? catalog.nextUrl : catalog.previousUrl,
      pageNumber: isNext ? 1 : -1
    }));
  };

  // useEffect(() => {
  //   fetchData()
  //     .catch(console.error);
  // }, [catalog.pokemonList]);

  // const fetchData = async() => await Promise.all(
  //   catalog.pokemonList.map(async (element) => {
  //     if(element?.url) {
  //       const result = await axios.get(element.url);
  //       // console.log("POKEDEX DETAIL", result)
  //       setPokemonDetail(result.data.id)
  //     }
  //   }),
  // );

  const renderItem = useCallback(({ item: pokemon }) => {
    return (
      <PokeCard
        pokemon={pokemon}
        onPress={() => navigation.navigate('Detail', { pokemon })}/>
    );
  }, []);

  const footerItem = useCallback(() => {
    return (
      <View
        style={[
          styles.footerBlock,
          // {left: '40%'}
        ]}
      >
        <TouchableOpacity
          disabled={!catalog.previousUrl}
          onPress={() => onFetchingCatalog(false)}
        >
          <View style={styles.border}>
            <Text>
              {'Previous'}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.textTitle]}>{catalog.page}</Text>
        <TouchableOpacity
          disabled={!catalog.nextUrl}
          onPress={() => onFetchingCatalog(true)}>
            <View style={styles.border}>
              <Text>
                {'Next'}
              </Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }, [catalog]);

  return (
    <>
      <ContentWrapper>
        <FlatList
          data={catalog.pokemonList}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 12 }}
          ListFooterComponent={() => footerItem()}
        />
      </ContentWrapper>
    </>
  )
}