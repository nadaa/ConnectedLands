generateBoard=function(b){
	var inb=0;
	var r;
	//var board=[];
	for(var i=0;i<4;i++){
		var tempArr=[];
		for(var j=0;j<5;j++){
				r=Math.floor(Math.random()*20);
				temp=b[inb];
				b[inb]=b[r];
				b[r]=temp;
				tempArr.push(b[inb]);
				inb++;
		}
		board.push(tempArr);
	}
	//return board;
}

// put the board matrix on the html elements
fillBoard=function(board){
		var x=0;
		for(var i=0;i<board.length;i++){
			for(var j=0;j<board[0].length;j++){
				cells[x].innerText=board[i][j];
				x++;
			}
		}
}

//define visited matrix 
 initializeVisited =function(){
			//var visited=[];
			for(var i=0;i<4;i++){
				var v=[];
				for(var j=0;j<5;j++){
					v.push(false);
				}
				visited.push(v);
			}
			//return  visited;
		}

 isValid=function(i,j){
	if(i>=0 && i<board.length && j>=0 && j<board[0].length){
		if (board[i][j]===1){
			return true;
		}
	}
	return false;
}

//search neighboring connected cells with 1 recursively
 dfsearch=function(x,y,color){
 	if (visited[x][y]){
		return
	}
	visited[x][y]=true;
	colorCell(x,y,color)
	for(var i=0;i<offset.length;i++){
		for(var j=0;j<offset.length;j++){
			if(offset[i]===0 && offset[j]===0){
				continue
			}
			if(isValid(x+offset[i],y+offset[j])){
				dfsearch(x+offset[i],y+offset[j],color);
			}
		}
	}
}

colorCell=function(i,j,color){
		var cellIndex=i*cols+j;
		cells[cellIndex].style.backgroundColor=color;
} 

 countConnectedLands=function(){
		var count=0;
		var c=['red','blue','green','yellow','orange']
		var s=0;
		for(var i=0;i<board.length;i++){
			for(var j=0;j<board[0].length;j++){
				if(!visited[i][j] && board[i][j]===1){
					count++;
					colorCell(i,j,c[s]);
					dfsearch(i,j,c[s])
					s++;
					if(s>3){
						s=0;
					}
				}
			}
		}
		return count;
}


var board=[];
var visited=[];
var offset=[-1,0,1];
//the board is fixed here 4*5
var rows=4;
var cols=5;
var x=[1,0,0,0,0,1,1,1,1,0];
var y=[0,1,1,0,1,1,0,0,0,0]
generateBoard(x.concat(y));
//get all the cells 
var cells=document.querySelectorAll('.cell');
initializeVisited() 
fillBoard(board);
console.log(countConnectedLands()); // print number of connected lands

