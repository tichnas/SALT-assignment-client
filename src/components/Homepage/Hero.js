import mobile from '../../assets/hero-mobile.gif';
import Typer from '../Typer';

function Hero() {
  return (
    <section className='hero'>
      <div>
        <h2 className='mb-m'>
          Money management
          <br />
          just got{' '}
          <Typer
            className='primary'
            sentences={['smarter', 'easier', 'safer']}
          />
        </h2>

        <p>
          ABC is a money management app for working professionals, loaded with a
          <span className='bold'> zero balance savings account</span> and
          <span className='bold'> commission-free mutual funds</span>. Connect
          your other bank accounts to ABC and see a combined balance and
          transaction history.
        </p>
      </div>

      <img src={mobile} alt='Mobile' className='hero__mobile' />
    </section>
  );
}

export default Hero;
