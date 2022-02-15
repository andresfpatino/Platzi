import config from "./.config";

const get = async url => {
    const res = await fetch(`${url}`, {
        headers: {
            Authorization: config.liveLinkCredentials,
        },
    });

    const resJson = await res.json();

    return resJson;

};

export default {
    get, 
};