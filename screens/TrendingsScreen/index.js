import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { MonoText } from '../../components/StyledText';
import { Container, List, BackgroundList, NameRepositoryContainer, StarButton, ContainerButton } from './styles';

export default function TrendingsScreen() {
  const SEARCH_QUERY = gql`
   query Trendings($query: String!) {
      search(type: REPOSITORY, first: 10, query: $query) {
        edges {
          node {
            ... on Repository {
              name
              description
              owner {
                login
              }
              stargazers {
                totalCount
              }
              forkCount
              languages(first: 1) {
                nodes {
                  name
                }
              }
              url
            }
          }
        }
      }
    }
  `;

  const [query, setQuery] = useState(`language: sort:stars-desc`);
  const { error, data, loading } = useQuery(SEARCH_QUERY, {
    variables : { query },
  });


  if(loading) return  <ActivityIndicator animating color={Colors.red800} size="large" />

  return (
    <Container>
      <List
        data={data.search.edges}
        keyExtractor={edge => edge.node.name}
        renderItem={({ item }) => {
          console.log(item);
          return (
          <BackgroundList>
              <NameRepositoryContainer>

              <MonoText>
                <FontAwesome5
                  name="code"
                  size={18}
                />
                 &nbsp; {item.node.owner.login}/{item.node.name}
              </MonoText>
              <StarButton>
              <MonoText>
              <FontAwesome5
                name="star"
                size={18}
              />
                &nbsp;
                Star
              </MonoText>
              </StarButton>
            </NameRepositoryContainer>
          </BackgroundList>
          )}
        }
      />
    </Container>
  );
}

TrendingsScreen.navigationOptions = {
  title: 'Trendings',
  headerStyle: {
    backgroundColor: '#6002ee'
 },
 headerTintColor: '#fff',

};
