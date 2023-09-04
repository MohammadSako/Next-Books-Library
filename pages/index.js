import { MongoClient } from "mongodb";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { wordActions } from "../store/word-Slice";
import SearchPage from "./searchPage";
import React from "react";

const HomePage = (props) => {
  const dispatch = useDispatch();
  dispatch(wordActions.addWords(props.data));
  dispatch(wordActions.spinnerHandle(false));

  return (
    <Fragment>
      <Head>
        <title>مكتبة شوكت شحالتوغ</title>
        <meta name="Shawkat Library" content="Shawkat Library" />
      </Head>
      <SearchPage />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sakodatabase:EYmcsgXd4txjPb9L@cluster1.ksjs9y2.mongodb.net/shawkatData?retryWrites=true&w=majority"
  );
  const db = client.db();
  const shawkatDataCollection = db.collection("data");
  const datas = await shawkatDataCollection.find().toArray();
  client.close();
  return {
    props: {
      data: datas.map((books) => ({
        bName: books.bName,
        bWriter: books.bWriter,
        Parts: books.Parts,
        PrintNum: books.PrintNum,
        PrintYear: books.PrintYear,
        Publisher: books.Publisher,
        Cover: books.Cover,
        Library: books.Library,
        Shelf: books.Shelf,
        bNum: books.bNum,
        Notes: books.Notes,
        About: books.About,
        id: books._id.toString(),
      })),
    },
  };
}

export default React.memo(HomePage);
