'use client';

import { useState } from 'react';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  
    if (!title || !tags || !image) {
      setError('All fields (title, tags, image) are required');
      setLoading(false);
      return;
    }
  
    // Create FormData
    const formData = new FormData();
    formData.append('title', title);
    formData.append('tags', tags);
    formData.append('image', image); // Ensure `image` is a File object
  
    try {
      const response = await fetch('https://mern-task-backend-ho1z.vercel.app/addProduct', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Product added successfully');
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-auto mt-10 space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-3 transition duration-200 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-3 transition duration-200 ease-in-out"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            required
            className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
          />
        </div>

        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        >
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}
