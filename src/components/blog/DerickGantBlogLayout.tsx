import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DerickGantBlogLayoutProps {
  title: string;
  children: React.ReactNode;
}

const DerickGantBlogLayout: React.FC<DerickGantBlogLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/example/derickgant');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', fontFamily: 'Georgia, Times, serif' }}>
      <header style={{ backgroundColor: '#000000', borderBottom: '2px solid #C9A94E', padding: '20px 30px', textAlign: 'center' }}>
        <a href="/example/derickgant" onClick={handleBack} style={{ textDecoration: 'none' }}>
          <img src="/images/dg-banner.png" alt="Derick Gant - 24K Life" style={{ maxWidth: '280px', height: 'auto' }} />
        </a>
      </header>

      <nav style={{ backgroundColor: '#1a1a1a', padding: '12px 40px', textAlign: 'center' }}>
        <a href="/example/derickgant" onClick={handleBack} style={{ color: '#C9A94E', textDecoration: 'none', fontSize: '13px', fontFamily: 'Arial, sans-serif', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
          &larr; Back to 24K Life Newsletters
        </a>
      </nav>

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '50px 24px 80px' }}>
        <h1 style={{
          color: '#C9A94E',
          fontSize: '32px',
          fontWeight: 'bold',
          lineHeight: '1.3',
          marginBottom: '30px',
          borderBottom: '2px solid #C9A94E40',
          paddingBottom: '20px',
        }}>
          {title}
        </h1>

        <article style={{
          color: '#e0e0e0',
          fontSize: '16px',
          lineHeight: '1.8',
        }}>
          {children}
        </article>

        <div style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #C9A94E',
          padding: '40px',
          textAlign: 'center',
          marginTop: '50px',
          borderRadius: '6px',
        }}>
          <p style={{ color: '#ffffff', fontSize: '18px', marginBottom: '20px', fontFamily: 'Georgia, Times, serif' }}>
            Ready to take control of your finances?
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/groups/24k"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#C9A94E',
              color: '#000000',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '8px',
              display: 'inline-block',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Book a Call with Derick &raquo;
          </a>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#1a1a1a',
        borderTop: '1px solid #C9A94E30',
        padding: '24px 40px',
        textAlign: 'center',
      }}>
        <img src="/images/dg-shield.png" alt="Derick Gant" width="32" height="32" style={{ marginBottom: '8px' }} />
        <p style={{ color: '#888888', fontSize: '12px', margin: 0, fontFamily: 'Arial, sans-serif' }}>
          &copy; {new Date().getFullYear()} Derick Gant / 24K Life. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DerickGantBlogLayout;
