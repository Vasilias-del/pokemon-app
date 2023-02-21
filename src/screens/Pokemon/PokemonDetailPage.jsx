import { useEffect, useLayoutEffect } from 'react';
import _ from 'lodash';
import ContentWrapper from '../../components/ContentWrapper';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../../redux/reducers/pokemonSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../components/styles/styles';

export default function PokemonDetailPage({ route, navigation }) {
  const { name } = route.params.pokemon

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: _.capitalize(name)
    });
  }, [navigation]);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchPokemon({ pokemonName: name }));

    return () => controller.abort();
  }, []);

  if(pokemon.loading) {
    return (
      <ContentWrapper>
        <View
          style={styles.loading}
        >
          <ActivityIndicator size='large'/>
        </View>
      </ContentWrapper>
    );
  }

  if(pokemon.error) {
    return (
      <ContentWrapper>
        <Text>Error!</Text>
      </ContentWrapper>
    );
  }

  return (
    <>
      {pokemon.data ? (
        <>
          <ContentWrapper>
              <View 
                style={[
                  {
                    alignItems: 'center', 
                    marginTop: '20%', 
                    width: '100%'
                  }
                ]}>
                <View>
                  <Text 
                    style={[
                      {fontSize: 40 }
                      ]}
                    >
                    {_.capitalize(pokemon.data.name)}
                  </Text>
                  <View 
                    style={[
                      {
                        marginBottom: '5%', 
                        flexDirection: 'row', 
                      }
                    ]}
                  >
                    {pokemon.data.types.map(({ type, slot }) => (
                      <Text
                        key={slot}
                        style={styles.round}
                      >
                        {type.name}
                      </Text>
                    ))}
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.artworkImg}
                    source={{ uri: pokemon.data.sprites.other['official-artwork'].front_default }}
                  />
                </View>
                <View style={[{
                  flexDirection: 'row', 
                  alignItems: 'center'
                }]}>
                  <View 
                    style={[
                      styles.round,
                      {
                        flexDirection: 'row', 
                        alignItems: 'center'
                      }
                    ]}
                  >
                    <Text>{pokemon.data.height}M</Text>
                    <Icon name='human-male-height-variant'/>
                  </View>
                  <View 
                    style={[
                      styles.round,
                      {
                        flexDirection: 'row',
                        alignItems: 'center'
                      }
                    ]}
                  >
                    <Text>{pokemon.data.weight}KG</Text>
                    <Icon name='weight'/>
                  </View>
                </View>
              </View>
              <View 
                style={[
                  {
                    marginLeft: '10%', 
                    marginTop: '10%'
                  }
                ]}
              >
                <Text 
                  style={[
                    styles.textTitle, 
                    {fontSize: 25}
                  ]}
                >
                  About
                </Text>
                <Text 
                  style={[
                    {
                      fontStyle: 'italic', 
                      fontSize: 12
                    }
                  ]}
                >
                  {pokemon.species.flavor_text_entries[0].flavor_text}
                </Text>
              </View>
          </ContentWrapper>
        </>
      ) : <></>}
    </>
  )
}