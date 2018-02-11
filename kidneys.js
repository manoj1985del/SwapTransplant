var xmlhttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var xmlhttp;
	//for IE browsers..
	if(window.ActiveXObject)
	{
		try{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e){
			xmlhttp = false;
		}
	}
	//for other browsers
		else{
			try{
				xmlhttp = new  XMLHttpRequest();
			}
			catch(e){
				xmlhttp = false;
			}
		}
		
		if(!xmlhttp){
			alert("can't create object");
		}
		else{
                        alert("object created successfully");
			return xmlhttp;
		}
}

	
	function testmethod(){
	  window.open('thankyou.html', "_SELF");
	}
	
	var okToSubmit = true;
	function validateDuplicateMobile(){
		var mobile = encodeURIComponent(document.getElementById("mobile").value);
		if(mobile == "")
			return true;
		if((xmlhttp.readyState == 0) || (xmlhttp.readyState == 4)){
		var params = "mobile=" + mobile;
		xmlhttp.open("POST", "validate_sign_in.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState==4) 
		{
			if(xmlhttp.status==200) {
				element = document.getElementById("validateMobile");
				var response = xmlhttp.responseText;
				element.innerHTML = response;
				if(response == "This mobile number is already registered with us!!!"){
					okToSubmit = false;
				}
				else
				{
					okToSubmit = true;
				}
										
										
			}
		}
	};
	xmlhttp.send(params);
        		
	}
     else{
			setTimeout('validateDuplicateMobile()', 1000);
	     }
														
			
		
	}
	function processtransplantdetails(){
		if((xmlhttp.readyState == 0) || (xmlhttp.readyState == 4)){
			var mobile = encodeURIComponent(document.getElementById("mobile").value);
			var element = document.getElementById("validateMobile");
			if(mobile ==  ""){
				element.innerHTML = "Please insert a mobile number";
				okToSubmit = false;
			}
			
			
			
			var transplanttype;
			if( document.getElementById("transplanttypekidney").checked){
				transplanttype = "Kidney";
			}
            else{
				transplanttype = "Liver";
			}	
			
			transplanttype = encodeURIComponent(transplanttype);
				
			var email = encodeURIComponent(document.getElementById("email").value);
			element = document.getElementById("validateEmail");
			if(email ==  ""){
				
				element.innerHTML = "Please insert an email.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}				
			var donorname = encodeURIComponent(document.getElementById("donorname").value);
			element = document.getElementById("validatedonarname");  
			if(donorname ==  ""){
				
				element.innerHTML = "Donor name can't be empty.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}
			
			var donorage = encodeURIComponent(document.getElementById("donorage").value);
			element = document.getElementById("validatedonorage");
			if(donorage ==  ""){
				
				element.innerHTML = "Donor age can't be empty.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}
			
			var donorbloodgroup = document.getElementById("donorbg");
			donorbloodgroup = donorbloodgroup.options[donorbloodgroup.selectedIndex].value;

			var genderdonor;
			if( document.getElementById("gendermaledonor").checked){
				genderdonor = "male";
			}
            else{
				genderdonor = "female";
			}	
			
			genderdonor = encodeURIComponent(genderdonor);    
			
			var rxname = encodeURIComponent(document.getElementById("receivername").value);
			element = document.getElementById("validatereceiverName");
			if(rxname ==  ""){
				
				element.innerHTML = "Receiver name can't be empty.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}

			var rxage = encodeURIComponent(document.getElementById("receiverage").value);
			element = document.getElementById("validatereceiverAge");
			if(rxage ==  ""){
				
				element.innerHTML = "Receiver age can't be empty.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}
			var rxbloodgroup = document.getElementById("receiverbg");
			rxbloodgroup = rxbloodgroup.options[rxbloodgroup.selectedIndex].value;

			var genderrx;
			if( document.getElementById("gendermalereceiver").checked){
				genderrx = "male";
			}
            else{
				genderrx = "female";
			}	
			genderrx = encodeURIComponent(genderrx);
			
			var city = encodeURIComponent(document.getElementById("city").value);
			element = document.getElementById("validateCity");
			if(city ==  ""){
				
				element.innerHTML = "city can't be empty.";
				okToSubmit = false;
			}
			else
			{
				element.innerHTML = "";
			}
			
			var state = document.getElementById("statelist");
			state = state.options[state.selectedIndex].value;
			element = document.getElementById("validatestate");
			if(state == ""){
				element.innerHTML = "Please select a state.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}
			
			
			var pincode = encodeURIComponent(document.getElementById("pincode").value);
			 element = document.getElementById("validatePin");
			if(pincode ==  ""){
				element.innerHTML = "Pin Code can't be empty.";
				okToSubmit = false;
			}
			else{
				element.innerHTML = "";
			}
			
			if(okToSubmit == false){
				return false;
			}
				
			
			var params = "transplanttype=" + transplanttype + "&mobile="+ mobile + "&email=" + email + "&donorname=" + donorname + "&donorage=" + donorage
			            +  "&donorbloodgroup="+ donorbloodgroup + "&genderdonor=" + genderdonor + "&rxname=" + rxname + "&rxage=" + rxage
						+ "&rxbloodgroup="+ rxbloodgroup + "&genderrx=" + genderrx + "&city=" + city + "&state=" + state + "&pincode=" + pincode;
			
			xmlhttp.open("POST", "add_new_user.php", true);
			 xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState==4) {
				//alert("status = " + xmlhttp.status);
				if(xmlhttp.status==200){
					window.open('thankyou.html');
					//element = document.getElementById("successmsg");
					//element.innerHTML = "Thank you for Registering with us!!!";
					//element.innerHTML = xmlhttp.responseText;
				}
			}
		}; 

		      
			xmlhttp.send(params);
		
				
		
		}
		else{
			setTimeout('processtransplantdetails()', 1000);
		}
		
	}
	
	function handleServerResponse(){
	//4 means communication with server was successful
	if(xmlhttp.readyState == 4){
		if(xmlhttp.status == 200){
			xmlResponse = xmlhttp.responseXML;
			xmlDocumentElement = xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;
			//alert("messaage = " + message);
			setTimeout('processtransplantdetails()', 1000);
		}
		else
		{
			alert('something went wrong!!!');
		}
	}
}

	



