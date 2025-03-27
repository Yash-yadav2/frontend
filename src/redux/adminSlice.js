import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

// 🔹 Fetch Users (Admin)
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get("/admin/users");
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || "Error fetching users");
    }
});

// 🔹 Update User Role
export const updateUserRole = createAsyncThunk("admin/updateUserRole", async ({ id, role }, { rejectWithValue }) => {
    try {
        const res = await axios.put(`/admin/users/${id}`, { role });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || "Error updating user");
    }
});

// 🔹 Delete User
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`/admin/users/${id}`);
        return id;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || "Error deleting user");
    }
});

const adminSlice = createSlice({
    name: "admin",
    initialState: { users: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => { state.loading = true; })
            .addCase(fetchUsers.fulfilled, (state, action) => { state.loading = false; state.users = action.payload; })
            .addCase(fetchUsers.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

            .addCase(updateUserRole.fulfilled, (state, action) => {
                state.users = state.users.map((user) => (user._id === action.payload.user._id ? action.payload.user : user));
            })

            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user._id !== action.payload);
            });
    }
});

export default adminSlice.reducer;
