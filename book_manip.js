var natural = require('natural');
//var response = "BIBEK DEBROY\nASHLEY J. TELLIS\nREECE TREVOR\n,INDIA\nBACON\nAN ACTION AGENDA\nFOR REFORM\nForeword by RATAN N TATA\n";

exports.reform=function(c)
{
	tokenizer = new natural.TreebankWordTokenizer();
	var x = tokenizer.tokenize(c);
	x = x.join(" ");
	x=x.replace("&","AND");

	return x;
}