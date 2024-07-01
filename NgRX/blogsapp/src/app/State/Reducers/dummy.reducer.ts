import { createAction, createReducer, on } from "@ngrx/store";

interface DummyRI{
    showParagraph:boolean
    dummyData:string
}

const initialState:DummyRI={
    dummyData:'',
    showParagraph:false
}

export const dummyReducer= createReducer(
    initialState,
    on(createAction('Toggle'),(state)=>{
        return{
            ...state,
            showParagraph:!state.showParagraph
        }
    })
)