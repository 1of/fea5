// Напишите функцию, которая возвращает массив, очищенный от пустых значений, не меняя исходный

function clean() {
	var arr = [];
	arr = arguments[0];

for (let key of arr) {

	for (var i = 0; i < arr.length; i++) {

if (Array.isArray(arr[i]) && arr[i].length == 0) { arr.splice(i, 1);}
if (arr[i]==="") { arr.splice(i, 1);}
if ( arr[i] !== null && arr[i] !==0 && arr[i] !=='0' && Object.keys(arr[i]) == 0 ) {arr.splice(i, 1);}

	}
 }
	return arr
}
 var data = [0, '0', '', null, {}, [], {}, {}, [1, 2, 3], {}];
 console.log( clean(data) ); // [0, '0', null, [1, 2, 3]]


// Напишите функцию-аналог splice, не используя никакие методы массива.
function splice(arr, num, del) {

}
splice();
var arr = [1, 2, 4, 3];
console.log( splice(arr, 2, 1) ); // [4]
// console.log(arr); // [1, 2, 3]
// splice(arr, 2, 0, 100, 200, 300);
// console.log(arr); // [1, 2, 100, 200, 300, 3]


// Напишите функцию, которая возвращает сумму всех чисел, переданных в качестве аргументов, число которых не ограничено. Функция работает только с числами (включая строковые). Если какой-то из параметров - массив, то к сумме добавляется также сумма значений этого массива (если какое-либо из значений этого массива также является массивом, то к результату добавляется также и сумма его значений, и так далее).
function getSum() {

    var arr = [].slice.apply(arguments);

    function sumRecursion(arr) {

        return arr.reduce(function(sum, num) {
            if ( isNumber(num) ) sum += +num;
            else if ( Array.isArray(num) ) sum += sumRecursion(num);
            return sum;
        }, 0); 
    }
    return sumRecursion(arr);
}
function isNumber(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}
var sum = getSum(1, '1', 'one', [2, '2', 'two']);
console.log( sum );
//  var sum = getSum(1, '1', 'one', [2, '2', 'two']);
// console.log( sum ); // 6

// Напишите функцию, которая рисует в указанном HTML-контейнере диаграмму из данных, представляющих из себя массив объектов: каждый объект имеет свойства color и value, означающих соответственно цвет столбца и его высоту.
function buildDiagram(data, id) {
idsl = id.slice(1);
$( ".container" ).append( "<div id=" + idsl +"" + "></div>" );
$( "#"+ idsl +"" ).css({"display": "flex", "align-items": "flex-end", 
	"justify-content": "center",
	"border": "2px solid red",
	"height": "500px",
});

for (var i = 0; i < data.length; i++) {
// color = data[i].color;
// val = data[i].value;
$( "#"+ idsl +"" ).append( "<div></div>" );

$("#"+ idsl + " div:nth-child(" + (i+1) +")").css({"background-color": ""+ data[i].color +"", 
	"display": "inline-block",
	"height": ""+data[i].value+"%",
	"width": "100px",
	"margin-top": "10px"
});

$("#"+ idsl +" div:nth-child(" + (i+1) +")").html("<p>"+data[i].value+"%</p>");
$( 'div p' ).css({"position": "relative", 
	"display": "inline-block",
	"margin-left": "40px",
	"top": "-40px"
});
}

}
var data1 = [ {color: 'red', value: 71}, {color: 'green', value: 30}, {color: '#0f0', value: 58}, {color: '#4E2107', value: 20}, {color: '#022107', value: 90}, ];
buildDiagram(data1, '#diagram1');


// Напишите функцию, которая изображает в теге HTML картинку по данным, представляющим из себя двумерный массив закрашенных точек.
function paint(points) {
	// var white = $( ".container2" ).append( "<div style=\"background-color: white; widht:10px; height:10px\">1</div>" );
	// var black = $( ".container2" ).append( "<div style=\"background-color: black; widht:10px; height:10px\">1</div>" );
	$( ".container2" ).append( "<table></table>" );


	function findMaxArr() {
	for (var i = 0, sum2 = 0; i < points.length; i++) { 
		$( ".container2 table" ).append( "<tr></tr>" );
		var sum =  Math.max.apply(null, points[i]);
		if (sum > sum2) sum2 = sum; 
		}
			return sum2
	}

var max_html_td = findMaxArr(); // какое максимальное число в массиве points, столько будет и ячеек <td>
for (var k = 0; k < max_html_td; k++) {

	$( ".container2 table tr" ).append( "<td></td>" );

}

for (var i = 0; i < points.length; i++) {
	// console.log ( points[i] );
	// $( ".container2 table" ).append( "<tr></tr>" );s
	for (var j = 0; j < points[i].length; j++) {
	// $( ".container2 table tr:nth-child(" + i + ")" ).append( "<td></td>" );	
	$( ".container2 td" ).css({"width": "15px", 
	"height": "15px",
	"border": "1px dotted #000"});
	$( ".container2 table tr:nth-child(" + (i+1) + ") td:nth-child(" + points[i][j] + ")" ).css({"background": "black"});
	}
}
}

var points = [
	[3, 4, 5],
	[2, 3, 9, 16],
	[1, 2, 9, 10, 15, 16],
	[1, 2, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16],	
	[1, 2, 4, 5, 6, 7, 9, 12, 13, 16],	
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16],	
	[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16],	
	[2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15],
	[2, 3, 4, 7, 8, 12, 13],
	[2, 3, 7, 8],	
	[2, 3, 4, 5, 7, 8, 9],	
	[2, 3, 4, 5, 7, 8, 9]
];
paint(points);