import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {PageCtn} from "../styles/containers";
import {MainHeader, SubHeader} from "../styles/headers";
import {StartBtn} from "../styles/buttons";

const HomeWrapper = styled(PageCtn)`{}`
const HomeH1 = styled(MainHeader)`{
  margin-bottom: 30px;
}`;
const HomeH2 = styled(SubHeader)`{
  margin-top: 100px;
  margin-bottom: 30px;
}`;
const FeatureCtn = styled.div`{
  border: 1px solid black;
  width: 400px; 
  height: 200px;
  display: flex;
  justify-content: center;
  padding: 50px;
}`;
const FeatureHeader = styled.h2`{
  font-size: 2rem;
}`;
const MainCopy = styled.p`{
    font-size: 1.5rem;
}`;
const Features = styled.div`{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}`;
const BtnsCtn = styled.div`{
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}`;
const HomeBtn = styled(StartBtn)`{
    margin-top: 100px;
}`;

const Home = () => {
    return (
        <HomeWrapper>
            <HomeH1> CREATE or <span role="img" aria-label="skull and bones emoji" >☠️</span> </HomeH1>
            <MainCopy>ADHDers with big goals: You won't succeed unless you start. I've tried medicines, routines, lists, and plans...
            </MainCopy>
            <HomeH2>Urgency Works.</HomeH2>
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