import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import authAPI from '../../api/auth';

function PrivateOutlet() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authAPI.isLoggedIn()) navigate('/auth');
    else setLoading(false);
  }, [navigate]);

  if (loading) return <h1>Loading</h1>;

  return <Outlet />;
}

export default PrivateOutlet;
