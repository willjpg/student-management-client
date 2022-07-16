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

