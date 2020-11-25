import React from "react";
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
    title: "Security",
    text: "Buy security please",
    image: security,
    price: 715,
  },
  {
    title: "Security",
    text: "Buy security please",
    image: security,
    price: 540,
  },
  {
    title: "Security",
    text: "Buy security please",
    image: security,
    price: 1610,
  },
];

const Home = () => {
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
          <HomeButton>
            <a href="#">Show more!</a>
          </HomeButton>
        </HeadingTextButton>
        <HomeImage
          src={heading}
          alt="Logo_image"
          width="300px"
          height="300px"
        />
      </Heading>
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            imageSrc={image}
            title={title}
            text={text}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Home;
