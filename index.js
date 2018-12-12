function createDiv(className){
    var div = document.createElement('div');
    div.className = className;
    return div;
}

function createRow(){
    var con = $('con');
    var row = createDiv('row');
    var arr = createCell();

    con.appendChild(row);

    for(var i=0 ; i<4 ;i++){
        row.appendChild(createDiv(arr[i]));
    }

    if(con.firstChild == null){
        con.appendChild(row);
    }else{
        con.insertBefore(row, con.firstChild);
    }


}

function delrow(){
    var con = $('con');
    if(con.childNodes.length == 6){
        con.removeChild(con.lastChild);
    }
}

//随机将4个白块中的一个变成黑块
function createCell(){
    var temp = ['cell','cell','cell','cell'];
    var i = Math.floor(Math.random()*4)

    temp[i]='cell black';
    return temp;
}
