import { pdf } from '@react-pdf/renderer';

const generatePDF = async (document) => {
  try {
    const blob = await pdf(document).toBlob();
    const url = URL.createObjectURL(blob);
    return url; // PDF yükləmə linki
  } catch (error) {
    console.error('PDF yaradılarkən xəta:', error);
    return null;
  }
};

export default generatePDF;