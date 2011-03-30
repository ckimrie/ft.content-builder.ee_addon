var cb_fields = new Array();

dojo.require('dijit.Editor');
dojo.require('dijit.form.TextBox');

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
			cb_fields[i].cb_field.append(editor());
			
			//Add the controls
			var a = controls();
			for(j in a){
				cb_fields[i].cb_field.after(a[j]);
			}
			
		}
		
	}
	
	
	function codeblock(){
		var h = $('<h5/>').text('Code');
		var t = $("<div />").addClass('codeblock').attr('contentEditable', 'true')
		.data('type', 'code')
		.attr('rows', '6');
		
		var div = $('<div />').addClass('cb_field').data('type', 'codeblock')
	
		.append(t);
		
		return div;
	}
	
	function editor(){
		var h = $('<h5/>').text('Rich Text');
		var div = $("<div />").addClass('cb_field').data('type', 'editor');
		var a = $("<div />")
		var b = new dijit.Editor({}, a[0]);
		
		div.append(a)
		
		return div;
	}
	
	function input(){
		var h = $('<h5/>').text('Text Input');
		var input =  $("<input type='text' />");
		var b = $("<div />").data('type', 'input').addClass('cb_field').append(input);
		
		new dijit.form.TextBox({
			placeHolder : 'New heading'
		}, input[0]);
		
		return b;
	}
	
	function controls(){
		var data = [];
		
		var a  = $('<a href="#">Add New Textarea</a>');
		a.click(function(){
			//Add new textarea on click
			editor().appendTo(cb_fields[i].cb_field);
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
		
		//Separator
		data.push($("<span> | </span>"));
		
		var c  = $('<a href="#">Add New Code Block</a>');
		c.click(function(){
			//Add new text input
			codeblock().appendTo(cb_fields[i].cb_field);
			return false;
		})
		data.push(c);
		
		return data;
	}
});