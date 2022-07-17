import { gql } from "@apollo/client";

export const CREATE_STUDENT = gql`

    mutation createStudent($name: String! $email: String! $cpf: String!){
        createStudent(name: $name email: $email cpf: $cpf) {
            id 
            name 
            email 
            cpf
        }
    }
`;

export const DELETE_STUDENT = gql`
    mutation deleteStudent($id: ID!){
        deleteStudent(id: $id) {
            message
        }
    }
`;

