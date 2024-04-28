function nav(a,b){
    var op=["h","u","a","l"];
    var menu=["home","report","about"];
    

    for(let i=0;i<=op.length-1;i++){
        document.getElementById(op[i]).style.backgroundColor="white";
    }
    for(let i=0;i<=menu.length-1;i++){
        document.getElementById(menu[i]).style.display="none";
    } 
    a.style.backgroundColor="#d9e9ffff";
    document.getElementById(b).style.display="flex";


}

function srol(a,b){
    var home= document.getElementById(b);

    home.scrollLeft=a;
}







function locate(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var map=["ground","floor_1","floor_2"];

    fetch("http://127.0.0.1:8000/nav/"+from+"/"+to)
    .then((res)=>(res.json()))
    .then((json) =>  {
        if(json.message=='ok'){
           
            var path=json.path;
            console.log(path)
for(let j=0;j<=map.length-1;j++){
    document.getElementById(map[j]).style.display='none';
}
            document.getElementById(map[path[0][2]]).style.display='block';
            document.getElementById(map[path[0][2]]).innerHTML="<image height='100%' width='100%' href='/static/"+map[path[0][2]]+".svg'></image>  ";
            

            for(let i=1;i<=path.length-1;i++){
                var x1=100-((path[i-1][1]/445)*100);
                var y1=((path[i-1][0]/768)*100);
                var x2=100-((path[i][1]/445)*100);
                var y2=((path[i][0]/768)*100);

                document.getElementById(map[path[i][2]]).innerHTML+="<line x1='"+x1+"%' y1='"+y1+"%' x2='"+x2+"%' y2='"+y2+"%' stroke-dasharray='5,2' style='stroke: blue;stroke-width: 3px;'></line>";
                if(path[i-1][2]!=path[i][2]){
                    document.getElementById(map[path[i][2]]).innerHTML="<image height='100%' width='100%' href='/static/"+map[path[i][2]]+".svg'></image>  ";
                    document.getElementById(map[path[i-1][2]]).innerHTML+="<circle onclick='switchmap("+path[i][2]+")' r='7' cx='"+(100-((path[i-1][1]/445)*100))+"%' cy='"+(path[i-1][0]/768)*100+"%' fill=red />"
                    document.getElementById(map[path[i][2]]).innerHTML+="<circle onclick='switchmap("+path[i-1][2]+")' r='7' cx='"+(100-((path[i][1]/445)*100))+"%' cy='"+(path[i][0]/768)*100+"%' fill=red />"
                }   
            }
            document.getElementById(map[path[path.length-1][2]]).innerHTML+="<circle r='7' cx='"+(100-((path[path.length-1][1]/445)*100))+"%' cy='"+(path[path.length-1][0]/768)*100+"%' fill=green />"
            document.getElementById(map[path[0][2]]).innerHTML+="<circle r='7' cx='"+(100-((path[0][1]/445)*100))+"%' cy='"+(path[0][0]/768)*100+"%' fill=yellow />"

            srol(500,'report')
        }
        else{
            console.log("error")
        }
    })
}

function switchmap(a){
    var map=["ground","floor_1","floor_2"];

    for(let j=0;j<=map.length-1;j++){
        document.getElementById(map[j]).style.display='none';
    }

    document.getElementById(map[a]).style.display='block';
}

function navigate(from,to){
    
    var map=["ground","floor_1","floor_2"];

    fetch("http://127.0.0.1:8000/nav/"+from+"/"+to)
    .then((res)=>(res.json()))
    .then((json) =>  {
        if(json.message=='ok'){
           
            var path=json.path;
            console.log(path)
for(let j=0;j<=map.length-1;j++){
    document.getElementById(map[j]).style.display='none';
}
            document.getElementById(map[path[0][2]]).style.display='block';
            document.getElementById(map[path[0][2]]).innerHTML="<image height='100%' width='100%' href='/static/"+map[path[0][2]]+".svg'></image>  ";
            

            for(let i=1;i<=path.length-1;i++){
                var x1=100-((path[i-1][1]/445)*100);
                var y1=((path[i-1][0]/768)*100);
                var x2=100-((path[i][1]/445)*100);
                var y2=((path[i][0]/768)*100);

                document.getElementById(map[path[i][2]]).innerHTML+="<line x1='"+x1+"%' y1='"+y1+"%' x2='"+x2+"%' y2='"+y2+"%' stroke-dasharray='5,2' style='stroke: blue;stroke-width: 3px;'></line>";
                if(path[i-1][2]!=path[i][2]){
                    document.getElementById(map[path[i][2]]).innerHTML="<image height='100%' width='100%' href='/static/"+map[path[i][2]]+".svg'></image>  ";
                    document.getElementById(map[path[i-1][2]]).innerHTML+="<circle onclick='switchmap("+path[i][2]+")' r='7' cx='"+(100-((path[i-1][1]/445)*100))+"%' cy='"+(path[i-1][0]/768)*100+"%' fill=red />"
                    document.getElementById(map[path[i][2]]).innerHTML+="<circle onclick='switchmap("+path[i-1][2]+")' r='7' cx='"+(100-((path[i][1]/445)*100))+"%' cy='"+(path[i][0]/768)*100+"%' fill=red />"
                }   
            }
            document.getElementById(map[path[path.length-1][2]]).innerHTML+="<circle r='7' cx='"+(100-((path[path.length-1][1]/445)*100))+"%' cy='"+(path[path.length-1][0]/768)*100+"%' fill=green />"
            document.getElementById(map[path[0][2]]).innerHTML+="<circle r='7' cx='"+(100-((path[0][1]/445)*100))+"%' cy='"+(path[0][0]/768)*100+"%' fill=yellow />"

            srol(500,'report')
        }
        else{
            console.log("error")
        }
    })
}
