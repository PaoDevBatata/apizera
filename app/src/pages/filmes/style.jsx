import styled from 'styled-components';

const Bodyy = styled.body`
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: auto;
}

.topheader {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 999;
    background-color: rgba(0,0,0, 0.7);

    .hamburguer {
        .barra1 {
            background-color: #ffffff;
            width: 25px;
            height: 2px;
            margin: 5px;
            border-radius: 15px;
        }
        .barra2 {
            background-color: #ffffff;
            width: 25px;
            height: 2px;
            margin: 5px;
            border-radius: 15px;
        }
        .barra3 {
            background-color: #ffffff;
            width: 25px;
            height: 2px;
            margin: 5px;
            border-radius: 15px;
        }
    }
}

.padding {
    padding-top: 7vmax;
}

h1 {
    position: relative;
    font-size: 20px;
    color: #cecece;
    padding: 20px;
    padding-left: 35px
}
h2 {
    position: relative;
    font-size: 2vmax;
    color: #cecece;
    margin-left: 4vmax;
    margin-bottom: 2vmax;
}
`;

export default Bodyy;