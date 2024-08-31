import React, { useState } from 'react';
import toast from 'react-hot-toast';


interface TagProps {
    initialTags: string[];
    id: string;
}


const Tags: React.FC<TagProps> = ({ initialTags, id }) => {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      const newTags = [...tags, newTag.trim()]; 
      setTags(newTags);
      setNewTag('');
      setIsAdding(false);
    }
  };

  const handleDeleteTag = (indexToRemove: number) => {
    const tag = tags[indexToRemove];
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    try{
      setTags(newTags);
    }catch(err){
        console.log(err);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 pb-2">
        {tags.map((tag, index) => (
          <div key={index} className="relative inline-flex items-center px-3 py-1 border rounded-full bg-yellow-400 text-black border-yellow-400 text-gray-800 font-semibold">
            <span className="mr-2">{tag}</span>
            <span 
              onClick={() => handleDeleteTag(index)}
              className="flex items-center justify-center w-4 h-4 text-xs rounded-full cursor-pointer font-bold text-black bg-white"
              style={{ backgroundColor: 'white', color: '#', fontWeight: 'bold' }}
            >
              &times;
            </span>
          </div>
        ))}
        {isAdding ? (
          <div className="bg-white relative inline-flex items-center px-3 py-1 border rounded-full border-white">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="outline-none border-none border-none focus:ring-0 text-black"
              placeholder="Enter new tag"
            />
            <span 
              onClick={handleAddTag}
              className="flex items-center bg-yellow-400 justify-center w-4 h-4 text-xs text-white rounded-full cursor-pointer ml-2"
            >
              ✓
            </span>
          </div>
        ) : (
          <div 
            className="bg-white relative inline-flex items-center px-3 py-1 border rounded-full cursor-pointer text-black bg-white border-yellow-400"
            onClick={() => setIsAdding(true)}
          >
            <span className="mr-2">Add</span>
            <span className="flex items-center justify-center w-4 h-4 text-xs text-white rounded-full bg-yellow-400">
              +
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tags;
