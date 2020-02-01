/* var canvas=document.getElementById('cans');
var ctx = canvas.getContext('2d');
ctx.fillStyle='red'; */
//ctx.fillRect(100,50, 150, 75);
//ctx.fillRect(x,y, width, height); 3/3 колонки ряд

var elem=document.querySelector('#elem');
createTable(elem, 5,5);


function createTable(parent, cols, rows)
{
		var table = document.createElement('table');
		var browserType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'		
		var m=1,n=1;
		
		let trs=[[],[]];
		let trs1=[[],[]];
		let limon=[[],[]];
		
		
		for(var i=0;i<rows;i++)
		{
			var tr = document.createElement('tr');
			for(var j=0;j<cols;j++)
			{
				
				var td = document.createElement('td');					
				td.className='td'+i*rows+j;
				m=Math.round( Math.random() * rows*3) ;
				cell=document.createTextNode(m);
				td.appendChild(cell);
				trs[[i],[j]] = td;
				
				limon[[i],[j]]=trs[[i],[j]];
				
			
				if(trs[[j],[i]].innerHTML != trs[[i],[j]].innerHTML)
				{
						trs[[j],[i]] = limon[[i],[j]];
						document.write(n++ + '<br>' + i+'.'+j+')'+trs[[i],[j]].innerHTML+' ; '+ j+'.'+i+')'+trs[[j],[i]].innerHTML+'<br>');
						//td.removeChild(cell);
						m=String(limon[[i],[j]].innerHTML);
						trs[[i],[j]].innerHTML='i)';// если значение стоит фиксированное, то размерность не меняется, иначе скачет
						trs[[i],[j]].innerHTML=i+'.'+j+')';// если значение стоит фиксированное, то размерность не меняется, иначе скачет
						//cel=document.createTextNode(trs[[i],[j]]);
						td.appendChild(cell);
						//td.removeChild(cell);//
						//cell=document.createTextNode(trs[[j],[i]].innerHTML);
				}
				
				else{trs[[j],[i]].innerHTML=''};
			//alert(browserType.length);
			 tr.appendChild(td);
			}
		table.appendChild(tr);
		}
	parent.appendChild(table);
}

var tds=document.querySelectorAll('td');
for(var i=0;i<tds.length;i++){
	tds[i].addEventListener('click', function func(){
	
		var input = document.createElement('input');
		
		input.value=this.innerHTML;
		this.innerHTML='';
		this.appendChild(input);
		var td=this;
		input.addEventListener('blur',function(){
			td.innerHTML = this.value;
			td.addEventListener('click', func);
		});
		
		this.removeEventListener('click',func);
		});
}