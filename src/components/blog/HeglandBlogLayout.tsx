import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeglandBlogLayoutProps {
  title: string;
  children: React.ReactNode;
}

const HeglandBlogLayout: React.FC<HeglandBlogLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/example/hegland');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Georgia, Times, serif' }}>
      <header style={{ backgroundColor: '#ffffff', borderBottom: '3px solid #004712', padding: '20px 30px' }}>
        <a href="/example/hegland" onClick={handleBack} style={{ textDecoration: 'none' }}>
          <p style={{ margin: '0 0 2px 0', fontSize: '10px', color: '#d4a94f', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>Insights From...</p>
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#004712', letterSpacing: '1px', fontFamily: 'Georgia, Times New Roman, serif' }}>HEGLAND MAINZ</h1>
          <p style={{ margin: '2px 0 0 0', fontSize: '9px', color: '#004712', letterSpacing: '3px', fontWeight: 400 }}>FINANCIAL SERVICES</p>
        </a>
      </header>

      <nav style={{ backgroundColor: '#004712', padding: '12px 40px', textAlign: 'center' }}>
        <a href="/example/hegland" onClick={handleBack} style={{ color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontFamily: 'Arial, sans-serif', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
          &larr; Back to Hegland Mainz Financial
        </a>
      </nav>

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '50px 24px 80px' }}>
        <h1 style={{
          color: '#004712',
          fontSize: '32px',
          fontWeight: 'bold',
          lineHeight: '1.3',
          marginBottom: '30px',
          borderBottom: '3px solid #d4a94f',
          paddingBottom: '20px',
        }}>
          {title}
        </h1>

        <article style={{
          color: '#2d3748',
          fontSize: '16px',
          lineHeight: '1.8',
        }}>
          {children}
        </article>

        <div style={{
          backgroundColor: '#004712',
          padding: '40px',
          textAlign: 'center',
          marginTop: '50px',
          borderRadius: '6px',
        }}>
          <p style={{ color: '#ffffff', fontSize: '18px', marginBottom: '20px', fontFamily: 'Georgia, Times, serif' }}>
            Ready to review your financial plan?
          </p>
          <a
            href="https://www.heglandmainz.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#d4a94f',
              color: '#ffffff',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '8px',
              display: 'inline-block',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Book a Call &raquo;
          </a>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#004712',
        padding: '24px 40px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#8abf97', fontSize: '12px', margin: 0, fontFamily: 'Arial, sans-serif' }}>
          &copy; {new Date().getFullYear()} Hegland Mainz Financial. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HeglandBlogLayout;
