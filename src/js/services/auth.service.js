import axios from '../plugins/axios';

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export async function regist(
    email, password, nickname, first_name,
    last_name, phone, gender_orientation, country, city,
    date_of_birth_day, date_of_birth_month, date_of_birth_year
) {
    try {
        const response = await axios.post(
            `/auth/signup`,
            JSON.stringify({
                email,
                password,
                nickname,
                first_name,
                last_name,
                phone,
                gender_orientation,
                city,
                country,
                date_of_birth_day,
                date_of_birth_month,
                date_of_birth_year
            }),
        );

        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}
export async function login(email, password) {
    try {
        const response = await axios.post(
            `/auth/login`,
            JSON.stringify({ email, password }),
        );

        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}