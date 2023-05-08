// Import Bulma CSS
import 'bulma/css/bulma.min.css';

// Importing components
import ProfileCard from './ProfileCard';
// Importing images
// Images under 10kb are converted to base64 strings
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

// Create App function
function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title='Alexa' handle='@alexa99' image={AlexaImage} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, arcu sed pharetra pharetra, orci dolor convallis arcu, et suscipit enim ante vitae turpis.' />
            </div>
            <div className='column is-4'>
              <ProfileCard title='Cortana' handle='@cortana11' image={CortanaImage} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, arcu sed pharetra pharetra, orci dolor convallis arcu, et suscipit enim ante vitae turpis.' />
            </div>
            <div className='column is-4'>
              <ProfileCard title='Siri' handle='@siri77' image={SiriImage} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, arcu sed pharetra pharetra, orci dolor convallis arcu, et suscipit enim ante vitae turpis.' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Export App function
export default App;
