import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`{
    height: 90vh;
    padding-top: 10vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}`
const MainHeader = styled.h1`{
  font-size: 5rem;
  margin-bottom: 30px;
}`;
const SubHeader = styled.h2`{
  font-size: 3rem;
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
const StartBtn = styled.button`{
    width: 200px;
    height: 50px;
    font-size: 1.5rem;
    margin-top: 100px;
}`;

const Home = () => {
    return (
        <HomeWrapper>
            <MainHeader> CREATE or <span role="img" aria-label="skull and bones emoji" >☠️</span> </MainHeader>
            <MainCopy>ADHDers with big goals: You won't succeed unless you start. I've tried medicines, routines, lists, and plans... so many plans.
            </MainCopy>
            <SubHeader>Urgency Works.</SubHeader>
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
                <StartBtn>Create</StartBtn>
                <StartBtn>Learn More</StartBtn>
            </BtnsCtn>
         </HomeWrapper>
    );
}

export default Home;