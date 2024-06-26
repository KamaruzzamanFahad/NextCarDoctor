
const GetData = async (url) => {
    const res = (await fetch(url)).json()
    return res;
}
export default GetData;
