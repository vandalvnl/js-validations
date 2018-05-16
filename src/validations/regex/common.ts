module.exports = {
	email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	username: /^[a-z_\-0-9]{1,64}$/,
	password: /^[a-zA-Z_\-0-9()"'!@#$%&*+=\\]{1,256}$/,
	rfcLink: /^(http(|s):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
	cellphoneGeneric: /^(\+\d{3}|0\d{2}|\d{2})(| )(\d){1,3}( |)(\d){1,5}(| )(\d){1,4}(|$| )(\d){1,4}$/,
	monetary: /^[A-Za-z]{1,3}\$(| )[0-9,.]{1,99}($|,|.)\d{1,99}$/,
	ipv4: /^(((1\d|[1-9]?)\d|2([0-4]\d|5[0-5]))\.){3}((1\d|[1-9]?)\d|2([0-4]\d|5[0-5]))$/,
	ipv6: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d)\.){3,3}(25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d)\.){3,3}(25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d))$/,
	dayMonthYear: /^(0[1-9]|(1|2)\d|3[01])(\/|-| )(0[1-9]|1[012])(\/|-| )(19|20)\d{2}$/,
	monthDayYear: /^(0[1-9]|1[012])(\/|-| )(0[1-9]|(1|2)\d|3[01])(\/|-| )(19|20)\d{2}$/,
	dayMonthYearWithMonthValidation: /^(((0[1-9]|1\d|2\d|3[01])(\/|-| )(0[13578]|1[02])|(0[1-9]|1\d|2\d|30)(\/|-| )(0[469]|11))|(0[1-9]|1\d|2[0-9])(\/|-| )((|0)2))(\/|-| )(19|20)\d{2}$/,
	monthDayYearWithMonthValidation: /^((0?2\/(0[1-9]|(1|2)\d|))|(0[13578]|1[02])\/(0[1-9]|(1|2)\d|30)|(0[469]|11)\/(0[1-9]|(1|2)\d|3[01]))\/(19|20)\d{2}$/,
	uuid: /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/,
	md5: /^[a-f0-9]{32}$/,
	sha1: /^[a-f0-9]{40}$/,
	timestampsJs: /^[A-Z][a-z]{2} [A-Z][a-z]{2} (0[1-9]|(1|2)\d|3[01]) (19|20)\d{2} ((0|1)\d|2[0-3])(:[0-5]\d){2} GMT(-|\+)(0\d|1[0-2])(00|30) \((-|\+)(0\d|1[0-2])\)/,
	timestampsNode: /(19|20)\d{2}(-\d{2}){2}T(0[1-9]|1\d|2[0-4])(:(0[1-9]|[1-5]\d)){2}.\d{3}Z/,
	creditCard: /(\d{4}(| )){3}\d{4}/,
	yes: RegExp('(yes|sim|y|s)', 'gi'),
	no: RegExp('(n(a|ã)o|no|n)', 'gi'),
};