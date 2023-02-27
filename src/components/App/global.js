import styled from "styled-components";

const Div = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-buttonStart{
        margin-top: 59px;
        flex-direction: row;
    }
    .button-container{
        width: 664px;
        height: 91px;

        display: flex;
        flex-flow: wrap;
        column-gap: 12px;
        row-gap: 11px;

        margin-top: 70.5px;
        margin-bottom: 150px;
    }
    button:disabled{
        background: #9FAAB5;
        color: #798A9F;
    }
`

export default Div;