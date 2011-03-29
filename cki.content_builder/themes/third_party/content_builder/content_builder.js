var cb_fields = new Array();
dojo.require('dijit.Editor');
$(document).ready(function(){
	
	
	
	//Fetch all instances
	$('div.content_builder').each(function(){
		
		cb_fields.push({
			'id' 			: $(this).attr('data-target'),
			'input_field'	: $('#' + $(this).attr('data-target')),
			'cb_field'		: $(this)
		});
	});
	
	if(cb_fields.length > 0){
		cb_init();
	}
	
	
	function cb_init(){
		
		for(i in cb_fields){
			
			//Add the starter textarea
			cb_fields[i].cb_field.append(textarea());
			
			//Add the controls
			var a = controls();
			for(j in a){
				cb_fields[i].cb_field.after(a[j]);
			}
			
		}
		
	}
	
	
	
	
	function textarea(){
		var div = $("<div />").css('height:', '300px')
		var a = new dijit.Editor({}, div[0]);
		
		return div;
	}
	
	function input(){
		var a = $('<input />')
		a.attr('type', 'text')
		
		return a;
	}
	
	function controls(){
		var data = [];
		
		var a  = $('<a href="#">Add New Textarea</a>');
		a.click(function(){
			//Add new textarea on click
			textarea().appendTo(cb_fields[i].cb_field);
			return false;
		})
		data.push(a);
		
		//Separator
		data.push($("<span> | </span>"));
		
		var b  = $('<a href="#">Add New Input</a>');
		b.click(function(){
			//Add new text input
			input().appendTo(cb_fields[i].cb_field);
			return false;
		})
		data.push(b);
		
		return data;
	}
});