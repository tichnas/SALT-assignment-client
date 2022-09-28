import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import authAPI from '../../api/auth';
import Loading from '../Loading';

function Auth() {
  const navigate = useNavigate();

  const [kind, setKind] = useState('login');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (authAPI.isLoggedIn()) navigate('/');
  }, [navigate]);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      if (kind === 'login') await authAPI.login(data.username, data.password);
      else await authAPI.register(data.username, data.password);

      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err.errors[0].msg);
      setLoading(false);
    }
  };

  const disabled = !data.username || !data.password;

  return (
    <main className='auth-container'>
      <div className='auth'>
        <div className='auth__tabs'>
          <button
            className={
              'auth__tab' + (kind === 'login' ? ' auth__tab--active' : '')
            }
            onClick={() => setKind('login')}
          >
            Login
          </button>
          <button
            className={
              'auth__tab' + (kind === 'register' ? ' auth__tab--active' : '')
            }
            onClick={() => setKind('register')}
          >
            Register
          </button>
        </div>

        <form className='auth__form' onSubmit={handleSubmit}>
          <label className='auth__field'>
            Username
            <input
              type='text'
              name='username'
              value={data.username}
              onChange={handleChange}
            />
          </label>

          <label className='auth__field'>
            Password
            <input
              type='password'
              name='password'
              value={data.password}
              onChange={handleChange}
            />
          </label>

          {loading ? (
            <Loading />
          ) : (
            <input
              type='submit'
              className='auth__field auth__field--submit'
              value={kind === 'login' ? 'Login' : 'Register'}
              disabled={disabled}
            />
          )}
        </form>

        <p className='auth__error'>{error}&nbsp;</p>
      </div>
    </main>
  );
}

export default Auth;
