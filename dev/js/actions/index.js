export const selectUser = (user) => {
    console.log("You clicked on user:", user.first);
    return {
        //this is actually the action
        type: "USER_SELECTED",
        payload: user
    }
};

