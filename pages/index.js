import MyResponsiveRadar from '../components/charts/myResponsiveRadar'
import MyResponsiveLine from '../components/charts/myResponsiveLine';
import radarData from '../data/radarData.json';
import lineData from '../data/lineData.json';
import styled from 'styled-components';


const StyledContainer = styled.div`
    height: 50vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto
`;

const StyledH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    size: 15rem;
    margin-top: 50px;
`

function HomePage() {
    return (
    <StyledContainer >
        <StyledH1>Radar Chart</StyledH1>
        <MyResponsiveRadar data={radarData}/>
        <StyledH1>Line Chart</StyledH1>
        <MyResponsiveLine data={lineData}/>
    </StyledContainer>
    )
  }
  
  export default HomePage