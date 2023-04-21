// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { addContact, deleteContact, fetchContacts } from './operations';
// import { logOut } from 'redux/auth/operations';

// // const handleRejected = (state, action) => {
// //   state.isLoading = false;
// //   state.error = action.payload;
// // };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//     showModal: false,
//     deleteId: 0,
//     isAddFormOpen: false,
//   },
//   reducers: {
//     toggleModal: (state, action) => {
//       state.showModal = !state.showModal;
//       state.deleteId = action.payload;
//     },
//     openAddForm: state => {
//       state.isAddFormOpen = !state.isAddFormOpen;
//     },
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//         state.isAddFormOpen = false;
//       })
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.items = [];
//         state.error = null;
//         state.isLoading = false;
//       })
//       // Group the same code in addMatcher
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected
//         ),
//         (state, action) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         }
//       ),
// });

// export const contactsReducer = contactsSlice.reducer;
// export const { toggleModal, openAddForm } = contactsSlice.actions;
