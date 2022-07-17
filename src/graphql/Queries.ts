import { gql } from "@apollo/client";

export const GET_ALL_STUDENTS = gql`
    query getAllStudents{
        getAllStudents {
            id
            name
            email
            cpf
        }
    }
`;

export const GET_BY_NAME = gql`
    query getByName($name: String!){
        getByName (name: $name) {
            id
            name
            email
            cpf
        }
    }
`;