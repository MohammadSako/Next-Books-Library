import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "word",
  initialState: {
    words: [],
    result: [],
    textLength: "",
    editBackDrop: "",
    deleteBackDrop: "",
    editData: "",
    spinner: "",
  },
  reducers: {
    addWords(state, action) {
      const newWord = action.payload;
      state.words = newWord;
    },
    addEditData(state, action) {
      const data = action.payload;
      state.editData = data;
    },
    editConfirmClose(state, action) {
      const confirm = action.payload;
      state.editBackDrop = confirm;
    },
    deleteConfirmClose(state, action) {
      const confirm = action.payload;
      state.deleteBackDrop = confirm;
    },
    spinnerHandle(state, action) {
      const data = action.payload;
      state.spinner = data;
    },

    wordsFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 2) {
        state.textLength = enteredWords.length;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.bName?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = enteredWords.length;
      }
    },
    writerFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 2) {
        state.textLength = enteredWords.length;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.bWriter?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = enteredWords.length;
      }
    },
    publisherFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 2) {
        state.textLength = enteredWords.length;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.Publisher?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = enteredWords.length;
      }
    },
    noteFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 1) {
        state.textLength = enteredWords.length;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.Notes?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = enteredWords.length;
      }
    },
    partFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 0) {
        state.textLength = 3;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.Parts?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = 0;
      }
    },
    printYearFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 0) {
        state.textLength = 3;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.PrintYear?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = 0;
      }
    },
    printNumFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 0) {
        state.textLength = 3;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.PrintNum?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = 0;
      }
    },
    bookNumFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 0) {
        state.textLength = 3;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.bNum?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = 0;
      }
    },
    shelfNumFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 0) {
        state.textLength = 3;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.Shelf?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = 0;
      }
    },
    libraryNumFilter(state, action) {
      const enteredWords = action.payload;
      if (enteredWords.length > 0) {
        state.textLength = 3;
        state.result = state.words
          .map((user) => user)
          .filter((user) => user.Library?.includes(enteredWords));
      } else if (enteredWords.length === 0) {
        state.textLength = 0;
      }
    },
  },
});
export const wordActions = wordSlice.actions;
export default wordSlice;
