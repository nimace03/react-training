import Urls from "../../urls";

export const getPostList = () =>
    fetch(Urls.getAllPost).
        then(response => response.json()).
        catch(error => console.log(error));

export const getSelectedPost = (id) =>
    fetch(`${Urls.getAllPost}/${id}`).
        then(response => response.json()).
        catch(error => console.log(error));