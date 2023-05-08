// Create simple profile card

// ProfileCard function
function ProfileCard({ title, handle, image, description }) {
  // Destructure props
  // const { title, handle } = props;

  // Return JSX
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image'>
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>{title}</p>
          <p className='subtitle is-6'>{handle}</p>
        </div>
        <div className='content'>
          {description}
        </div>
      </div>
    </div>
  );
}

// Export ProfileCard function
export default ProfileCard;
