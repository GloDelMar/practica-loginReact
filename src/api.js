const API_URL = "https://retobackendglo.onrender.com"

export function loginUser(email, password) {
   return fetch(`${API_URL}/auth/login`, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({ email, password })
   })
   .then(response => {
       if (!response.ok) {
           throw new Error('Credenciales incorrectas')
       }
       return response.json()
   })
   .then(data => {
       
       localStorage.setItem('token', data.token)
       return data;
   })
}

export function createUser(name) {
    return fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al crear usuario')
        }
        return response.json()
    })
    .then(data => {
        return data;
    });
 }
 
