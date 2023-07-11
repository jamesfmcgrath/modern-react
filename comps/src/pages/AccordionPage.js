import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'sdasdasd',
      label: 'What is React?',
      content:
        'React is a front end javascript framework Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci tortor, tristique dapibus tristique nec, facilisis molestie risus. Pellentesque ornare varius tristique. Pellentesque risus enim, feugiat eu dolor et, commodo consectetur nisi. Aliquam et massa ullamcorper, porta mauris sit amet, luctus enim. ',
    },
    {
      id: 'dfgdfgdfg',
      label: 'Why use React?',
      content:
        'React is a favorite JS library among engineers Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci tortor, tristique dapibus tristique nec, facilisis molestie risus. Pellentesque ornare varius tristique. Pellentesque risus enim, feugiat eu dolor et, commodo consectetur nisi. Aliquam et massa ullamcorper, porta mauris sit amet, luctus enim. ',
    },
    {
      id: 'tryrtyrt',
      label: 'How do you use React?',
      content:
        'You use React by creating components Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci tortor, tristique dapibus tristique nec, facilisis molestie risus. Pellentesque ornare varius tristique. Pellentesque risus enim, feugiat eu dolor et, commodo consectetur nisi. Aliquam et massa ullamcorper, porta mauris sit amet, luctus enim. ',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
