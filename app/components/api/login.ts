// import { useState } from 'react';

// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (!response.ok) {
//             // Handle error
//             console.error("Login failed");
//         } else {
//             const data = await response.json();
//             console.log(data);
//             // Handle success, such as saving the token and redirecting the user
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;
