import { Box } from "@mui/material";
import styled from "styled-components";
import backInside01 from "../../assets/images/background/backInside01.png";
import backInside02 from "../../assets/images/background/backInside02.png";
import Countdown from "react-countdown";
import CountdownFairLaunch from "../../components/Countdown/FairLaunch";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import copy from "copy-to-clipboard";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";

const FairLaunch = () => {
  const [progress, setProgress] = useState(10);
  const [flagCopiedAddress, setFlagCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    setFlagCopiedAddress(true);
    copy(process.env.REACT_APP_ADDRESS_PRESALE);
    setTimeout(() => {
      setFlagCopiedAddress(false);
    }, 1000);
  };

  return (
    <StyledComponent>
      <SectionFairLaunch>
        <TextTitle>Willow Fairlaunch Is Live</TextTitle>
        <SectionCountdown>
          <Countdown
            now={() => Date.now()}
            date={Date.now() + 300000000}
            renderer={CountdownFairLaunch}
          />
        </SectionCountdown>
        <SectionSaleProgress>
          <CustomProgress
            variant="determinate"
            value={progress}
          ></CustomProgress>
          <SectionTextProgress>
            <TextSale>Softcap: 100 SOL</TextSale>
            <TextSale>Raised: 0.00 SOL</TextSale>
          </SectionTextProgress>
        </SectionSaleProgress>
        <SectionDetail>
          <TextDeatil width={"100%"} textAlign={"center"}>
            Currently: 1 WILL = 0.000000002 SOL
          </TextDeatil>
        </SectionDetail>
        <SectionDetail>
          <TextDeatil width={"100%"} textAlign={"center"}>
            MIN: 0.1 SOL{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}MAX: 200 SOL
          </TextDeatil>
        </SectionDetail>
        <SectionDetail flexDirection={"column"}>
          <TextDeatil>Send SOL to :</TextDeatil>
          <TextDeatil>
            <span>{process.env.REACT_APP_ADDRESS_PRESALE}</span>
            <div style={{ display: "inline-block" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div />
                <IconCopyAddress
                  onClick={() => {
                    handleCopyAddress();
                  }}
                >
                  {!flagCopiedAddress ? <HiClipboard /> : <HiClipboardCheck />}
                </IconCopyAddress>
              </div>
            </div>
          </TextDeatil>
        </SectionDetail>
        <TextDetailBottom>
          Your purchased Willow Token will be proportionally distributed based
          on the SOL raised during the Fairlaunch, constituting 30% of the total
          Willow Token supply. Your acquired WILL Token will be airdropped to
          the SOL wallet address you used during the Fairlaunch.
        </TextDetailBottom>
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
  padding: 50px 23px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  margin-top: 70px;

  @media (max-width: 430px) {
    background-image: url(${backInside02});
  }
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

const SectionSaleProgress = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const CustomProgress = styled(LinearProgress)`
  display: flex;
  width: 100%;
  color: white;
  height: 8px !important;
  border-radius: 8px;
  background-color: white !important;

  .MuiLinearProgress-bar {
    background-color: #243dfe;
    border-radius: 8px;
  }
`;

const SectionTextProgress = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const TextSale = styled(Box)`
  color: #fff;

  font-family: Play;
  font-size: 13.84px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SectionDetail = styled(Box)`
  display: flex;
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid #5e9efe;
  margin-top: 20px;
`;

const TextDeatil = styled(Box)`
  word-break: break-all;
  color: #fff;

  font-family: Play;
  font-size: 18.454px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const IconCopyAddress = styled.span`
  color: #fff;
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  margin-top: -15px;

  &:hover {
    filter: drop-shadow(0px 0px 2px white);
  }
`;

const TextDetailBottom = styled(Box)`
  display: flex;
  margin-top: 35px;
  /* margin-bottom: 20px; */
  color: #fff;
  font-family: Play;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default FairLaunch;
