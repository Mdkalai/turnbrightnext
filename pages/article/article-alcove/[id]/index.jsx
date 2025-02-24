import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { alcoveData } from "@/components/articleAlcove/articleAlcoveData";
import tw from "twin.macro";
import MainSection from "@/components/singleNews/MainSection";

const Container = tw.div`box-border max-w-[1360px] mx-auto min-h-[694px] lg:pt-8`;
const Navigation = tw.div`box-border`;
const NavP = tw.p`font-poppins text-base uppercase font-medium text-[#001436]`;
const Intro = tw.div`box-border lg:mt-8`;
const SquareBox = tw.div`box-border flex items-baseline gap-2`;
const Square = tw.div`box-border w-5 h-5 bg-[#FECB36]`;
const SecondTitle = tw.h3`text-[#001436] uppercase font-medium text-2xl font-poppins m-0`;
const MainTitle = tw.h1`text-[#001436] uppercase font-bold text-5xl font-poppins`;
const HeadDesc = tw.div`box-border lg:mt-5 flex justify-between w-[40%] text-[rgb(0, 20, 54, 0.5)]`;
const Date = tw.p`font-poppins `;
const Author = tw.p`font-poppins `;

function ArticleItem() {
  const router = useRouter();
  const singleArticle =
    // data.find((elt) => elt.id === router.query.id) ||
    alcoveData.find((elt) => elt.id === router.query.id);
  // console.log(singleArticle);
  return (
    <Container>
      <Head>
        <title>{singleArticle?.title}</title>
      </Head>
      <Navigation>
        <NavP>
          You are here : Home / Article / The Article Alcove /
          <strong> {singleArticle?.title}</strong>
        </NavP>
        <Intro>
          <SquareBox>
            <Square />
            <SecondTitle>Jobs & Trainings</SecondTitle>
          </SquareBox>
          <MainTitle>{singleArticle?.title}</MainTitle>
          <HeadDesc>
            <Date> {singleArticle?.date} </Date>
            <Author>By {singleArticle?.author} </Author>
          </HeadDesc>
        </Intro>
        <MainSection singleArticle={singleArticle} />
      </Navigation>
    </Container>
  );
}

export default ArticleItem;
