import Urls from "../../urls";

export const getUserList = () =>
    fetch(Urls.getUserList).
        then(response => response.json()).
        catch(error => console.log(error));

export const updatedUserPost = (data) =>
    fetch(Urls.updatedPost, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).
        then(response => response.json()).
        catch(error => console.log(error));