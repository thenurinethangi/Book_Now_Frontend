import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUserData } from "../../services/user/authService";

export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getCurrentUserData();
            console.log('user', res.data.data);
            return res.data.data;
        } catch (e) {
            return rejectWithValue(null);
        }
    }
);

interface AuthState {
    user: any;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.loading = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.user = null;
                state.loading = false;
            });
    },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
