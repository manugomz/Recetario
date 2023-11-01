const fetchApi = async(url) => {
    try {
        let res =await fetch(url);
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        return json;
    } catch (error) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `error: ${error.message}`;
    }  
}