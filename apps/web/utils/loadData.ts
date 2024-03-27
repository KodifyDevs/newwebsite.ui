// src/utils/loadData.ts
import { gql } from '@apollo/client';
import { getClient } from '../lib/client';

export async function loadData() {
    const { data } = await getClient().query({
        query: gql`
      query{
        posts{
            data{
              attributes{
                title,
                slug,
                summary,
                information,
                author{
                    data{
                        attributes{
                            first_name,
                            last_name
                        }
                    }     
                }
            }
        }
    } 
}
    `
    });
    
    
     console.log(data.posts.data);;
}
