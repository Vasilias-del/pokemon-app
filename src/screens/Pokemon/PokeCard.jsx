import { useEffect, useState, useCallback, Fragment } from "react";
import { TouchableOpacity, Image, Text, View, ActivityIndicator  } from "react-native";
import axios from 'axios';
import Card from "../../components/Card";
import styles from "../../components/styles/styles";
import _ from 'lodash';
import ContentWrapper from "../../components/ContentWrapper";

export default function PokeCard({ pokemon, onPress }) { 
  const [pokemonDetail, setPokemonDetail] = useState();

  useEffect(() => {
    fetchData()
      .catch(console.error);
  }, [pokemon]);

  const fetchData = async() => {
    if(pokemon?.url) {
      const result = await axios.get(pokemon.url);
      setPokemonDetail(result.data);
    }
  };

  if(!pokemonDetail) {
    return (
      <ContentWrapper>
        <Card>
          <View
            style={[styles.block]}
          >
            <ActivityIndicator size='small'/>
          </View>
        </Card>
      </ContentWrapper>
    );
  }

  return (
      <Card>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPress}
          style={styles.cardPokemon}
        >
          <View
            style={styles.block}
          >
            <View>
              <Image
                style={styles.blockImg}
                source={{ uri: pokemonDetail.sprites.front_default }}
              />
            </View>
            <Text
              style={[
                styles.textCenter, 
                styles.textTitle
              ]}
            >
              #{pokemonDetail.id}
            </Text>
          </View>

          <View
            style={[
              { width: '70%'}
            ]}
          >
            <Text
              style={[
                styles.textTitle,
                { 
                  fontSize: 16, 
                  marginLeft: 20 
                }
              ]}
            >
              {_.capitalize(pokemonDetail.name)}
            </Text>
            <View
              style={[
                {
                  marginLeft: 20, 
                  flexDirection: 'row'
                },
              ]}
            >
              {pokemonDetail.types.map(({ type, slot }) => (
                <Text
                  key={slot}
                  style={[styles.round]}
                >
                  {type.name}
                </Text>
              ))}
              
            </View>
          </View>
        </TouchableOpacity>
      </Card>
  );
}