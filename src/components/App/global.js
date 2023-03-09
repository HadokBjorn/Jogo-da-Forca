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
    @media(max-width: 767px) {
        .image-buttonStart{
            margin-top: 59px;
            flex-direction: column;
        }
        .image-buttonStart > div{
            width: 100%;
            height: auto;
            margin: 0;
        }
        .image-buttonStart img{
            object-fit: cover;
            width: 80%;
            margin-bottom: 15px;
        }
        .button-container{
            width: 90%;
            height: 91px;

            display: flex;
            flex-flow: wrap;
            column-gap: 10px;
            row-gap: 10px;

            margin-top: 70.5px;
            margin-bottom: 150px;
        }
    }
`

export default Div;