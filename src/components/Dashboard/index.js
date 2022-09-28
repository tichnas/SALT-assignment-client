import { useState } from 'react';
import useSWR from 'swr';

import balanceAPI from '../../api/balance';

// NOTE: Dashboard does NOT follow good coding practices or styling
function Dashboard() {
  const { data, mutate, error } = useSWR('get-balance', balanceAPI.get);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setAmount(Number(e.target.value));

  const credit = async () => {
    setLoading(true);

    try {
      await balanceAPI.credit(amount);
      await mutate();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const debit = async () => {
    setLoading(true);

    try {
      await balanceAPI.debit(amount);
      await mutate();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  if (error) console.error(error);

  if (!data || loading)
    return (
      <main>
        <section>
          <h1>Loading</h1>
        </section>
      </main>
    );

  return (
    <main>
      <section>
        <p className='mb-m'>My Balance: {data.balance}</p>

        <form>
          <label>
            Amount:
            <input
              type='number'
              value={amount}
              onChange={handleChange}
              min='0'
              className='ml-s'
            />
          </label>

          <br />

          <button onClick={credit}>Credit</button>
          <br />
          <button onClick={debit}>Debit</button>
        </form>
      </section>
    </main>
  );
}

export default Dashboard;
