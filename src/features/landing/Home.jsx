import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {PageCtn} from "../../styles/containers";
import {Subh1} from "../../styles/headers";
import {StartBtn} from "../../styles/buttons";

//<editor-fold desc="Styled Components">
const HomeWrapper = styled(PageCtn)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const HomeH2 = styled(Subh1)`
  border: solid purple 1px;
`;
const FeatureCtn = styled.div`
  border: 1px solid black;
  padding: 50px;
  width: 400px; 
  height: 200px;
  
  display: flex;
  justify-content: center;
`;
const FeatureHeader = styled.h2`
  font-size: 2rem;
  border: solid yellow 1px;
  height: min-content;
`;
const MainCopy = styled.p`
  box-sizing: border-box;
  border: 1px solid blue;
  padding: 20px;
  font-size: 1.5rem;
`;
const Features = styled.div`
    width: 90%;
    border: solid green 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const BtnsCtn = styled.div`
  width: 70%;
  height: min-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: solid orange 1px;
  
`;
const HomeBtn = styled(StartBtn)`
    //margin-top: 100px;
`;
//</editor-fold>

const Home = () => {
    return (
        <HomeWrapper>
            <MainCopy>ADHDers with big goals: You won't succeed unless you start. I've tried medicines, routines, lists, and plans...
            </MainCopy>
            <HomeH2>
                Urgency Works.
            </HomeH2>
            <Features>
                <FeatureCtn>
                    <FeatureHeader>Fund your Goal</FeatureHeader>
                </FeatureCtn>
                <FeatureCtn>
                    <FeatureHeader>Complete Atomic Tasks</FeatureHeader>
                </FeatureCtn>
                <FeatureCtn>
                    <FeatureHeader>Get Your Money Back</FeatureHeader>
                </FeatureCtn>
            </Features>
            <BtnsCtn>
                <HomeBtn>
                    <Link to={"/todos"}>Create</Link>
                </HomeBtn>
                <HomeBtn>Learn More</HomeBtn>
            </BtnsCtn>
         </HomeWrapper>
    );
}

export default Home;