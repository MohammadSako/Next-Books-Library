import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect } from "react";
import NewBookForm from "../../components/books/NewBookForm";
import { useDispatch } from "react-redux";
import { wordActions } from "../../store/word-Slice";

function NewBookPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wordActions.spinnerHandle(false));
  }, [dispatch]);

  const addBookHandler = useCallback(
    async (e) => {
      dispatch(wordActions.spinnerHandle(true));
      const response = await fetch("/api/new-book", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      router.push("/");
    },
    [router, dispatch]
  );

  return (
    <Fragment>
      <Head>
        <title>قم باضافة كتاب جديد</title>
        <meta name="description" content="Shawkat Library" />
      </Head>
      <h3>قم باضافة كتاب جديد</h3>
      <NewBookForm onAddBook={addBookHandler} />
    </Fragment>
  );
}

export default NewBookPage;
