import {gql} from "@apollo/client";

export const GET_NEWS_LIST = gql`
    query getNewsList{
        news{
            id
		    name
            descriptionShort
  	        dateOfPublication
  	        author
  	        image
        }
    }
`;

export const GET_NEWS_FOR_MAIN_PAGE = gql`
    query getNewsList{
        news{
            id
            name,
            image
        }
    }
`;

export const GET_NEWS_BY_ID = gql`
    query getNewsById($id:ID!){
        oneNews(id:$id){
            id
		    name
            descriptionFull
  	        dateOfPublication
  	        author
  	        image
        }
    }
`;

