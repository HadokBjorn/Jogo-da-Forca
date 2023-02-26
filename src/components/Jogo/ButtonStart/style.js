import styled from "styled-components";

const ButtonContainer = styled.div`

    width: 50%;
    height: 400px;
    display: flex;
    align-items: end;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 53px;
    
    button {
        width: 200px;
        height: 60px;

        background: #27AE60;
        border-radius: 8px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #FFFFFF;
    }
`

export default ButtonContainer;