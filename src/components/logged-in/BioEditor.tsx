"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BioEditorProps {
  userId: string;
}

const BioEditor: React.FC<BioEditorProps> = ({ userId }) => {
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBio = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/users?name=${userId}`);
        setBio(response.data.data.bio || '');
      } catch (err) {
        setError('Error fetching bio');
      }
      setLoading(false);
    };

    fetchBio();
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.put(`/api/users?userId=${userId}`, { bio });
    } catch (err) {
      setError('Error saving bio');
    }
    setLoading(false);
  };

  return (
    <div className="bio-editor">
      <textarea
        value={bio}
        onChange={handleChange}
        placeholder="Edit your bio"
        className="textarea"
        disabled={loading}
      />
      <button onClick={handleSave} className="btn btn-primary" disabled={loading}>
        Save
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default BioEditor;
