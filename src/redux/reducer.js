import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import {useState} from "react";

export const initialState = {
    //state hooks replace class component state variables
    dishes: DISHES,
    comments: COMMENTS,
    promos: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action) => {
    return state
}