import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Important Information
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis
        nisl, lacinia id rhoncus at, tempus gravida elit. Nullam venenatis
        sapien dui, sit amet dictum sapien vehicula id. Nulla lacinia sem a leo
        auctor tristique. Nam congue elit vitae urna commodo bibendum. In a nibh
        metus. Donec cursus neque ac mauris sodales dictum. Sed eleifend magna
        id sem imperdiet, ac tempor eros vehicula. Fusce facilisis ullamcorper
        massa, sed malesuada odio cursus in. Nullam eu nisl sed turpis hendrerit
        accumsan id sed eros. Donec ac interdum nisi. Nulla vel lacinia nisi.
        Nullam justo lorem, scelerisque quis odio a, lobortis facilisis velit.
        Fusce semper nulla nunc, at consectetur orci efficitur at. Integer sem
        mauris, ullamcorper ut ligula vel, finibus iaculis dolor. Quisque
        imperdiet at ante sed elementum. Pellentesque ullamcorper maximus nulla,
        sed lacinia ex feugiat placerat.
      </p>
    </div>
  );
}

export default ModalPage;
