import { gql } from '@apollo/client';

export const POST_QUERY = gql`
 query {
    posts {
      data {
        attributes {
          title,
          slug,
          summary,
          information,
          author {
            data {
              attributes {
                first_name,
                last_name
              }
            }     
          }
        }
      }
    }
 }
`;
