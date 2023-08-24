import { GoTrash } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="relative m-2">
      <img className="w-20 h-20" src={photo.url} alt="Random pic" />
      <div
        onClick={handleRemovePhoto}
        className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80"
      >
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}

export default PhotosListItem;
