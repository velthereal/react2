import { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
	// збереження даних з форми
	const [formData, setFormData] = useState({
		email: '',
		userName: '',
		password: '',
		age: '',
	});
	// збереження повідомлень для помилки
	const [error, setError] = useState('');

	// функція для обробки змін в полях форми
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// оновлення даних форми з додаванням нових
		// взяти всі ключі та значення об'єкта formData і скопіювати їх до нового об'єкта
		// ...formData дозволяє взяти всі існуючі дані з formData (який містить email, userName, password, age) та створити копію цього об'єкта. Після чого, [name]: value додає новий ключ-значення до цієї копії. В цьому випадку, якщо, наприклад, поле email було змінене, цей оператор використовується для оновлення formData з новим значенням email, залишаючи решту даних без змін.
		setFormData({ ...formData, [name]: value });
	}
	// функція для обробки подання форми
	const handleSubmit = (e) => {
		e.preventDefault();
		// перевірка на наявність пустих полів
		for(const key in formData) {
			if(formData[key].trim() === ''){
				setError(`Please fill in the ${key} field`);
				return;
			}
		}
		console.log(formData);
		// очищення даних форми
		setFormData({
			email: '',
			userName: '',
			password: '',
			age: '',
		});
		setError('');
	}

	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<h2>Registartion</h2>
				<label htmlFor="">Email</label>
				<input 
					type="email" 
					name='email' 
					value={formData.email}
					onChange={handleInputChange} />
				<label htmlFor="">User Name</label>
				<input 
					type="text"
					name='userName'
					value={formData.userName}
					onChange={handleInputChange} />
				<label htmlFor="">Password</label>
				<input 
					type="password"
					name='password'
					value={formData.password}
					onChange={handleInputChange} />
				<label htmlFor="">Age</label>
				<input 
					type="number"
					name='age'
					value={formData.age}
					onChange={handleInputChange} />
				<button type='submit'>Sign Up</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
}

export default RegistrationForm;