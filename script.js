function firstWord(s) {
  // your code here
	str = str.trim();
	const idx=s.indexOf(' ');
	if(idx==-1){
		return s;
	}
	return s.substring(0,idx);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
