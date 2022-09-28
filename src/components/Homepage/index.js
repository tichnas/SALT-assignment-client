import Card from '../Card';

import { VALUES } from './constants';
import Hero from './Hero';

function Homepage() {
  return (
    <main>
      <Hero />

      <section>
        <h2 className='center mb-m'>Values that drives us</h2>

        <div className='homepage__values'>
          {VALUES.map(({ title, description, icon }, i) => (
            <Card key={i} title={title} description={description} icon={icon} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Homepage;
