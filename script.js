function httpRequest(method, url, callback, headers, body) {

    const xml = new XMLHttpRequest();
    xml.open(method, url);
    xml.onload = () => {
        let data = xml.response;
        callback(data);
    }
    for (key in headers) {
        xml.setRequestHeader(key, headers[key]);
    }
    body ? xml.send(body) : xml.send();
}
