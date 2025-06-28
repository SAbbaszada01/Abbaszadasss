import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import Template1 from './Template1';
import PDFGenerator from './PDFGenerator';

function CVForm() {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');

  const generatePDF = async () => {
    const doc = <Template1 name={name} experience={experience} />;
    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="cv-form">
      <input 
        type="text" 
        placeholder="Adınız" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea 
        placeholder="Təcrübə" 
        value={experience} 
        onChange={(e) => setExperience(e.target.value)} 
      />
      <button onClick={generatePDF}>PDF Yüklə</button>
    </div>
  );
}

export default CVForm;
