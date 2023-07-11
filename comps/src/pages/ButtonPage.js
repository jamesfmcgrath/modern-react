import { GoBell, GoFlame, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <div>
        <Button primary className="mb-5" onClick={handleClick}>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoFlame />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <GoBell />
          Danger
        </Button>
      </div>

      <div>
        <Button primary rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoFlame />
          Success
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoBell />
          Danger
        </Button>
      </div>

      <div>
        <Button primary outline>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoFlame />
          Success
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBell />
          Danger
        </Button>
      </div>

      <div>
        <Button primary outline rounded>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <GoFlame />
          Success
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <GoBell />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
