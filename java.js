<script>
function validate() {
	var result=true;
	var e=document.getElementsByTagName("E-mail")[0].value;

	var atindex=e.indexOf('@');
	var dotindex=e.lastIndexOf('.');
	if (atindex<1 || dotindex>=e.length-2 || dotindex-atindex<3) 
		result=false;
	return(result);
}
</script>