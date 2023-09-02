import { Fragment, useCallback } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import EditBookForm from "../../../components/books/EditBookForm";
import { useDispatch, useSelector } from "react-redux";
import { wordActions } from "../../../store/word-Slice";

const BooksEdit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.word.editData);
  const editBookHandler = useCallback(
    async (e) => {
      dispatch(wordActions.spinnerHandle(true));
      const response = await fetch("/api/update-book", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      router.push("/");
    },
    [router, dispatch]
  );

  const deleteBookHandler = useCallback(
    async (e) => {
      dispatch(wordActions.spinnerHandle(true));
      const response = await fetch("/api/delete-book", {
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
        <title>تعديل كتاب: {data.bName}</title>
        <meta name="description" content={data.bWriter} />
      </Head>
      <EditBookForm
        bName={data.bName}
        bWriter={data.bWriter}
        Parts={data.Parts}
        PrintNum={data.PrintNum}
        PrintYear={data.PrintYear}
        Publisher={data.Publisher}
        Cover={data.Cover}
        Library={data.Library}
        Shelf={data.Shelf}
        bNum={data.bNum}
        Notes={data.Notes}
        About={data.About}
        id={data.id}
        onEditBook={editBookHandler}
        onDeleteBook={deleteBookHandler}
      />
    </Fragment>
  );
};
export default BooksEdit;