import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid is for generating ids
const initialState = {
    todos: [{id: 1, text: "First todo"}]
}
export const todoSlice = createSlice({
    name: 'todo', // defined property as per redux toolkit module
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                // id: Date.now(),
                id: nanoid(), // better method
                // text: action.payload.text // .text is property we define, also when key == val, we can access directly 
                text: action.payload // It gives .text property
            }
            state.todos.push(todo);
        }, // state: gives access to initial/ present state | action: eg removal ki time ids chaiye, vo ids action se milengi ie data milega basically
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload // or action.payload.id
            })
        },
        updateTodo: (state, action) => {
            for (const elem of state.todos) {
                if(elem.id === action.payload.id){
                    elem.text = action.payload.text;
                }
            } // bc aise hi hoga, shi hai
        }
    }
    
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions; // export individual reducers
export default todoSlice.reducer;