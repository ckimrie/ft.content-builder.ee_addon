<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
* Installer
*/
class Content_builder_upd
{

	
	var $version	= 1.1;
	
	function Content_builder_upd()
	{
		$this->EE =& get_instance();
	}
	
	/**
	 * Installer function
	 *
	 * @return bool
	 * @author Christopher Imrie
	 **/
	function install()
	{
		$this->EE->load->dbforge();
		
		$data = array(
			'module_name'			=>	'Content_builder',
			'module_version'		=>	$this->version,
			'has_cp_backend'		=>	'n',
			'has_publish_fields'	=>	'n'
		);
		$this->EE->db->insert('modules', $data);
		
		return TRUE;
	}
	
	/**
	 * Updates the module from previous version
	 *
	 * @return void
	 * @author Christopher Imrie
	 **/
	function update($current = '')
	{
		if ($current == $this->version)
		{
			return FALSE;
		}

		return TRUE;
	}
	
	/**
	 * Uninstalls the module
	 *
	 * @return bool
	 * @author Christopher Imrie
	 **/
	function uninstall()
	{
		$this->EE->load->dbforge();
		
		$this->EE->db->where('module_name', 'Remote_file_browser');
		$this->EE->db->delete('modules');
		
		return TRUE;
	}
	
}
