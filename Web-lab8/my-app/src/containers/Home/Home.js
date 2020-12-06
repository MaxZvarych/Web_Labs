import React, { useState } from "react";
import {
  Wrapper,
  Heading,
  HeadingTextButton,
  HomeButton,
  HomeImage,
  CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";
import heading from "../../Icons/heading1.jpg";
import security from "../../Icons/background2.jpg";

export const data = [
  {
    id: 1,
    title: "Apple Inc. Security",
    text:
      "Apple Securities is a premier security service provider. We provide security services to customers in Singapore",
    image: security,
    price: 715,
    owner: "Wolfram",
    riskLevel: "HIGH",
    biddingTrend: "ASCENDING",
  },
  {
    id: 2,
    title: "Security",
    text:
      "Apple Securities is a premier security service provider. We provide security services to customers in Singapore.",
    image: security,
    price: 540,
    owner: "Golfram",
    riskLevel: "ULTRAHIGH",
    biddingTrend: "ASCENDING",
  },
  {
    id: 3,
    title: "Security",
    text:
      "Apple Securities is a premier security service provider. We provide security services to customers in Singapore",
    image: security,
    price: 1610,
    owner: "Olfram",
    riskLevel: "LOW",
    biddingTrend: "ASCENDING",
  },
  {
    id: 4,
    title: "Security",
    text:
      "Apple Securities is a premier security service provider. We provide security services to customers in Singapore",
    image: security,
    price: 610,
    owner: "Wolfram",
    riskLevel: "LOW",
    biddingTrend: "ASCENDING",
  },
  {
    id: 5,
    title: "Security",
    text:
      "Apple Securities is a premier security service provider. We provide security services to customers in Singapore",
    image: security,
    price: 1610,
    owner: "Golfram",
    riskLevel: "MEDIUM",
    biddingTrend: "ASCENDING",
  },
  {
    id: 6,
    title: "Security",
    text:
      "Apple Securities is a premier security service provider. We provide security services to customers in Singapore",
    image: security,
    price: 1610,
    owner: "Wolfram",
    riskLevel: "MEDIUM",
    biddingTrend: "ASCENDING",
  },
];

const Home = () => {
  const [securities, setSecurities] = useState(data.slice(0, 3));
  const showSecurities = () => {
    setSecurities(data);
    setClicked(true);
  };
  const hideSecurities = () => {
    setSecurities(data.slice(0, 3));
    setClicked(false);
  };
  const [isClicked, setClicked] = useState(false);
  return (
    <Wrapper>
      <Heading>
        <HeadingTextButton>
          <p>
            The New York Stock Exchange (sometimes referred to as "The Big
            Board") provides a means for buyers and sellers to trade shares of
            stock in companies registered for public trading. The NYSE is open
            for trading Monday through Friday from 9:30 am – 4:00 pm ET, with
            the exception of holidays declared by the Exchange in advance. The
            NYSE trades in a continuous auction format, where traders can
            execute stock transactions on behalf of investors. They will gather
            around the appropriate post where a specialist broker, who is
            employed by a NYSE member firm (that is, he/she is not an employee
            of the New York Stock Exchange), acts as an auctioneer in an open
            outcry auction market environment to bring buyers and sellers
            together and to manage the actual auction. They do on occasion
            (approximately 10% of the time) facilitate the trades by committing
            their own capital and as a matter of course disseminate information
            to the crowd that helps to bring buyers and sellers together. The
            auction process moved toward automation in 1995 through the use of
            wireless hand held computers (HHC). The system enabled traders to
            receive and execute orders electronically via wireless transmission.
          </p>
        </HeadingTextButton>
        <HomeImage
          src={heading}
          alt="Logo_image"
          width="300px"
          height="300px"
        />
      </Heading>
      <CardWrapper>
        {securities.map(
          ({
            title,
            text,
            image,
            price,
            owner,
            riskLevel,
            biddingTrend,
            id,
          }) => (
            <CardItem
              imageSrc={image}
              title={title}
              text={text}
              price={price}
              id={id}
              owner={owner}
              riskLevel={riskLevel}
              biddingTrend={biddingTrend}
            />
          )
        )}
      </CardWrapper>
      {!isClicked ? (
        <HomeButton onClick={showSecurities}>Show more!</HomeButton>
      ) : (
        <HomeButton onClick={hideSecurities}>Show less!</HomeButton>
      )}
    </Wrapper>
  );
};

export default Home;
