import React, { useState, useCallback } from 'react';

// Assuming jspdf and html2canvas are loaded globally from CDN in index.html
declare const jspdf: any;
declare const html2canvas: any;

interface PDFDownloaderProps {
  lang: 'fa' | 'en';
  isVisible: boolean;
}

const PDFDownloader: React.FC<PDFDownloaderProps> = ({ lang, isVisible }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState('');

  const handleDownload = useCallback(async () => {
    setIsLoading(true);
    setProgress(lang === 'fa' ? 'در حال آماده‌سازی...' : 'Initializing...');

    const { jsPDF } = jspdf;
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      compress: true,
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const contentWidth = pageWidth - margin * 2;
    let yPos = margin;

    const elementsToCapture = document.querySelectorAll(
      '.roadmap-level-card' // Only capture the roadmap level cards
    );
    const totalElements = elementsToCapture.length;
    
    // Temporarily hide elements that shouldn't be in the PDF
    const scrollTopButton = document.getElementById('scroll-to-top-button');
    if (scrollTopButton) (scrollTopButton as HTMLElement).style.visibility = 'hidden';
    const header = document.querySelector('header');
    if (header) (header as HTMLElement).style.visibility = 'hidden';

    try {
      for (let i = 0; i < totalElements; i++) {
        const element = elementsToCapture[i] as HTMLElement;
        const progressText = lang === 'fa' ? `پردازش ${i + 1}/${totalElements}...` : `Processing ${i + 1}/${totalElements}...`;
        setProgress(progressText);
        
        // --- CRITICAL STEP: Force all accordions within the element to be open for capture ---
        const accordions = element.querySelectorAll('.accordion-content');
        const chevrons = element.querySelectorAll('.accordion-chevron');
        const originalAccordionStyles: {el: HTMLElement, style: string}[] = [];

        accordions.forEach(acc => {
            originalAccordionStyles.push({el: acc as HTMLElement, style: (acc as HTMLElement).style.cssText});
            (acc as HTMLElement).style.gridTemplateRows = '1fr';
            (acc as HTMLElement).style.opacity = '1';
        });
        chevrons.forEach(ch => (ch as HTMLElement).style.display = 'none');
        // --- End of accordion forcing ---

        const canvas = await html2canvas(element, {
          scale: 2, // Higher scale for better quality
          useCORS: true,
          backgroundColor: '#111827', // Tailwind's bg-gray-900
          logging: false,
        });
        
        // --- Restore original styles after capture ---
        originalAccordionStyles.forEach(item => item.el.style.cssText = item.style);
        chevrons.forEach(ch => (ch as HTMLElement).style.display = '');
        // --- End of restoration ---

        const imgData = canvas.toDataURL('image/jpeg', 0.9); // Use JPEG for smaller file size
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const ratio = imgWidth / imgHeight;
        const pdfImageHeight = contentWidth / ratio;
        
        if (yPos + pdfImageHeight > pageHeight - margin && i > 0) {
          doc.addPage();
          yPos = margin;
        }

        doc.addImage(imgData, 'JPEG', margin, yPos, contentWidth, pdfImageHeight, undefined, 'FAST');
        
        yPos += pdfImageHeight + 5; // Add some spacing between sections
      }

      setProgress(lang === 'fa' ? 'ذخیره‌سازی PDF...' : 'Saving PDF...');
      const fileName = lang === 'fa' ? 'مسیر-شغلی.pdf' : 'career-path.pdf';
      doc.save(fileName);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(lang === 'fa' ? 'خطایی در هنگام ایجاد PDF رخ داد. لطفاً کنسول را برای جزئیات بررسی کنید.' : 'An error occurred while generating the PDF. Please check the console for details.');
    } finally {
      setIsLoading(false);
      setProgress('');
      // Restore hidden elements
      if (scrollTopButton) (scrollTopButton as HTMLElement).style.visibility = 'visible';
      if (header) (header as HTMLElement).style.visibility = 'visible';
    }
  }, [lang]);

  const buttonText = isLoading ? progress : (lang === 'fa' ? 'دانلود PDF' : 'Download PDF');
  
  return (
    <button
      id="pdf-downloader-button"
      type="button"
      onClick={handleDownload}
      disabled={isLoading}
      className={`fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 flex items-center justify-center px-5 h-12 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 whitespace-nowrap disabled:bg-gray-500 disabled:cursor-not-allowed
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`
      }
      title={lang === 'fa' ? 'دانلود مسیر شغلی به عنوان PDF' : 'Download career path as PDF'}
      aria-label={buttonText}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={lang === 'fa' ? { marginLeft: '0.5rem' } : { marginRight: '0.5rem' }} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
      
      {buttonText}
    </button>
  );
};

export default PDFDownloader;