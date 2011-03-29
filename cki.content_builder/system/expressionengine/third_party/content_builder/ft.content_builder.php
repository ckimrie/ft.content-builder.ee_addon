<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');



	class Content_builder_ft extends EE_Fieldtype 
	{

		var $info 			= array(
								'name'		=> 'Content Builder',
								'version'	=> '0.1'
		);
		
		
		
		function Content_builder_ft()
		{
			parent::EE_Fieldtype();
			

		}

		
		
		
		function display_field($data)
		{
			$this->EE->cp->add_to_head('<script src="'. $this->EE->config->item('theme_folder_url') .'third_party/content_builder/dojo/dojo.js" type="text/javascript" ></script>');
			
			$this->EE->cp->add_to_head('<link href="' . $this->EE->config->item('theme_folder_url') .'third_party/content_builder/content_builder.css" type="text/css" rel="stylesheet" />');
			$this->EE->cp->add_to_head('<script src="' . $this->EE->config->item('theme_folder_url') .'third_party/content_builder/content_builder.js?t=' .  time() .'" type="text/javascript" ></script>');
			
			$this->EE->cp->add_to_head('<link rel="stylesheet" type="text/css" href="'. $this->EE->config->item('theme_folder_url') .'third_party/content_builder/dojo/resources/dojo.css">');
			$this->EE->cp->add_to_head('<link rel="stylesheet" type="text/css" href="'. $this->EE->config->item('theme_folder_url') .'third_party/content_builder/dijit/themes/dijit.css">');
			$this->EE->cp->add_to_head('<link rel="stylesheet" type="text/css" href="'. $this->EE->config->item('theme_folder_url') .'third_party/content_builder/dijit/themes/nihilo/nihilo.css">');

			
			$input = form_textarea(array(
				'name' => 'field_id_' . $this->field_id,
				'id' => 'field_id_' . $this->field_id,
				'style' => 'display:none;'
			));
			
			return $input . "<div class='content_builder' data-target='" . 'field_id_' . $this->field_id . "'></div>";
		}



		function pre_process($data)
		{
			return $data;
		}
		
		
		function replace_tag($data, $params = '', $tagdata = '')
		{
			
		}
		

		function display_global_settings()
		{
			
		}
		
		
		
		function save_global_settings()
		{
			
		}
		
	
		
		function display_settings($data)
		{		
			
			
		}
		
		function save_settings($data)
		{
			
			return array_merge($this->settings, $_POST);
		}
		//END
		
		function install()
		{				
			
		}
		
		function uninstall()
		{
			return true;
		}

}