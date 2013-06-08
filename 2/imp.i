exp_class = class {
	init: {
		Print("init, called\n");
	},
	num: 5554,
	say: {
		Print("The number in the class is: ", num);
	},
	set: {|n|
		num = n;
	}
};

exp_fun = {
	Print("coming from exported function\n");
	return new(exp_class);
};
