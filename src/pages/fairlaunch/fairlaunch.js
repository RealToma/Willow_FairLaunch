import { Box } from "@mui/material";
import styled from "styled-components";
import backInside01 from "../../assets/images/background/backInside01.png";
import Countdown from "react-countdown";
import CountdownFairLaunch from "../../components/Countdown/FairLaunch";

const FairLaunch = () => {

  return (
    <StyledComponent>
      <SectionFairLaunch>
        <TextTitle>Willow Fairlaunch Is Live</TextTitle>
        <SectionCountdown>
          <Countdown date={Date.now() + 259200 * 1000} renderer={CountdownFairLaunch} />
        </SectionCountdown>
      </SectionFairLaunch>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SectionFairLaunch = styled(Box)`
  display: flex;
  width: 390px;
  background-image: url(${backInside01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 50px 30px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  height: 600px;
  margin-top: 70px;
`;

const TextTitle = styled(Box)`
  color: #fff;

  text-align: center;
  font-family: Play;
  font-size: 27.681px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SectionCountdown = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default FairLaunch;
