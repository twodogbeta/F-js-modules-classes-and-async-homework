import "node-fetch";
export const getPoetry = async () => {
    return fetch("https://v1.jinrishici.com/all.json", { method: "Get" })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return [data.origin, data.author, data.content];
        });
};