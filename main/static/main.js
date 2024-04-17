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

function locate(){``
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var floor=document.getElementById("floor").value;
    var map=["floor_2","floor_1"];

    fetch("http://127.0.0.1:8000/nav/"+from+"/"+to)
    .then((res)=>(res.json()))
    .then((json) =>  {
        if(json.message=='ok'){

            var path=json.path;
            console.log(map[floor-1]);  console.log(from);console.log(to);console.log(path)    
        

            document.getElementById("map_route").innerHTML="<image height='100%' width='100%' href='/static/"+map[floor-1]+".svg'></image>";

            for(let i=0;i<=path.length-2;i++){
               if(path[i][2]==floor-1){
                var x1=Math.round((path[i][0]/300)*100);
                var y1=Math.round((path[i][1]/490)*100);
                var x2=Math.round((path[i+1][0]/300)*100);
                var y2=Math.round((path[i+1][1]/490)*100);

                document.getElementById("map_route").innerHTML+="<line x1='"+x1+"%' y1='"+y1+"%' x2='"+x2+"%' y2='"+y2+"%' style='stroke: blue;stroke-width: 5px;'></line>";
            }
        }
            srol(500,'report')
        }
        else{
            console.log("error")
        }
    })
}
function navigate(from,to,floor){
    
    var map=["floor_2","floor_1"];

    fetch("http://127.0.0.1:8000/nav/"+from+"/"+to)
    .then((res)=>(res.json()))
    .then((json) =>  {
        if(json.message=='ok'){

            var path=json.path;
            console.log(map[floor-1]);  console.log(from);console.log(to);console.log(path)    
        

            document.getElementById("map_route").innerHTML="<image height='100%' width='100%' href='/static/"+map[floor-1]+".svg'></image>";

            for(let i=0;i<=path.length-2;i++){
               if(path[i][2]==floor-1){
                var x1=Math.round((path[i][0]/300)*100);
                var y1=Math.round((path[i][1]/490)*100);
                var x2=Math.round((path[i+1][0]/300)*100);
                var y2=Math.round((path[i+1][1]/490)*100);

                document.getElementById("map_route").innerHTML+="<line x1='"+x1+"%' y1='"+y1+"%' x2='"+x2+"%' y2='"+y2+"%' style='stroke: blue;stroke-width: 5px;'></line>";
            }
        }
            srol(500,'report')
        }
        else{
            console.log("error")
        }
    })
}