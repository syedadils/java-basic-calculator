function sum() {
	
    var a = window.mainform.phlabox.value;
        
    var b = window.mainform.dosrabox.value;
    
    var sum= eval(a) + eval(b);
    
    window.mainform.resultbox.value = sum;
}

function subt() {
	
    var a = window.mainform.phlabox.value;
        
    var b = window.mainform.dosrabox.value;
    
    var subt= eval(a) - eval(b);
    
    window.mainform.resultbox.value = subt;
}


function mul() {
	
    var a = window.mainform.phlabox.value;
        
    var b = window.mainform.dosrabox.value;
    
    var mul= eval(a) * eval(b);
    
    window.mainform.resultbox.value = mul;
}


function div() {
	
    var a = window.mainform.phlabox.value;
        
    var b = window.mainform.dosrabox.value;
    
    var div= eval(a) / eval(b);
    
    window.mainform.resultbox.value = div;
}
