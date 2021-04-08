
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const connection = mysql.createConnection({
	host: '192.185.2.183',
	database: 'kennethv_logininfo',
	user: 'kennethv_kvwavey',
	password: 'Firekicks1!',
	port: '3306',
	JWT_SECERT: 'abc123',
	JWT_EXPIRES_IN: '90d',
	JWT_COOKIE_EXPIRES: '90'
});

exports.login = async (req,res) => {
	try {
		const { username, psw } = req.body;

		if( !username || !psw ) {
			return res.status(400).render('login', {
				message: "Please provide a username and password"
			})
		}

		connection.query('SELECT * FROM signup_info WHERE username = ?', [username], async(error, resuts) => {

			if ( !results || !(await bcrypt.compare(psw, results[0].psw)) ) {
				res.status(401).render('login', {
					message: "Email or Password is incorrect"
				});
			} else {
				const id = results[0].id;

				const sessionid = jwt.sign( { id: id}, process.env.JWT_SECERT, {
					expiresIn: process.env.JWT_EXPIRES_IN
				});

				const cookieOptions = {
					expires: new Date(
						Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60
					),
					httpOnly: true
				}

				res.cookie('jwt', sessionid, cookieOptions);
				res.status(200).redirect("/");
			} 
		})
	}catch (error){
		console.log("Error");
	}
}


exports.signup = (req,res) => {

	const { fname, lname, email, username, psw, psw_repeat, bday, gender, eshoe, eshoe2, eshoe3, offers } = req.body;

	connection.query("SELECT username FROM signup_info WHERE username = ?", [username], (error, results) => {
		if(error) {
			console.log(error);
		}

		if(results.length > 0) {
			//alert("User Name is being used redirecting to registration")
			return res.render('signup', {
				message: 'That username is already in use'

			});
		} else if ( psw !== psw_repeat) {
			return res.render('signup', {
				message: 'Passwords do not match'
			});
		}

		async function run() {
    	// Your async code here
    	const hashedPassword = await bcrypt.hash(psw, 8);
		}
		run();
		
		connection.query('INSERT into signup_info SET ?', {fname: fname, lname: lname, email: email, username: username, 
			psw: hasedPassword, psw_repeat: psw_repeat, bday: bday, gender: gender, eshoe: eshoe, eshoe2: eshoe2, eshoe3: 
			eshoe3, offers: offers }, (error, results) => {
			if (error) {
				console.log(error);
			} else {
			  	console.log(results);
				return res.render('signup', {
					message: 'User registered'
				})
			}
		})
	});
}