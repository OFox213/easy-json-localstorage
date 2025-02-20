var getJsonData = function(root, key){
    var textJson = localStorage.getItem(root);
    var json;
    if(textJson){
        json = JSON.parse(textJson);
    } else {
        json = {};
    }
   return json[key];
}

var getBoolean = function(root, key, defaultValue){
    var textJson = localStorage.getItem(root);
    var json;
    if(textJson){
        json = JSON.parse(textJson);
    } else {
        json = {};
    }
    if(json[key] == null) {
        return defaultValue;
    } else {
        return json[key];
    }
}

var setJson = function(root, key, data){
    var textJson = localStorage.getItem(root);
    var json;
    if(textJson){
        json = JSON.parse(textJson);
    } else {
        json = {};
    }
   
    json[key] = data;
    localStorage.setItem(root, JSON.stringify(json));
}

export { getJsonData, setJson, getBoolean }